<template>
    <div class="model-viewer" v-if="show">
        <div class="model-viewer-content">
            <div class="model-viewer-header">
                <h3>机型尺寸对比</h3>
                <div class="controls">
                    <div class="spacing-control">
                        <label>机型间距:</label>
                        <input type="number" v-model="modelSpacing" min="0" max="200" step="2">
                    </div>
                    <div class="layout-control">
                        <button @click="toggleLayout" title="切换布局">
                            {{ isSideBySide ? '前后布局' : '并排布局' }}
                        </button>
                    </div>
                    <div class="camera-controls">
                        <button @click="setCameraAngle('front')" title="正面">正</button>
                        <button @click="setCameraAngle('side')" title="侧面">侧</button>
                        <button @click="setCameraAngle('top')" title="俯视">俯</button>
                        <button @click="setCameraAngle('iso')" title="等轴测">等</button>
                    </div>
                </div>
                <button class="close-btn" @click="$emit('close')">关闭</button>
            </div>
            <div class="viewer-container">
                <div class="canvas-wrapper">
                    <div ref="canvasContainer" class="canvas-container"></div>
                    <div class="operation-desc">
                        操作说明：鼠标左键按住拖动可旋转视角，滚轮可缩放，右键按住拖动可平移。移动端双指拖动。
                    </div>
                </div>
                <div class="model-table">
                    <table>
                        <thead>
                            <tr>
                                <th>机型</th>
                                <th>高</th>
                                <th>宽</th>
                                <th>厚</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(model, index) in models" :key="model.name">
                                <td>
                                    <div class="model-name">
                                        <div class="color-box" :style="{ backgroundColor: getColorHex(index) }"></div>
                                        <span>{{ model.name }}</span>
                                    </div>
                                </td>
                                <td>{{ model.height }}</td>
                                <td>{{ model.width }}</td>
                                <td>{{ model.thickness }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { shallowRef, onMounted, watch, onBeforeUnmount, ref } from 'vue';

export default {
    name: 'ModelViewer',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        model: {
            type: Object,
            required: true
        },
        models: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const scene = shallowRef(null); // 场景
        const camera = shallowRef(null); // 相机
        const renderer = shallowRef(null); // 渲染器
        const controls = shallowRef(null); // 控制器
        const boxes = shallowRef([]); // 机型盒子
        const canvasContainer = shallowRef(null); // 画布容器
        const modelSpacing = ref(15); // 机型间距
        const labels = shallowRef([]); // 机型标签
        const isSideBySide = ref(false);

        // Define colors for different models
        const colors = [
            0x2196F3, // Blue
            0x4CAF50, // Green
            0xFFC107, // Amber
            0xF44336, // Red
            0x9C27B0, // Purple
            0x00BCD4, // Cyan
            0xFF9800, // Orange
            0x795548, // Brown
            0x607D8B, // Blue Grey
            0xE91E63  // Pink
        ];

        const getColorHex = (index) => {
            return '#' + colors[index % colors.length].toString(16).padStart(6, '0');
        };

        // Compute bounding box center of all models (rotation center)
        const getModelsCenter = () => {
            if (!boxes.value.length) {
                return { center: new THREE.Vector3(0, 0, 0), sizeX: 0, sizeY: 0, sizeZ: 0 };
            }
            const box3 = new THREE.Box3();
            let minX = Infinity, maxX = -Infinity;
            let minY = Infinity, maxY = -Infinity;
            let minZ = Infinity, maxZ = -Infinity;
            boxes.value.forEach(box => {
                box3.setFromObject(box);
                minX = Math.min(minX, box3.min.x);
                maxX = Math.max(maxX, box3.max.x);
                minY = Math.min(minY, box3.min.y);
                maxY = Math.max(maxY, box3.max.y);
                minZ = Math.min(minZ, box3.min.z);
                maxZ = Math.max(maxZ, box3.max.z);
            });
            const center = new THREE.Vector3(
                (minX + maxX) / 2,
                (minY + maxY) / 2,
                (minZ + maxZ) / 2
            );
            return {
                center,
                sizeX: maxX - minX,
                sizeY: maxY - minY,
                sizeZ: maxZ - minZ
            };
        };

        const createLabel = (text, position) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 256;  // Reduced from 512
            canvas.height = 64;  // Reduced from 128
            
            // Enable high-quality text rendering
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            
            // Clear with white background
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw text with better quality
            context.font = 'bold 24px Arial';  // Reduced from 48px
            context.fillStyle = '#000000';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            
            // Add text shadow for better readability
            context.shadowColor = 'rgba(0, 0, 0, 0.5)';
            context.shadowBlur = 1;  // Reduced from 2
            context.shadowOffsetX = 0.5;  // Reduced from 1
            context.shadowOffsetY = 0.5;  // Reduced from 1
            
            context.fillText(text, canvas.width / 2, canvas.height / 2);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            
            const material = new THREE.SpriteMaterial({ 
                map: texture,
                transparent: true,
                depthTest: false
            });
            
            const sprite = new THREE.Sprite(material);
            sprite.position.copy(position);
            sprite.scale.set(25, 6.25, 1);  // Reduced from 50, 12.5, 1
            
            return sprite;
        };

        const setupThreeJS = () => {
            console.log('Starting ThreeJS initialization');
            if (!canvasContainer.value) {
                console.error('Canvas container not found');
                return;
            }

            // Create scene
            scene.value = new THREE.Scene();
            scene.value.background = new THREE.Color(0xf0f0f0);

            // Create camera
            const containerWidth = canvasContainer.value.clientWidth;
            const containerHeight = canvasContainer.value.clientHeight;
            console.log('Container dimensions:', containerWidth, containerHeight);

            camera.value = new THREE.PerspectiveCamera(
                50,  // Field of view
                containerWidth / containerHeight, // Aspect ratio
                0.1,  // Near clipping plane  unit: meter
                2000  // Far clipping plane  unit: meter
            );
            camera.value.position.set(200, 400, 200);  
            camera.value.lookAt(0, 100, 0);

            // Create renderer
            renderer.value = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                precision: 'highp',
                powerPreference: 'high-performance'
            });
            renderer.value.setPixelRatio(window.devicePixelRatio);
            renderer.value.setSize(containerWidth, containerHeight);
            renderer.value.shadowMap.enabled = true;
            renderer.value.shadowMap.type = THREE.PCFSoftShadowMap;
            canvasContainer.value.appendChild(renderer.value.domElement);
            console.log('Renderer initialized and appended to container');

            // Add lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
            scene.value.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
            directionalLight.position.set(1, 1, 1);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            scene.value.add(directionalLight);

            const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
            backLight.position.set(-1, -1, -1);
            backLight.castShadow = true;
            backLight.shadow.mapSize.width = 2048;
            backLight.shadow.mapSize.height = 2048;
            scene.value.add(backLight);

            const topLight = new THREE.DirectionalLight(0xffffff, 0.6);
            topLight.position.set(0, 1, 0);
            topLight.castShadow = true;
            topLight.shadow.mapSize.width = 2048;
            topLight.shadow.mapSize.height = 2048;
            scene.value.add(topLight);

            // Create iPhone boxes based on model dimensions
            const models = props.models.length > 0 ? props.models : [props.model];
            boxes.value = [];
            labels.value = [];
            
            // Sort models by width (smallest to largest)
            const sortedModels = [...models].sort((a, b) => (a.width || 0) - (b.width || 0));
            
            let currentZ = 0;

            sortedModels.forEach((model, index) => {
            const geometry = new THREE.BoxGeometry(
                    model.width || 1,
                    model.height || 1,
                    model.thickness || 0.1,
                    32, // width segments
                    32, // height segments
                    8   // depth segments
            );
            
            // Add rounded corners
            const radius = Math.min(model.width || 1, model.height || 1) * 0.1; // 10% of the smaller dimension
            const position = geometry.attributes.position;
            const vertex = new THREE.Vector3();
            
            for (let i = 0; i < position.count; i++) {
                vertex.fromBufferAttribute(position, i);
                
                // Round the corners
                if (Math.abs(vertex.x) > (model.width || 1) / 2 - radius && 
                    Math.abs(vertex.y) > (model.height || 1) / 2 - radius) {
                    const cornerX = Math.sign(vertex.x) * ((model.width || 1) / 2 - radius);
                    const cornerY = Math.sign(vertex.y) * ((model.height || 1) / 2 - radius);
                    const dx = vertex.x - cornerX;
                    const dy = vertex.y - cornerY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance > 0) {
                        const scale = radius / distance;
                        vertex.x = cornerX + dx * scale;
                        vertex.y = cornerY + dy * scale;
                    }
                }
                
                position.setXYZ(i, vertex.x, vertex.y, vertex.z);
            }
            
            position.needsUpdate = true;
            geometry.computeVertexNormals();
            
            const material = new THREE.MeshPhongMaterial({
                    color: colors[index % colors.length],
                transparent: true,
                opacity: 0.9,
                    shininess: 100,
                    flatShading: false,
                    side: THREE.DoubleSide
                });
                const box = new THREE.Mesh(geometry, material);
                box.castShadow = true;
                box.receiveShadow = true;
                
                // Position the box so its bottom face is at (0,0,0)
                box.position.set(
                    -(model.width || 1) / 2,
                    (model.height || 1) / 2,
                    currentZ
                );
                
                // Add label
                const label = createLabel(model.name, new THREE.Vector3(
                    box.position.x,
                    box.position.y + (model.height || 1) / 2 + 10,
                    box.position.z
                ));
                
                currentZ += modelSpacing.value;
                
                scene.value.add(box);
                scene.value.add(label);
                boxes.value.push(box);
                labels.value.push(label);
            });

            // Add a grid helper to visualize the ground plane
            const gridHelper = new THREE.GridHelper(2000, 100, 0x000000, 0x000000);
            gridHelper.material.opacity = 0.5;
            gridHelper.material.transparent = true;
            gridHelper.position.y = 0;
            scene.value.add(gridHelper);

            // Add controls
            controls.value = new OrbitControls(camera.value, renderer.value.domElement);
            controls.value.enableDamping = true;
            controls.value.dampingFactor = 0.05;
            controls.value.minDistance = 100;
            controls.value.maxDistance = 1000;
            controls.value.enableZoom = true;
            controls.value.zoomSpeed = 1.0;

            // Calculate center of all models and set rotation target to midpoint
            const { center: modelsCenter, sizeX, sizeY, sizeZ } = getModelsCenter();
            controls.value.target.copy(modelsCenter);

            // Position camera relative to models center
            const maxSize = Math.max(sizeX, sizeY, sizeZ);
            const cameraDistance = Math.max(maxSize * 2, 200);
            camera.value.position.set(
                modelsCenter.x + cameraDistance * 0.5,
                modelsCenter.y + cameraDistance * 0.5,
                modelsCenter.z + cameraDistance * 0.5
            );
            camera.value.lookAt(modelsCenter);

            // Start animation loop
            animate();
            console.log('ThreeJS initialization complete');

            // Handle window resize
            window.addEventListener('resize', onWindowResize);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            if (controls.value && renderer.value && scene.value && camera.value) {
                controls.value.update();
                renderer.value.render(scene.value, camera.value);
            }
        };

        const onWindowResize = () => {
            if (!canvasContainer.value || !camera.value || !renderer.value) return;

            const containerWidth = canvasContainer.value.clientWidth;
            const containerHeight = canvasContainer.value.clientHeight;

            camera.value.aspect = containerWidth / containerHeight;
            camera.value.updateProjectionMatrix();
            renderer.value.setSize(containerWidth, containerHeight);
            renderer.value.setPixelRatio(window.devicePixelRatio);
        };

        const updateModelPositions = () => {
            if (!boxes.value.length) return;

            const models = props.models.length > 0 ? props.models : [props.model];
            const sortedModels = [...models].sort((a, b) => (a.width || 0) - (b.width || 0));
            
            let currentZ = 0;
            let currentX = 0;
            let totalWidth = 0;
            let totalDepth = 0;

            // First pass: calculate total dimensions
            sortedModels.forEach(model => {
                if (isSideBySide.value) {
                    totalWidth += (model.width || 1) + modelSpacing.value;
                } else {
                    totalDepth += modelSpacing.value;
                }
            });

            // Remove last spacing
            if (isSideBySide.value) {
                totalWidth -= modelSpacing.value;
            } else {
                totalDepth -= modelSpacing.value;
            }

            // Second pass: position models
            boxes.value.forEach((box, index) => {
                const model = sortedModels[index];
                if (isSideBySide.value) {
                    // Side by side layout
                    const x = currentX - totalWidth / 2; // Center the group
                    box.position.set(
                        x,
                        (model.height || 1) / 2,
                        0
                    );
                    currentX += (model.width || 1) + modelSpacing.value;

                    // Update label position
                    if (labels.value[index]) {
                        labels.value[index].position.set(
                            x,
                            box.position.y + (model.height || 1) / 2 + 10,
                            0
                        );
                    }
                } else {
                    // Front-back layout
                    const z = currentZ - totalDepth / 2; // Center the group
                    box.position.set(
                        -(model.width || 1) / 2,
                        (model.height || 1) / 2,
                        z
                    );
                    currentZ += modelSpacing.value;

                    // Update label position
                    if (labels.value[index]) {
                        labels.value[index].position.set(
                            box.position.x,
                            box.position.y + (model.height || 1) / 2 + 10,
                            z
                        );
                    }
                }
            });

            // Keep rotation center at midpoint of all models
            if (controls.value && boxes.value.length > 0) {
                const { center } = getModelsCenter();
                controls.value.target.copy(center);
            }
        };

        const toggleLayout = () => {
            isSideBySide.value = !isSideBySide.value;
            updateModelPositions();
        };

        // Watch for spacing changes
        watch(modelSpacing, () => {
            updateModelPositions();
        });

        // Watch for layout changes
        watch(isSideBySide, () => {
            updateModelPositions();
        });

        watch(() => props.show, (newVal) => {
            console.log('Show value changed:', newVal);
            if (newVal) {
                document.body.classList.add('modal-open');
                setupThreeJS();
            } else {
                document.body.classList.remove('modal-open');
            }
        });

        const setCameraAngle = (angle) => {
            if (!camera.value || !controls.value || !boxes.value.length) return;

            const { center, sizeX, sizeY, sizeZ } = getModelsCenter();
            const maxSize = Math.max(sizeX, sizeY, sizeZ);
            const cameraDistance = Math.max(maxSize * 2, 200);

            const positions = {
                front: { x: center.x, y: center.y, z: center.z + cameraDistance },
                side: { x: center.x + cameraDistance, y: center.y, z: center.z },
                top: { x: center.x, y: center.y + cameraDistance, z: center.z },
                iso: { x: center.x + cameraDistance * 0.5, y: center.y + cameraDistance * 0.5, z: center.z + cameraDistance * 0.5 }
            };

            const pos = positions[angle];
            if (!pos) return;

            // Animate camera movement
            const duration = 1000; // 1 second
            const startPos = camera.value.position.clone();
            const startTime = Date.now();

            const animateCamera = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease in-out function
                const easeProgress = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                camera.value.position.lerpVectors(startPos, new THREE.Vector3(pos.x, pos.y, pos.z), easeProgress);
                controls.value.target.copy(center);
                controls.value.update();

                if (progress < 1) {
                    requestAnimationFrame(animateCamera);
                }
            };

            animateCamera();
        };

        onMounted(() => {
            console.log('Component mounted');
            if (props.show) {
                setupThreeJS();
            }
        });

        onBeforeUnmount(() => {
            document.body.classList.remove('modal-open');
            window.removeEventListener('resize', onWindowResize);
            if (renderer.value) {
                renderer.value.dispose();
            }
        });

        return {
            scene,
            camera,
            renderer,
            controls,
            boxes,
            canvasContainer,
            modelSpacing,
            getColorHex,
            setCameraAngle,
            isSideBySide,
            toggleLayout
        };
    }
}
</script>

