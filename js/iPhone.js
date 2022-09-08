/*****************************
 Create Date: 20201016172121
 Update Date: 20220309101712
 *****************************/
const lastOS = "最新"
const iphones = [
    {
        name: "iPhone 1",
        name_short: "1",
        isTitleOnly: false,
        pic: "1",
        slogan: "This is only the beginning. Apple reinvents the phone.",
        isNew: false,
        active: false,
        release: "2007-06-29",
        models: [
            {name: "A1203", type: ""},
        ],
        network: ["GSM"],
        height: 115,
        width: 61,
        thickness: 11.6,
        weight: 135,
        os: {
            init: "iOS 1.0",
            last: "iOS 3.1.3"
        },
        cpu: {
            icon: 'other',
            model: 'Samsung RISC',
            rate: '0.412',
            core: 1
        },
        gpu: {},
        modem: '',
        memory: [
            {size: "0.128", type: "eDRAM"}
        ],
        storage: ["4", "8", "16"],
        battery: '1400',
        port: '30针',
        screen: {
            brightness: '',
            size: "3.5",
            type: 'LCD',
            refreshRate: "",
            width: 320,
            height: 480,
            density: "163",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'White', color: '#FDFDFD'}
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ['Wi-Fi', "蓝牙 2.0"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 3G",
        name_short: "3G",
        isTitleOnly: false,
        pic: "3g",
        slogan: "New features, new price.",
        isNew: false,
        active: false,
        release: "2008-07-11",
        models: [
            {name: "A1324", type: "国内"},
            {name: "A1241", type: ""},
        ],
        network: ["GSM"],
        height: 115.5,
        width: 62.1,
        thickness: 12.3,
        weight: 133,
        os: {
            init: "iOS 2.0",
            last: "iOS 4.2.1"
        },
        cpu: {
            icon: 'other',
            model: 'Samsung RISC',
            rate: '0.620',
            core: 1
        },
        gpu: {},
        modem: '',
        memory: [
            {size: "0.128", type: "DRAM"}
        ],
        storage: ["8", "16"],
        battery: '1150',
        port: '30针',
        screen: {
            brightness: '',
            size: "3.5",
            type: 'LCD',
            refreshRate: "",
            width: 320,
            height: 480,
            density: "163",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'White', color: '#FDFDFD'}
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ['Wi-Fi', "蓝牙 2.0"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 3Gs",
        name_short: "3Gs",
        isTitleOnly: false,
        pic: "3gs",
        slogan: "The fastest, smartest phone yet. More to love. Less to pay.",
        isNew: false,
        active: false,
        release: "2009-06-19",
        models: [
            {name: "A1325", type: "国内"},
            {name: "A1303", type: ""},
        ],
        network: ["GSM", "GPRS", "EDGE", "UMTS", "HSDPA"],
        height: 115.5,
        width: 62.1,
        thickness: 12.3,
        weight: 135,
        os: {
            init: "iOS 3.0",
            last: "iOS 6.1.6"
        },
        cpu: {
            icon: 'other',
            model: 'Samsung S5PC100',
            rate: '0.6',
            core: 1
        },
        gpu: {
            model: "SGX535",
            core: 0
        },
        modem: '',
        memory: [
            {size: "0.256", type: "DRAM"}
        ],
        storage: ["8", "16", "32"],
        battery: '1220',
        port: '30针',
        screen: {
            brightness: '',
            size: "3.5",
            type: 'LCD',
            refreshRate: "",
            width: 320,
            height: 480,
            density: "163",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'White', color: '#FDFDFD'}
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ['Wi-Fi 2.4', "蓝牙 2.1"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 4",
        name_short: "4",
        isTitleOnly: false,
        pic: "4",
        slogan: "This changes everything. Again.",
        isNew: false,
        active: false,
        release: "2010-06-24",
        models: [
            {name: "A1332", type: "GSM"},
            {name: "A1349", type: "CDMA"},
        ],
        network: ["GSM", "CDMA"],
        height: 115.2,
        width: 58.6,
        thickness: 9.3,
        weight: 137,
        os: {
            init: "iOS 4.0",
            last: "iOS 7.1.2"
        },
        cpu: {
            icon: 'A4',
            model: 'A4',
            rate: '1.0',
            core: 1
        },
        gpu: {
            model: "SGX535",
            core: 0
        },
        modem: '',
        memory: [
            {size: "0.512", type: "DRAM"}
        ],
        storage: ["8", "16", "32"],
        battery: '1420',
        port: '30针',
        screen: {
            brightness: '',
            size: "3.5",
            type: 'IPS TFT LCD',
            refreshRate: "",
            width: 640,
            height: 960,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'White', color: '#FDFDFD'}
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ['Wi-Fi 2.4', "蓝牙 2.1"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 4s",
        name_short: "4s",
        isTitleOnly: false,
        pic: "4s",
        slogan: "The most amazing iPhone yet.",
        isNew: false,
        active: false,
        release: "2011-10-14",
        models: [],
        network: ["GSM", "CDMA", "3G", "3G+", "HSUPA"],
        height: 115.2,
        width: 58.6,
        thickness: 9.3,
        weight: 140,
        os: {
            init: "iOS 5.0",
            last: "iOS 9.3.6"
        },
        cpu: {
            icon: 'A5',
            model: 'A5',
            rate: '1.0',
            core: 2
        },
        gpu: {
            model: "SGX543MP2",
            core: 0
        },
        modem: '',
        memory: [
            {size: "0.512", type: "DDR2"}
        ],
        storage: ["8", "16", "32", "64"],
        battery: '1430',
        port: '30针',
        screen: {
            brightness: '',
            size: "3.5",
            type: 'IPS TFT LCD',
            refreshRate: "",
            width: 640,
            height: 960,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'White', color: '#FDFDFD'}
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ['Wi-Fi 2.4'],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 5",
        name_short: "5",
        isTitleOnly: false,
        pic: "5",
        slogan: "Loving it is easy. That's why so many people do. The biggest thing to happen to iPhone since iPhone.",
        isNew: false,
        active: false,
        release: "2012-09-21",
        models: [],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "LTE"],
        height: 123.8,
        width: 58.6,
        thickness: 7.6,
        weight: 112,
        os: {
            init: "iOS 6.0",
            last: "iOS 10.3.4"
        },
        cpu: {
            icon: 'A6',
            model: 'A6',
            rate: '1.3',
            core: 2
        },
        gpu: {
            model: "SGX543MP3",
            core: 0
        },
        modem: '',
        memory: [
            {size: "1", type: "LPDDR2"}
        ],
        storage: ["16", "32", "64"],
        battery: '1440',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.0",
            type: 'IPS TFT LCD',
            refreshRate: "",
            width: 640,
            height: 1136,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [ // 用的 iPhone XR 的颜色，具体什么颜色不太清楚，只知道是黑白两色
            {name: 'Black', color: '#2E3034'},
            {name: 'White', color: '#F3F3F3'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ['Wi-Fi'],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 5c",
        name_short: "5c",
        isTitleOnly: false,
        pic: "5c",
        slogan: "For the colorful",
        isNew: false,
        active: false,
        release: "2013-09-20",
        models: [
            {name: "A1456", type: ""},
            {name: "A1507", type: ""},
            {name: "A1516", type: ""},
            {name: "A1529", type: ""},
            {name: "A1532", type: ""},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "EDGE", "LTE"],
        height: 124.4,
        width: 59.2,
        thickness: 8.97,
        weight: 132,
        os: {
            init: "iOS 7.0",
            last: "iOS 10.3.3"
        },
        cpu: {
            icon: 'A6',
            model: 'A6',
            rate: '1.3',
            core: 2
        },
        gpu: {
            model: "SGX543MP3",
            core: 3
        },
        modem: '',
        memory: [
            {size: "1", type: "LPDDR2"}
        ],
        storage: ["8", "32"],
        battery: '1510',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.0",
            type: 'IPS TFT LCD',
            refreshRate: "",
            width: 640,
            height: 1136,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'White', color: '#F3F3F3'},
            {name: 'Blue', color: '#48AEE6'},
            {name: 'Green', color: '#A2EB67'},
            {name: 'Yellow', color: '#F9D045'},
            {name: 'Pink', color: '#FF6E5A'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: [],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 5s",
        name_short: "5s",
        isTitleOnly: false,
        pic: "5s",
        slogan: "You're more powerful than you think. Forward thinking",
        isNew: false,
        active: false,
        release: "2013-09-20",
        models: [
            {name: "A1457", type: "中东"},
            {name: "A1518", type: "国内"},
            {name: "A1528", type: "国内"},
            {name: "A1530", type: "东亚"},
            {name: "A1533", type: "美,国内"},
            {name: "A1453", type: "美,日本"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "LTE"],
        height: 123.8,
        width: 58.6,
        thickness: 7.6,
        weight: 112,
        os: {
            init: "iOS 7.0",
            last: "iOS 12.4.8"
        },
        cpu: {
            icon: 'A7',
            model: 'A7',
            rate: '1.3',
            core: 2
        },
        gpu: {
            model: "GX6430",
            core: 4
        },
        modem: '',
        memory: [
            {size: "1", type: "LPDDR3"}
        ],
        storage: ["16", "32", "64"],
        battery: '1560',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.0",
            type: 'IPS TFT LCD',
            refreshRate: "",
            width: 640,
            height: 1136,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Space Gray', color: '#A9AAB0'},
            {name: 'Silver', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "LTE", "Wi-Fi", "蓝牙 4.0", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6",
        name_short: "6",
        isTitleOnly: false,
        pic: "6",
        slogan: "Bigger than bigger. The two and only",
        isNew: false,
        active: false,
        release: "2014-09-16",
        models: [
            {name: "A1549", type: "美"},
            {name: "A1586", type: ""},
            {name: "A1589", type: "国内"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "4G", "LTE"],
        height: 138.1,
        width: 67.0,
        thickness: 6.9,
        weight: 129,
        os: {
            init: "iOS 8.0",
            last: "iOS 12.4.8"
        },
        cpu: {
            icon: 'A8',
            model: 'A8',
            rate: '1.4',
            core: 2
        },
        gpu: {
            model: "GX6450",
            core: 4
        },
        modem: '',
        memory: [
            {size: "1", type: "LPDDR3"}
        ],
        storage: ["16", "32", "64", "128"],
        battery: '1810',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.7",
            type: 'IPS LCD',
            refreshRate: "",
            width: 750,
            height: 1334,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Space Gray', color: '#B1B2B7'},
            {name: 'Silver', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6 plus",
        name_short: "6 plus",
        isTitleOnly: false,
        pic: "6",
        slogan: "Bigger than bigger. The two and only",
        isNew: false,
        active: false,
        release: "2014-09-16",
        models: [
            {name: "A1522", type: "美"},
            {name: "A1524", type: ""},
            {name: "A1593", type: "国内"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "4G", "LTE"],
        height: 158.1,
        width: 77.8,
        thickness: 7.1,
        weight: 172,
        os: {
            init: "iOS 8.0",
            last: "iOS 12.4.8"
        },
        cpu: {
            icon: 'A8',
            model: 'A8',
            rate: '1.4',
            core: 2
        },
        gpu: {
            model: "GX6450",
            core: 4
        },
        modem: '',
        memory: [
            {size: "1", type: "LPDDR3"}
        ],
        storage: ["16", "64", "128"],
        battery: '2915',
        port: '闪电',
        screen: {
            brightness: '',
            size: "5.5",
            type: 'IPS LCD',
            refreshRate: "",
            width: 1080,
            height: 1920,
            density: "401",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Space Gray', color: '#B1B2B7'},
            {name: 'Silver', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6s",
        name_short: "6s",
        isTitleOnly: false,
        pic: "6s",
        slogan: "The only thing that’s changed is everything. One powerful phone",
        isNew: false,
        active: false,
        release: "2015-09-25",
        models: [
            {name: "A1633", type: "美"},
            {name: "A1688", type: ""},
            {name: "A1700", type: "国内"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "LTE/4G", "LTE Advanced/4G+"],
        height: 138.3,
        width: 67.1,
        thickness: 7.1,
        weight: 143,
        os: {
            init: "iOS 9.0.1",
            last: lastOS
        },
        cpu: {
            icon: 'A9',
            model: 'A9',
            rate: '1.85',
            core: 2
        },
        gpu: {
            model: "GT7600",
            core: 6
        },
        modem: '',
        memory: [
            {size: "2", type: "LPDDR4"}
        ],
        storage: ["16", "32", "64", "128"],
        battery: '1715',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.7",
            type: 'IPS LCD',
            refreshRate: "",
            width: 750,
            height: 1334,
            density: "326",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Space Gray', color: '#B1B2B7'},
            {name: 'Silver', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
            {name: 'Rose Gold', color: '#ECC6C1'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6s plus",
        name_short: "6s plus",
        isTitleOnly: false,
        pic: "6s",
        slogan: "The only thing that’s changed is everything. One powerful phone",
        isNew: false,
        active: false,
        release: "2015-09-25",
        models: [
            {name: "A1634", type: "美"},
            {name: "A1687", type: ""},
            {name: "A1699", type: "国内"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "LTE/4G", "LTE Advanced/4G+"],
        height: 158.2,
        width: 77.9,
        thickness: 7.3,
        weight: 192,
        os: {
            init: "iOS 9.0.1",
            last: lastOS
        },
        cpu: {
            icon: 'A9',
            model: 'A9',
            rate: '1.85',
            core: 2
        },
        gpu: {
            model: "GT7600",
            core: 6
        },
        modem: '',
        memory: [
            {size: "2", type: "LPDDR4"}
        ],
        storage: ["16", "32", "64", "128"],
        battery: '2750',
        port: '闪电',
        screen: {
            brightness: '',
            size: "5.5",
            type: 'IPS LCD',
            refreshRate: "",
            width: 1080,
            height: 1920,
            density: "401",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Space Gray', color: '#B1B2B7'},
            {name: 'Silver', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
            {name: 'Rose Gold', color: '#ECC6C1'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone SE",
        name_short: "SE",
        isTitleOnly: false,
        pic: "SE",
        slogan: "A big step for small.",
        isNew: false,
        active: false,
        release: "2016-03-31",
        models: [
            {name: "A1662", type: "美，加"},
            {name: "A1723", type: "Sprint"},
            {name: "A1724", type: "国内"},
        ],
        network: ["GSM", "EDGE", "EV-DO", "HSPA+"],
        height: 123.8,
        width: 58.6,
        thickness: 7.6,
        weight: 113,
        os: {
            init: "iOS 9.3",
            last: lastOS
        },
        cpu: {
            icon: 'A9',
            model: 'A9',
            rate: '1.84',
            core: 2
        },
        gpu: {
            model: "PowerVR GT7600 ",
            core: 6
        },
        modem: '',
        memory: [
            {size: "2", type: "LPDDR4"}
        ],
        storage: ["16", "32", "64", "128"],
        battery: '1624',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.0",
            type: 'IPS',
            refreshRate: "",
            width: 640,
            height: 1136,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Space Gray', color: '#B1B2B7'},
            {name: 'Silver', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
            {name: 'Rose Gold', color: '#ECC6C1'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "Wi-Fi", "蓝牙 4.2"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 7",
        name_short: "7",
        isTitleOnly: false,
        pic: "7",
        slogan: "This is 7",
        isNew: false,
        active: false,
        release: "2016-09-16",
        models: [
            {name: "A1660", type: "Qualcomm"},
            {name: "A1778", type: "英特尔"},
            {name: "A1779", type: "日本"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 138.3,
        width: 67.1,
        thickness: 7.1,
        weight: 138,
        os: {
            init: "iOS 10.0.1",
            last: lastOS
        },
        cpu: {
            icon: 'A10',
            model: 'A10',
            rate: '2.34',
            core: 4
        },
        gpu: {
            model: "GT7600 Plus",
            core: 6
        },
        modem: '',
        memory: [
            {size: "2", type: "LPDDR4"}
        ],
        storage: ["32", "128", "256"],
        battery: '1960',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.7",
            type: 'IPS LCD',
            refreshRate: "",
            width: 750,
            height: 1334,
            density: "326",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#2E3034'},
            {name: 'Jet Black', color: '#0A0A0A'},
            {name: 'White', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
            {name: 'Rose Gold', color: '#ECC6C1'},
            {name: 'Product (Red)', color: '#AF1E2D'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone 7 plus",
        name_short: "7 plus",
        isTitleOnly: false,
        pic: "7",
        slogan: "This is 7",
        isNew: false,
        active: false,
        release: "2016-09-16",
        models: [
            {name: "A1661", type: "Qualcomm"},
            {name: "A1784", type: "英特尔"},
            {name: "A1785", type: "日本"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 158.2,
        width: 77.9,
        thickness: 7.3,
        weight: 188,
        os: {
            init: "iOS 10.0.1",
            last: lastOS
        },
        cpu: {
            icon: 'A10',
            model: 'A10',
            rate: '2.34',
            core: 4
        },
        gpu: {
            model: "GT7600 Plus",
            core: 6
        },
        modem: '',
        memory: [
            {size: "3", type: "LPDDR4"}
        ],
        storage: ["32", "128", "256"],
        battery: '2900',
        port: '闪电',
        screen: {
            brightness: '',
            size: "5.5",
            type: 'IPS LCD',
            refreshRate: "",
            width: 1080,
            height: 1920,
            density: "401",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#2E3034'},
            {name: 'Jet Black', color: '#0A0A0A'},
            {name: 'White', color: '#E2E3E4'},
            {name: 'Gold', color: '#E3CCB4'},
            {name: 'Rose Gold', color: '#ECC6C1'},
            {name: 'Product (Red)', color: '#AF1E2D'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone 8",
        name_short: "8",
        isTitleOnly: false,
        pic: "8",
        slogan: "A new generation of iPhone",
        isNew: false,
        active: false,
        release: "2017-09-22",
        models: [
            {name: "A1863", type: "Qualcomm"},
            {name: "A1905", type: "英特尔"},
            {name: "A1906", type: "日本"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 138.4,
        width: 67.3,
        thickness: 7.3,
        weight: 148,
        os: {
            init: "iOS 11.0",
            last: lastOS
        },
        cpu: {
            icon: 'A11',
            model: 'A11',
            rate: '2.39',
            core: 6
        },
        gpu: {
            model: "",
            core: 0
        },
        modem: '',
        memory: [
            {size: "2", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '1821',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.7",
            type: 'IPS LCD',
            refreshRate: "",
            width: 750,
            height: 1334,
            density: "326",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Product (Red)', color: '#b41325'},
            {name: 'Space Gray', color: '#272729'},
            {name: 'Silver', color: '#e2e3e4'},
            {name: 'Gold', color: '#f7e8dd'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone 8 Plus",
        name_short: "8 Plus",
        isTitleOnly: false,
        pic: "8",
        slogan: "A new generation of iPhone",
        isNew: false,
        active: false,
        release: "2017-09-22",
        models: [
            {name: "A1864", type: "Qualcomm"},
            {name: "A1907", type: "英特尔"},
            {name: "A1908", type: "日本"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 158.4,
        width: 78.1,
        thickness: 7.5,
        weight: 202,
        os: {
            init: "iOS 11.0",
            last: lastOS
        },
        cpu: {
            icon: 'A11',
            model: 'A11',
            rate: '2.39',
            core: 6
        },
        gpu: {
            model: "",
            core: 0
        },
        modem: '',
        memory: [
            {size: "3", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '2691',
        port: '闪电',
        screen: {
            brightness: '',
            size: "5.5",
            type: 'IPS LCD',
            refreshRate: "",
            width: 1080,
            height: 1920,
            density: "401",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Product (Red)', color: '#b41325'},
            {name: 'Space Gray', color: '#272729'},
            {name: 'Silver', color: '#e2e3e4'},
            {name: 'Gold', color: '#f7e8dd'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone SE2",
        name_short: "SE2",
        isTitleOnly: false,
        pic: "SE2",
        slogan: "Lots to love. Less to spend.",
        isNew: false,
        active: false,
        release: "2020-04-24",
        models: [
            {name: "A2275", type: "美，加"},
            {name: "A2296", type: ""},
            {name: "A2298", type: "国内"},
        ],
        network: ["GSM", "EDGE", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 138.4,
        width: 67.3,
        thickness: 7.3,
        weight: 148,
        os: {
            init: "iOS 13.4",
            last: lastOS
        },
        cpu: {
            icon: 'A13',
            model: 'A13',
            rate: '2.65',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '',
        memory: [
            {size: "3", type: "LPDDR4X"}
        ],
        storage: ["64", "256"],
        battery: '1821',
        port: '闪电',
        screen: {
            brightness: '',
            size: "4.7",
            type: 'IPS LCD',
            refreshRate: "",
            width: 750,
            height: 1334,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#262529'},
            {name: 'White', color: '#F3F3F3'},
            {name: 'Product (Red)', color: '#BA0C2E'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone X",
        name_short: "X",
        isTitleOnly: false,
        pic: "X",
        slogan: "Say hello to the future.",
        isNew: false,
        active: false,
        release: "2017-11-03",
        models: [
            {name: "A1865", type: "Qualcomm"},
            {name: "A1901", type: "英特尔"},
            {name: "A1902", type: "日本"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 143.6,
        width: 70.9,
        thickness: 7.7,
        weight: 174,
        os: {
            init: "iOS 11.0.1",
            last: lastOS
        },
        cpu: {
            icon: 'A11',
            model: 'A11',
            rate: '2.39',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '',
        memory: [
            {size: "3", type: "LPDDR4X"}
        ],
        storage: ["64", "256"],
        battery: '2716',
        port: '闪电',
        screen: {
            brightness: '625',
            size: "5.85",
            type: 'AMOLED',
            refreshRate: "",
            width: 1125,
            height: 2436,
            density: "458",
            touch3D: true
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#2E3034'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone XR",
        name_short: "XR",
        isTitleOnly: false,
        pic: "XR",
        slogan: "Brilliant. In every way. Make room for color.",
        isNew: false,
        active: false,
        release: "2018-10-26",
        models: [
            {name: "A1984", type: ""},
            {name: "A2105", type: ""},
            {name: "A2106", type: "日本"},
            {name: "A2107", type: "国内"},
            {name: "A2108", type: "国内,香港,墨西哥"},
        ],
        network: [],
        height: 150.9,
        width: 75.7,
        thickness: 8.3,
        weight: 194,
        os: {
            init: "iOS 12",
            last: lastOS
        },
        cpu: {
            icon: 'A12',
            model: 'A12',
            rate: '2.49',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "3", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '2942',
        port: '闪电',
        screen: {
            brightness: '625',
            size: "6.08",
            type: 'IPS LCD',
            refreshRate: "",
            width: 828,
            height: 1792,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#2E3034'},
            {name: 'White', color: '#F3F3F3'},
            {name: 'Blue', color: '#48AEE6'},
            {name: 'Yellow', color: '#F9D045'},
            {name: 'Coral', color: '#FF6E5A'},
            {name: 'Product (Red)', color: '#B41325'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: [],
        prove: 'IPX',
        price: "",
    },
    {
        name: "iPhone XS",
        name_short: "XS",
        isTitleOnly: false,
        pic: "XS",
        slogan: "Welcome to the big screens.",
        isNew: false,
        active: false,
        release: "2018-09-21",
        models: [
            {name: "A1920", type: ""},
            {name: "A2097", type: ""},
            {name: "A2098", type: "日本"},
            {name: "A2100", type: "国内"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 143.6,
        width: 70.9,
        thickness: 7.7,
        weight: 177,
        os: {
            init: "iOS 12",
            last: lastOS
        },
        cpu: {
            icon: 'A12',
            model: 'A12',
            rate: '2.49',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512"],
        battery: '2658',
        port: '闪电',
        screen: {
            brightness: '625',
            size: "5.85",
            type: 'OLED HDR',
            refreshRate: "",
            width: 1125,
            height: 2436,
            density: "458",
            touch3D: true,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#EBEBE3'},
            {name: 'Space Gray', color: '#262529'},
            {name: 'Gold', color: '#FADCC2'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: [],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone XS Max",
        name_short: "XS Max",
        isTitleOnly: false,
        pic: "XS",
        slogan: "Welcome to the big screens.",
        isNew: false,
        active: false,
        release: "2018-09-21",
        models: [
            {name: "A1921", type: ""},
            {name: "A2101", type: ""},
            {name: "A2102", type: "日本"},
            {name: "A2104", type: "国内"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 157.5,
        width: 77.4,
        thickness: 7.7,
        weight: 208,
        os: {
            init: "iOS 12",
            last: lastOS
        },
        cpu: {
            icon: 'A12',
            model: 'A12',
            rate: '2.49',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512"],
        battery: '3174',
        port: '闪电',
        screen: {
            brightness: '625',
            size: "6.46",
            type: 'OLED HDR',
            refreshRate: "",
            width: 1242,
            height: 2688,
            density: "458",
            touch3D: true,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#EBEBE3'},
            {name: 'Space Gray', color: '#262529'},
            {name: 'Gold', color: '#FADCC2'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: [],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 11",
        name_short: "11",
        isTitleOnly: false,
        pic: "11",
        slogan: "Just the right amount of everything.",
        isNew: false,
        active: false,
        release: "2019-09-20",
        models: [
            {name: "A2160", type: ""},
            {name: "A2217", type: ""},
            {name: "A2215", type: ""},
        ],
        network: ["4G", "LTE", "3G", "2G"],
        height: 150.9,
        width: 75.7,
        thickness: 8.3,
        weight: 194,
        os: {
            init: "iOS 13",
            last: lastOS
        },
        cpu: {
            icon: 'A13',
            model: 'A13',
            rate: '2.65',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '3110',
        port: '闪电',
        screen: {
            brightness: '625',
            size: "6.1",
            type: 'IPS LCD',
            refreshRate: "",
            width: 828,
            height: 1792,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#1F2020'},
            {name: 'White', color: '#F9F6EF'},
            {name: 'Purple', color: '#D1CDDA'},
            {name: 'Yellow', color: '#FFE681'},
            {name: 'Green', color: '#AEE1CD'},
            {name: 'Product (Red)', color: '#BA0C2E'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 11 Pro",
        name_short: "11 Pro",
        isTitleOnly: false,
        pic: "11pro",
        slogan: "And then there was Pro. Pro Cameras. Pro Display. Pro Performance.",
        isNew: false,
        active: false,
        release: "2019-09-20",
        models: [
            {name: "A2160", type: ""},
            {name: "A2217", type: ""},
            {name: "A2215", type: ""},
        ],
        network: ["4G", "LTE", "3G", "2G"],
        height: 144,
        width: 71.4,
        thickness: 8.1,
        weight: 188,
        os: {
            init: "iOS 13",
            last: lastOS
        },
        cpu: {
            icon: 'A13',
            model: 'A13',
            rate: '2.65',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512"],
        battery: '3046',
        port: '闪电',
        screen: {
            brightness: '800~1200',
            size: "5.85",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1125,
            height: 2436,
            density: "458",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#EBEBE3'},
            {name: 'Space Gray', color: '#535150'},
            {name: 'Gold', color: '#FAD7BD'},
            {name: 'Midnight Green', color: '#4E5851'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 11 Pro Max",
        name_short: "11 Pro Max",
        isTitleOnly: false,
        pic: "11pro",
        slogan: "And then there was Pro. Pro Cameras. Pro Display. Pro Performance.",
        isNew: false,
        active: false,
        release: "2019-09-20",
        models: [
            {name: "A2161", type: ""},
            {name: "A2220", type: ""},
            {name: "A2218", type: ""},
        ],
        network: ["4G", "LTE", "3G", "2G"],
        height: 158,
        width: 77.8,
        thickness: 8.1,
        weight: 226,
        os: {
            init: "iOS 13",
            last: lastOS
        },
        cpu: {
            icon: 'A13',
            model: 'A13',
            rate: '2.65',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512"],
        battery: '3969',
        port: '闪电',
        screen: {
            brightness: '800~1200',
            size: "6.46",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1242,
            height: 2688,
            density: "458",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#EBEBE3'},
            {name: 'Space Gray', color: '#535150'},
            {name: 'Gold', color: '#FAD7BD'},
            {name: 'Midnight Green', color: '#4E5851'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12 Mini",
        name_short: "12 Mini",
        isTitleOnly: false,
        pic: "12",
        slogan: "Blast past fast.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 131.5,
        width: 64.2,
        thickness: 7.44,
        weight: 133,
        os: {
            init: "iOS 14.2",
            last: lastOS
        },
        cpu: {
            icon: 'A14',
            model: 'A14',
            rate: '2.99',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '2227',
        port: '闪电',
        screen: {
            brightness: '',
            size: "5.4",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1080,
            height: 2340,
            density: "476",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
                dimension: [
                    {size: '1080p', fps: [25, 30, 60, 120]},
                    {size: '720p', fps: [240]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '广角',
                    model: '',
                    aperture: '',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '0.5'
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#212125'},
            {name: 'White', color: '#f5f5f7'},
            {name: 'Product Red', color: '#d82e2e'},
            {name: 'Green', color: '#d8efd5'},
            {name: 'Blue', color: '#023b63'},
            {name: 'Purple', color: '#b7afe6'},
        ],
        charge: [
            {name: 'Qi', power: '7.5w'},
            {name: 'Lightning', power: '20w'},
            {name: 'MagSafe', power: '12w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12",
        name_short: "12",
        isTitleOnly: false,
        pic: "12",
        slogan: "Blast past fast.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 146.7,
        width: 71.5,
        thickness: 7.44,
        weight: 162,
        os: {
            init: "iOS 14.1",
            last: lastOS
        },
        cpu: {
            icon: 'A14',
            model: 'A14',
            rate: '2.99',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '2851',
        port: '闪电',
        screen: {
            brightness: '',
            size: "6.1",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1170,
            height: 2532,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
                dimension: [
                    {size: '1080p', fps: [25, 30, 60, 120]},
                    {size: '720p', fps: [240]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '广角',
                    model: '',
                    aperture: '',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '0.5'
                },
            ]
        },
        colors: [
            {name: 'Black', color: '#212125'},
            {name: 'White', color: '#f5f5f7'},
            {name: 'Product Red', color: '#d82e2e'},
            {name: 'Green', color: '#d8efd5'},
            {name: 'Blue', color: '#023b63'},
            {name: 'Purple', color: '#b7afe6'},
        ],
        charge: [
            {name: 'Qi', power: '7.5w'},
            {name: 'Lightning', power: '20w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12 Pro",
        name_short: "12 Pro",
        isTitleOnly: false,
        pic: "12pro",
        slogan: "It's a leap year.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [
            {name: "A2341", type: "美国"},
            {name: "A2406", type: ""},
            {name: "A2407", type: ""},
            {name: "A2408", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 146.7,
        width: 71.5,
        thickness: 7.4,
        weight: 189,
        os: {
            init: "iOS 14",
            last: lastOS
        },
        cpu: {
            icon: 'A14',
            model: 'A14',
            rate: '2.99',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '2815',
        port: '闪电',
        screen: {
            brightness: '800~1200',
            size: "6.06",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1170,
            height: 2532,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',

                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '52mm',
                    pixelCount: '1200万, ',
                    zoomRate: '2'
                },
                {
                    name: '广角',
                    model: '',
                    aperture: '',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '0.5'
                },
                {
                    name: '雷达',
                    model: '',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#e3e4df'},
            {name: 'Graphite', color: '#52514d'},
            {name: 'Gold', color: '#fcebd3'},
            {name: 'Pacific Blue', color: '#2d4e5c'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12 Pro Max ",
        name_short: "12 Pro Max",
        isTitleOnly: false,
        pic: "12pro",
        slogan: "It's a leap year.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [
            {name: "A2342", type: "美国"},
            {name: "A2410", type: ""},
            {name: "A2411", type: ""},
            {name: "A2412", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 160.8,
        width: 78.1,
        thickness: 7.4,
        weight: 228,
        os: {
            init: "iOS 14",
            last: lastOS
        },
        cpu: {
            icon: 'A14',
            model: 'A14',
            rate: '2.99',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '3687',
        port: '闪电',
        screen: {
            brightness: '800~1200',
            size: "6.68",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1284,
            height: 2778,
            density: "458",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',

                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '52mm',
                    pixelCount: '1200万, ',
                    zoomRate: '2'
                },
                {
                    name: '广角',
                    model: '',
                    aperture: '',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '0.5'
                },
                {
                    name: '雷达',
                    model: '',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#e3e4df'},
            {name: 'Graphite', color: '#52514d'},
            {name: 'Gold', color: '#fcebd3'},
            {name: 'Pacific Blue', color: '#2d4e5c'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 13 Mini",
        name_short: "13 mini",
        isTitleOnly: false,
        pic: "13pro",
        slogan: "Your new superpower.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "A2629", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 131.5,
        width: 64.2,
        thickness: 7.65,
        weight: 140,
        os: {
            init: "iOS 15",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A15',
            rate: '3.2',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '单卡',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '2406',
        port: '闪电',
        screen: {
            brightness: '',
            size: "5.4",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1080,
            height: 2340,
            density: "476",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '',
                model: '',
                aperture: '',
                focal: '',
                pixelCount: '',
                zoomRate: '',
            },
            back: [
            ]
        },
        colors: [
            {name: 'Midnight', color: '#232a31'},
            {name: 'Starlight', color: '#faf6f2'},
            {name: 'Blue', color: '#276787'},
            {name: 'Pink', color: '#faddd7'},
            {name: 'Product Red', color: '#bf0013'},
        ],
        charge: [
            {name: 'Qi无线', power: '7.5w'},
            {name: '快充', power: '20w'},
            {name: 'MagSafe', power: '12w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 13",
        name_short: "13",
        isTitleOnly: false,
        pic: "13pro",
        slogan: "Your new superpower.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "A2634", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 146.7,
        width: 71.5,
        thickness: 7.65,
        weight: 173,
        os: {
            init: "iOS 15",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A15',
            rate: '3.2',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '双卡双待',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '3227',
        port: '闪电',
        screen: {
            brightness: '',
            size: "6.1",
            type: 'XDR OLED',
            refreshRate: "",
            width: 1170,
            height: 2532,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '',
                model: '',
                aperture: '',
                focal: '',
                pixelCount: '',
                zoomRate: '',
            },
            back: [
            ]
        },
        colors: [
            {name: 'Midnight', color: '#232a31'},
            {name: 'Starlight', color: '#faf6f2'},
            {name: 'Blue', color: '#276787'},
            {name: 'Pink', color: '#faddd7'},
            {name: 'Product Red', color: '#bf0013'},
            {name: 'Alpine Green', color: '#576856'},
        ],
        charge: [
            {name: 'Qi无线', power: '7.5w'},
            {name: '快充', power: '20w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 13 Pro",
        name_short: "13 Pro",
        isTitleOnly: false,
        pic: "13pro",
        slogan: "Oh. So. Pro.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "A2639", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 146.7,
        width: 71.5,
        thickness: 7.65,
        weight: 203,
        os: {
            init: "iOS 15",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A15',
            rate: '3.2',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        modem: '双卡双待',
        memory: [
            {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '3095',
        port: '闪电',
        screen: {
            brightness: '1000~1200',
            size: "6.1",
            type: 'XDR OLED ProMotion',
            refreshRate: "10~120", // hz
            width: 1170,
            height: 2532,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#f1f2ed'},
            {name: 'Graphite', color: '#54524f'},
            {name: 'Gold', color: '#fae7cf'},
            {name: 'Sierra Blue', color: '#a7c1d9'},
            {name: 'Alpine Green', color: '#576856'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 13 Pro Max ",
        name_short: "13 Pro Max",
        isTitleOnly: false,
        pic: "13pro",
        slogan: "Oh. So. Pro.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "A2644", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 160.8,
        width: 78.1,
        thickness: 7.65,
        weight: 238,
        os: {
            init: "iOS 15",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A15',
            rate: '3.2',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        modem: '双卡双待',
        memory: [
            {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '4352',
        port: '闪电',
        screen: {
            brightness: '1000~1200', // cd/㎡
            size: "6.7",
            type: 'XDR OLED ProMotion',
            refreshRate: "10~120", // hz
            width: 1284,
            height: 2778,
            density: "458",
            touch3D: false,
            hdr: true,
        },
        cameras: {
            front: {
                name: '默认',
                model: 'Sony IMX703 1.9μm',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    pixelCount: '1200万, ',
                    zoomRate: ''
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: '3'
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Silver', color: '#f1f2ed'},
            {name: 'Graphite', color: '#54524f'},
            {name: 'Gold', color: '#fae7cf'},
            {name: 'Sierra Blue', color: '#a7c1d9'},
            {name: 'Alpine Green', color: '#576856'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-27w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: [],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone SE3",
        name_short: "SE3",
        isTitleOnly: false,
        pic: "SE3",
        slogan: "Love the power. Love the price.",
        isNew: false,
        active: false,
        release: "2022-03-18",
        models: [
            // {name: "A2785 ", type: "美，加"},
            // {name: "A2296", type: ""},
            {name: "A2785", type: "国内"},
        ],
        network: ["GSM", "EDGE", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 138.4,
        width: 67.3,
        thickness: 7.3,
        weight: 144,
        os: {
            init: "iOS 15",
            last: lastOS
        },
        cpu: {
            icon: 'A15',
            model: 'A15',
            rate: '3.20',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        modem: '单卡',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '2018',
        port: '闪电',
        screen: {
            brightness: '625',
            size: "4.7",
            type: 'IPS LCD',
            refreshRate: "",
            width: 750,
            height: 1334,
            density: "326",
            touch3D: false,
            hdr: false,
        },
        cameras: {
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '700万 4000x3000px',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.8',
                    focal: '26mm',
                    pixelCount: '1200万 4000x3000px',
                    zoomRate: ''
                },
            ]
        },
        colors: [
            {name: 'Midnight', color: '#262529'},
            {name: 'Starlight', color: '#F3F3F3'},
            {name: 'Product (Red)', color: '#BA0C2E'},
        ],
        charge: [
            {name: '充电口', power: '18w'},
            {name: 'Qi', power: ''},
        ],
        unlockMethod: ['指纹'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "5G", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },


    {
        name: "iPhone 14",
        name_short: "14",
        isTitleOnly: false,
        pic: "14pro",
        slogan: "Big and bigger.",
        isNew: true,
        active: true,
        release: "2022-09-08",
        models: [
            // {name: "A2639", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 146.7,
        width: 71.5,
        thickness: 7.80,
        weight: 172,
        os: {
            init: "iOS 16",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A15',
            rate: '3.2',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        modem: '双卡双待',
        memory: [
            // {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '',
        port: '闪电',
        screen: {
            brightness: '1000~1200',
            size: "6.1",
            type: 'XDR OLED',
            refreshRate: "60", // hz
            width: 1170,
            height: 2532,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {

        },
        colors: [
            {name: '午夜色', color: '#1c232b'},
            {name: '紫色', color: '#e6dbeb'},
            {name: '星光色', color: '#f9f4f0'},
            {name: '红色', color: '#e00525'},
            {name: '蓝色', color: '#98adc0'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 14 Plus",
        name_short: "14 Plus",
        isTitleOnly: false,
        pic: "14pro",
        slogan: "Big and bigger.",
        isNew: true,
        active: true,
        release: "2022-09-08",
        models: [
            // {name: "A2639", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 160.8,
        width: 78.1,
        thickness: 7.80,
        weight: 203,
        os: {
            init: "iOS 16",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A15',
            rate: '3.2',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        modem: '双卡双待',
        memory: [
            // {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '',
        port: '闪电',
        screen: {
            brightness: '1000~1200',
            size: "6.7",
            type: 'XDR OLED',
            refreshRate: "60", // hz
            width: 1284,
            height: 2778,
            density: "458",
            touch3D: false,
            hdr: true,
        },
        cameras: {

        },
        colors: [
            {name: '午夜色', color: '#1c232b'},
            {name: '紫色', color: '#e6dbeb'},
            {name: '星光色', color: '#f9f4f0'},
            {name: '红色', color: '#e00525'},
            {name: '蓝色', color: '#98adc0'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 14 Pro",
        name_short: "14 Pro",
        isTitleOnly: false,
        pic: "14pro",
        slogan: "Pro. Beyond.",
        isNew: true,
        active: true,
        release: "2022-09-08",
        models: [
            // {name: "A2639", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 147.5,
        width: 71.5,
        thickness: 7.85,
        weight: 206,
        os: {
            init: "iOS 16",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A16',
            rate: '',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        modem: '双卡双待',
        memory: [
            // {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '',
        port: '闪电',
        screen: {
            brightness: '1000~2000',
            size: "6.1",
            type: 'XDR OLED ProMotion',
            refreshRate: "1 ~ 120", // hz
            width: 1179,
            height: 2556,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {

        },
        colors: [
            {name: '深空黑色', color: '#403e3d'},
            {name: '银色', color: '#f0f2f2'},
            {name: '金色', color: '#f4e8ce'},
            {name: '暗紫色', color: '#594f63'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 14 Pro Max",
        name_short: "14 Pro Max",
        isTitleOnly: false,
        pic: "14pro",
        slogan: "Pro. Beyond.",
        isNew: true,
        active: true,
        release: "2022-09-08",
        models: [
            // {name: "A2639", type: "国内"},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 160.7,
        width: 77.6,
        thickness: 7.85,
        weight: 240,
        os: {
            init: "iOS 16",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A16',
            rate: '',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        modem: '双卡双待',
        memory: [
            // {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '',
        port: '闪电',
        screen: {
            brightness: '1000~2000',
            size: "6.7",
            type: 'XDR OLED ProMotion',
            refreshRate: "1 ~ 120", // hz
            width: 1290,
            height: 2796,
            density: "460",
            touch3D: false,
            hdr: true,
        },
        cameras: {

        },
        colors: [
            {name: '深空黑色', color: '#403e3d'},
            {name: '银色', color: '#f0f2f2'},
            {name: '金色', color: '#f4e8ce'},
            {name: '暗紫色', color: '#594f63'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        prove: 'IPX68',
        price: "",
    },

].reverse()

let app = new Vue({
    el: "#app",
    data: {
        // date
        dateLastUpdate: '2022.09.08',
        // thumb up
        pingPongInterval: null,
        thumbsUpKey: 'iphone',
        heartActive: false,
        thumbsUpCount: 0,
        // full screen 相关
        showFullScreenBtn: false,
        didEnteredFullScreen: false,
        // 浏览器参数
        portraitMode: false,
        mobileMode: false,
        latesOS: lastOS,
        iphones: iphones,
        iphonesOrigin: iphones,

        deviceMap: new Map(),

        // 机型信息筛选
        selectedNames: [], // 已选中的名字

        tags: [],
        keyword: '',
        tipShowed: false,

        // share info
        showShare: false,
        insets: {
            height: innerHeight,
            width: innerWidth
        },
        shareQrCode: null,
        shareQrCodeQQ: null,
        linkAddress: 'https://kylebing.cn/tools/iphone/',
        linkQQ: 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA'
    },
    mounted() {
        // 全屏相关
        let chromeCore = /Chrome/i.test(navigator.userAgent)
        let mobileMode = /Mobile/i.test(navigator.userAgent)
        this.portraitMode = window.innerWidth > window.innerHeight
        this.mobileMode = mobileMode
        this.showFullScreenBtn = chromeCore && !mobileMode
        this.getInitThumbsUpCount()
        this.websocketInit()

        this.generateDeviceMap() // 生成 iPhone Map

        // onresize
        onresize = () => {
            this.insets = {
                height: innerHeight,
                width: innerWidth
            }
        }
        this.shareQrCode = QRCode.generatePNG(this.linkAddress, {margin: 1})
        this.shareQrCodeQQ = QRCode.generatePNG(this.linkQQ, {margin: 1})
    },
    methods: {
        toggleShare(){
            this.showShare = !this.showShare
        },
        generateDeviceMap(){
            this.iphones.forEach(device => {
                this.deviceMap.set(device.name, device)
            })
        },
        tagToggle(tag) {
            if (this.tags.some(item => item === tag)) {
                this.tags.splice(this.tags.indexOf(tag), 1)
            } else {
                this.tags.push(tag)
            }
        },

        // 筛选手机信息
        filterTagToggle(deviceName){
            if (this.selectedNames.includes(deviceName)){
                this.selectedNames.splice(this.selectedNames.indexOf(deviceName), 1)
            } else {
                this.selectedNames.push(deviceName)
            }
            this.updateShowingDevices()

        },
        updateShowingDevices(){
            this.iphones = this.selectedNames.map(name => this.deviceMap.get(name))
            if (this.iphones.length === 0){
                this.iphones = [...this.iphonesOrigin]
            }
            this.iphones.push(this.iphonesOrigin[0])
            this.iphones.pop()
        },

        // 全屏显示
        enterFullScreen: function () {
            document.documentElement.requestFullscreen()
        },
        filterIphone() {

        },

        // 点赞功能
        getInitThumbsUpCount(){
            axios.get('../../portal/thumbs-up?key=' + this.thumbsUpKey)
                .then(res => {
                    if (res.data && res.data.data){
                        this.thumbsUpCount = res.data.data
                    }
                })
        },
        websocketInit(){
            this.websocket = new WebSocket('wss://kylebing.cn/ws')
            this.websocket.onopen = this.websocketOnOpen
            this.websocket.onmessage = this.websocketOnMessage
            this.websocket.onerror = this.websocketOnError
            this.websocket.onclose = this.websocketClose
        },
        websocketOnOpen() {
            this.portStatus = 'success'
            this.pingPongInterval = setInterval(()=>{
                if (this.websocket){
                    switch (this.websocket.readyState){
                        case 0: // connecting
                            break;
                        case 1: // open
                            let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                            this.websocket.send(JSON.stringify(message))
                            break;
                        case 2:  // closing
                            clearInterval(this.pingPongInterval)
                            break;
                        case 3: // closed
                            clearInterval(this.pingPongInterval)
                            break;
                    }
                }
            }, 10000)
        },
        websocketOnMessage(res) {
            let receivedMessage = JSON.parse(res.data)
            switch (receivedMessage.type){
                case WSMessage.type.heartBeat:
                    break;
                case WSMessage.type.thumbsUp:
                    if (receivedMessage.content.key === this.thumbsUpKey){
                        this.thumbsUpCount = receivedMessage.content.count
                    }
                    break;
            }
        },
        websocketOnError() {
            this.portStatus = 'error'
            this.websocket.send('on error')
        },
        websocketClose() {
            this.portStatus = 'closed'
            console.log('socket has closed')
        },
        thumbsUp(){
            this.sendMessage(this.thumbsUpKey)
        },
        sendMessage(key){
            if (this.websocket) {
                this.heartActive = true
                let message = new WSMessage(WSMessage.type.thumbsUp, {
                    key: key
                })
                this.websocket.send(JSON.stringify(message))
            }
        },
    }
})

class WSMessage{
    constructor(type, content) {
        this.type = type
        this.content = content
    }
    static type = {
        thumbsUp: 'thumbs-up',
        heartBeat: 'heart-beat',
    }
}


document.addEventListener('touchstart', () => {
}, false)

// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
    app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