<style lang="scss" scoped>
.model-viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .model-viewer-content {
        background: white;
        border-radius: 8px;
        padding: 20px;
        width: 90%;
        height: 90%;
        position: relative;
        overflow: auto;

        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            border-radius: 0;
            padding: 10px;
        }
    }

    .model-viewer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            position: absolute;
            top: 10px;
            right: 10px;
            margin: 0;
            z-index: 1;
        }

        h3 {
            margin: 0;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .controls {
            display: flex;
            align-items: center;
            gap: 20px;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .spacing-control {
            display: flex;
            align-items: center;
            gap: 10px;

            input {
                width: 80px;
                padding: 4px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
        }

        .layout-control {
            button {
                padding: 4px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                background: white;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
                min-width: 80px;

                &:hover {
                    background: #f0f0f0;
                    border-color: #999;
                }

                &:active {
                    background: #e0e0e0;
                }
            }
        }

        .camera-controls {
            display: flex;
            gap: 8px;

            button {
                padding: 4px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                background: white;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;

                &:hover {
                    background: #f0f0f0;
                    border-color: #999;
                }

                &:active {
                    background: #e0e0e0;
                }
            }
        }

        .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            color: #666;
            z-index: 2;

            @media (max-width: 768px) {
                font-size: 12px;
                color: #333;
                background: rgba(255, 255, 255, 0.9);
                width: 40px;
                height: 40px;
                display: flex;
                line-height: 1;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            }

            &:hover {
                color: #333;
            }
        }
    }

    .viewer-container {
        display: flex;
        gap: 20px;
        height: calc(100% - 60px);

        @media (max-width: 768px) {
            height: 100%;
            gap: 0;
        }
    }

    .canvas-wrapper {
        flex: 1;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .canvas-container {
        flex: 1;
        height: 100%;
    }

    .operation-desc {
        font-size: 12px;
        color: #666;
        background: rgba(255, 255, 255, 0.8);
        padding: 6px 10px;
        border-radius: 4px;
        align-self: flex-end;
        margin: 10px;

        @media (max-width: 768px) {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            font-size: 10px;
            padding: 4px 8px;
            background: rgba(255, 255, 255, 0.9);
        }
    }

    .model-table {
        width: 400px;
        background: #f5f5f5;
        border-radius: 4px;
        padding: 10px;
        height: fit-content;
        font-size: 13px;

        @media (max-width: 768px) {
            display: none;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            
            th, td {
                padding: 4px 6px;
                text-align: left;
                border-bottom: 1px solid #ddd;
                vertical-align: top;
            }

            th {
                font-weight: 600;
                color: #333;
                font-size: 12px;
                text-transform: uppercase;
            }

            th:nth-child(1) { width: 40%; }
            th:nth-child(2) { width: 20%; }
            th:nth-child(3) { width: 20%; }
            th:nth-child(4) { width: 20%; }

            .model-name {
                display: flex;
                align-items: flex-start;
                gap: 6px;
                white-space: nowrap;

                .color-box {
                    width: 12px;
                    height: 12px;
                    border-radius: 2px;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                span {
                    line-height: 1.2;
                }
            }
        }
    }
}

:global(body.modal-open) {
    overflow: hidden;
}
</style> 