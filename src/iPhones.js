const lastOS = '最新';

const BASE_URL = 'http://apple-image.kylebing.cn/'

const iPhone = [
    {
        name: "iPhone 1",
        name_short: "1",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}Fk4-rTzQwnQ3qKdRH8aB8V-tG0zm`,
        slogan: "This is only the beginning. Apple reinvents the phone.",
        isNew: false,
        active: false,
        release: "2007-06-29",
        models: [
            {name: "", type: "A1203"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: null,
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '200万',
                    zoomRate: '',
                    hdr: '',
                    dimension: [],
                }
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ['Wi-Fi', "蓝牙 2.0"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone3 = [
    {
        name: "iPhone 3G",
        name_short: "3G",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FtFG1Rtzdaldq5YwCePE7ERsBYR3`,
        slogan: "New features, new price.",
        isNew: false,
        active: false,
        release: "2008-07-11",
        models: [
            {name: "国内", type: "A1324"},
            {name: "", type: "A1241"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: null,
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '200万',
                    zoomRate: '',
                    hdr: '',
                    dimension: [ ],
                }
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ['Wi-Fi', "蓝牙 2.0"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 3Gs",
        name_short: "3Gs",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FgOCMQdvrYudeSrKhNJ1cTMQJm1u`,
        slogan: "The fastest, smartest phone yet. More to love. Less to pay.",
        isNew: false,
        active: false,
        release: "2009-06-19",
        models: [
            {name: "国内", type: "A1325"},
            {name: "", type: "A1303"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: null,
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '300万 VGA 30fps',
                    zoomRate: '',
                    hdr: '',
                    dimension: [],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ['Wi-Fi 2.4', "蓝牙 2.1"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone4 = [
    {
        name: "iPhone 4",
        name_short: "4",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}Fo8KAfo_m4jFE_VhQvFycSL3LcrW`,
        slogan: "This changes everything. Again.",
        isNew: false,
        active: false,
        release: "2010-06-24",
        models: [
            {name: "GSM", type: "A1332"},
            {name: "CDMA", type: "A1349"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '',
                pixelCount: '30万 VGA@30fps',
                zoomRate: '',
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '500万',
                    zoomRate: 'x5',
                    hdr: '',
                    dimension: [
                        {size: '720p', fps: [30]},
                    ],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ['Wi-Fi 2.4', "蓝牙 2.1"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 4s",
        name_short: "4s",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FrtIbWUuWT_eaqSmWzFhDIJ4oZTY`,
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '',
                pixelCount: '30万',
                zoomRate: '',
                hdr: '',
                dimension: [
                    {size: '480p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor R IMX145',
                    aperture: '',
                    focal: 'ƒ/2.4',
                    pixelCount: '800万',
                    zoomRate: 'x5',
                    hdr: '',
                    dimension: [
                        {size: '720p', fps: [30]},
                        {size: '1080p', fps: [30]},
                    ],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ['Wi-Fi 2.4'],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone5 = [
    {
        name: "iPhone 5",
        name_short: "5",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}Fh-n1hua76xusu-sH5Mw3Be49FSE`,
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '',
                pixelCount: '120万',
                zoomRate: '',
                hdr: '',
                dimension: [
                    {size: '720', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor R IMX145',
                    aperture: 'ƒ/2.4',
                    focal: '',
                    pixelCount: '800万',
                    zoomRate: '',
                    hdr: '',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ['Wi-Fi'],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 5c",
        name_short: "5c",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FnTuH37l52As2S5YYROOAsGzNvtL`,
        slogan: "For the colorful",
        isNew: false,
        active: false,
        release: "2013-09-20",
        models: [
            {name: "", type: "A1456"},
            {name: "", type: "A1507"},
            {name: "", type: "A1516"},
            {name: "", type: "A1529"},
            {name: "", type: "A1532"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 0
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '',
                pixelCount: '120万',
                zoomRate: '',
                hdr: '',
                dimension: [
                    {size: '720p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor R IMX145',
                    aperture: 'ƒ/2.4',
                    focal: '',
                    pixelCount: '800万',
                    zoomRate: '',
                    hdr: '',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: [],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 5s",
        name_short: "5s",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FpICSW69ejJfIKJj9SsrrZMwdw97`,
        slogan: "You're more powerful than you think. Forward thinking",
        isNew: false,
        active: false,
        release: "2013-09-20",
        models: [
            {name: "中东", type: "A1457"},
            {name: "国内", type: "A1518"},
            {name: "国内", type: "A1528"},
            {name: "东亚", type: "A1530"},
            {name: "美,国内", type: "A1533"},
            {name: "美,日本", type: "A1453"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 475
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '1.9μm',
                aperture: 'ƒ/2.4',
                focal: '',
                pixelCount: '120万 ',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Custom Sony Exmor RS',
                    aperture: 'ƒ/2.2',
                    focal: '30mm',
                    pixelCount: '800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '720p', fps: [120]},
                        {size: '1080p', fps: [30]},
                    ],
                }
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "LTE", "Wi-Fi", "蓝牙 4.0", "GPS"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone6 = [
    {
        name: "iPhone 6",
        name_short: "6",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}Fjwza2hWgZyjVGISzilNhpMMvTZZ`,
        slogan: "Bigger than bigger. The two and only",
        isNew: false,
        active: false,
        release: "2014-09-16",
        models: [
            {name: "美", type: "A1549"},
            {name: "", type: "A1586"},
            {name: "国内", type: "A1589"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 566
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '120万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: [30]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/2.2',
                    focal: '',
                    pixelCount: '800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '720p', fps: [240]},
                        {size: '1080p', fps: [60]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 6 plus",
        name_short: "6 plus",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FsqnUTWUlyJVWwpdKVRMVsm9GXdV`,
        slogan: "Bigger than bigger. The two and only",
        isNew: false,
        active: false,
        release: "2014-09-16",
        models: [
            {name: "美", type: "A1522"},
            {name: "", type: "A1524"},
            {name: "国内", type: "A1593"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 569
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '120万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: [30]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/2.2',
                    focal: '',
                    pixelCount: '800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '720p', fps: [240]},
                        {size: '1080p', fps: [60]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone6s = [
    {
        name: "iPhone 6s",
        name_short: "6s",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FoXQ_EP3HQg6G2afJXPl9HFndJy_`,
        slogan: "The only thing that’s changed is everything. One powerful phone",
        isNew: false,
        active: false,
        release: "2015-09-25",
        models: [
            {name: "美", type: "A1633"},
            {name: "", type: "A1688"},
            {name: "国内", type: "A1700"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "LTE/4G", "LTE Advanced/4G+"],
        height: 138.3,
        width: 67.1,
        thickness: 7.1,
        weight: 143,
        os: {
            init: "iOS 9.0.1",
            last: "iOS 15.7"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 963
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '500万 720p',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor RS IMX315 1.22μm',
                    aperture: 'ƒ/2.2',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: '',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [60]},
                        {size: '720p', fps: [240]},
                    ],
                }
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 6s plus",
        name_short: "6s plus",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FvaC92CxARf03bidtr-mlfJ0DM7v`,
        slogan: "The only thing that’s changed is everything. One powerful phone",
        isNew: false,
        active: false,
        release: "2015-09-25",
        models: [
            {name: "美", type: "A1634"},
            {name: "", type: "A1687"},
            {name: "国内", type: "A1699"},
        ],
        network: ["GSM", "CDMA", "3G", "EVDO", "HSPA+", "LTE/4G", "LTE Advanced/4G+"],
        height: 158.2,
        width: 77.9,
        thickness: 7.3,
        weight: 192,
        os: {
            init: "iOS 9.0.1",
            last: "iOS 15.7"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 975
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '500万 720p',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor RS IMX315 1.22μm',
                    aperture: 'ƒ/2.2',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: '',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [60]},
                        {size: '720p', fps: [240]},
                    ],
                }
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhoneSE = [
    {
        name: "iPhone SE",
        name_short: "SE",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}FkqrEY7drVGEf-T8ocv-N_Q6G1sv`,
        slogan: "A big step for small.",
        isNew: false,
        active: false,
        release: "2016-03-31",
        models: [
            {name: "美，加", type: "A1662"},
            {name: "Sprint", type: "A1723"},
            {name: "国内", type: "A1724"},
        ],
        network: ["GSM", "EDGE", "EV-DO", "HSPA+"],
        height: 123.8,
        width: 58.6,
        thickness: 7.6,
        weight: 113,
        os: {
            init: "iOS 9.3",
            last: "iOS 15.7"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 980
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.4',
                focal: '',
                pixelCount: '120万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Backlit Sony Exmor RS 1.22μm',
                    aperture: 'ƒ/2.2',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [30,60,120]},
                        {size: '720p', fps: [240]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "Wi-Fi", "蓝牙 4.2"],
        waterResistant: {value: '', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone SE2",
        name_short: "SE2",
        hardwareName: 'iPhone12,8',
        isTitleOnly: false,
        pic: `${BASE_URL}FscAdH4BldrWPMWPrj3rEs5hNWlq`,
        slogan: "Lots to love. Less to spend.",
        isNew: false,
        active: false,
        release: "2020-04-24",
        models: [
            {name: "美，加", type: "A2275"},
            {name: "", type: "A2296"},
            {name: "国内", type: "A2298"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 2849
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '720p', fps: []},
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone SE3",
        name_short: "SE3",
        hardwareName: 'iPhone14,6',
        isTitleOnly: false,
        pic: `${BASE_URL}FmVXrMwGuL9cxLSvVNynG3R_nwWU`,
        slogan: "Love the power. Love the price.",
        isNew: false,
        active: false,
        release: "2022-03-18",
        models: [
            {name: "国际 ", type: "A2783"},
            {name: "北美洲", type: "A2595"},
            {name: "国内", type: "A2785"},
            {name: "日本", type: "A2782"},
            {name: "俄罗斯", type: "A2784"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 4546
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.8',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ],
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
        waterResistant: {
            value: 'IP67',
            waterDepth: 1,
            timeHold: 30
        },
        price: "",
    },
]

const iPhone7 = [

    {
        name: "iPhone 7",
        name_short: "7",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}Fgjm3G_Ilqw4hfAE7FWCLkRkkbRC`,
        slogan: "This is 7",
        isNew: false,
        active: false,
        release: "2016-09-16",
        models: [
            {name: "Qualcomm", type: "A1660"},
            {name: "英特尔", type: "A1778"},
            {name: "日本", type: "A1779"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 138.3,
        width: 67.1,
        thickness: 7.1,
        weight: 138,
        os: {
            init: "iOS 10.0.1",
            last: "iOS 15.7"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 1272
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '2nd Sony Exmor RS',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [60]},
                        {size: '720p', fps: [240]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 7 plus",
        name_short: "7 plus",
        hardwareName: '',
        isTitleOnly: false,
        pic: `${BASE_URL}Fn4d0UMcGCQSWZ_cSOr8gtEFF1FS`,
        slogan: "This is 7",
        isNew: false,
        active: false,
        release: "2016-09-16",
        models: [
            {name: "Qualcomm", type: "A1661"},
            {name: "英特尔", type: "A1784"},
            {name: "日本", type: "A1785"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 158.2,
        width: 77.9,
        thickness: 7.3,
        weight: 188,
        os: {
            init: "iOS 10.0.1",
            last: "iOS 15.7"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 1293
        },
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
            type: '2-portrait-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '2nd Sony Exmor RS',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [60]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '2nd Sony Exmor RS',
                    aperture: 'ƒ/2.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2光学变焦 x10数码变焦',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [60]},
                        {size: '720p', fps: [240]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone8 = [

    {
        name: "iPhone 8",
        name_short: "8",
        hardwareName: 'iPhone10,1 iPhone10,4',
        isTitleOnly: false,
        pic: `${BASE_URL}FoFCWhjXPcpM4G125mrMUXu_1gIW`,
        slogan: "A new generation of iPhone",
        isNew: false,
        active: false,
        release: "2017-09-22",
        models: [
            {name: "Qualcomm", type: "A1863"},
            {name: "英特尔", type: "A1905"},
            {name: "日本", type: "A1906"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 138.4,
        width: 67.3,
        thickness: 7.3,
        weight: 148,
        os: {
            init: "iOS 11.0",
            last: "iOS 16.6.1"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 1910
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.8',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [120]},
                        {size: '720p', fps: [240]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone 8 Plus",
        name_short: "8 Plus",
        hardwareName: 'iPhone10,2 iPhone10,5',
        isTitleOnly: false,
        pic: `${BASE_URL}Fl0DhgKCAwsZLVmZuFBG4WuP0ntc`,
        slogan: "A new generation of iPhone",
        isNew: false,
        active: false,
        release: "2017-09-22",
        models: [
            {name: "Qualcomm", type: "A1864"},
            {name: "英特尔", type: "A1907"},
            {name: "日本", type: "A1908"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 158.4,
        width: 78.1,
        thickness: 7.5,
        weight: 202,
        os: {
            init: "iOS 11.0",
            last: "iOS 16.6.1"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 2046
        },
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
            type: '2-portrait-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.8',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [120]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: 'ƒ/2.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2光学变焦，x10数码变焦',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [30]},
                        {size: '1080p', fps: [120]},
                        {size: '720p', fps: [240]},
                    ],
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
        unlockMethod: ['指纹解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhoneX = [
    {
        name: "iPhone X",
        name_short: "X",
        hardwareName: 'iPhone10,3, iPhone10,6',
        isTitleOnly: false,
        pic: `${BASE_URL}Fhm17HNz7R4yYIRfPjY7oSRdg4Lg`,
        slogan: "Say hello to the future.",
        isNew: false,
        active: false,
        release: "2017-11-03",
        models: [
            {name: "Qualcomm", type: "A1865"},
            {name: "英特尔", type: "A1901"},
            {name: "日本", type: "A1902"},
        ],
        network: ["GSM", "CDMA2000", "EV-DO", "HSPA+", "LTE", "LTE Advanced"],
        height: 143.6,
        width: 70.9,
        thickness: 7.7,
        weight: 174,
        os: {
            init: "iOS 11.0.1",
            last: "iOS 16.6.1"
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 2145
        },
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
            type: '2-vertical-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2光学变焦，x10数码变焦',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                }
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
    {
        name: "iPhone XS",
        name_short: "XS",
        hardwareName: 'iPhone11,2',
        isTitleOnly: false,
        pic: `${BASE_URL}FuQiE18mdB61ew10doeJkQJbBWCe`,
        slogan: "Welcome to the big screens.",
        isNew: false,
        active: false,
        release: "2018-09-21",
        models: [
            {name: "", type: "A1920"},
            {name: "", type: "A2097"},
            {name: "日本", type: "A2098"},
            {name: "国内", type: "A2100"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 2526
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-vertical-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor IMX333-Inspired 1.4μm',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2光学变焦，x10数码变焦',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                }
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: [],
        waterResistant: {
            value: 'IP68',
            waterDepth: 2,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone XS Max",
        name_short: "XS Max",
        hardwareName: 'iPhone11,4 iPhone11,6',
        isTitleOnly: false,
        pic: `${BASE_URL}FuQiE18mdB61ew10doeJkQJbBWCe`,
        slogan: "Welcome to the big screens.",
        isNew: false,
        active: false,
        release: "2018-09-21",
        models: [
            {name: "", type: "A1921"},
            {name: "", type: "A2101"},
            {name: "日本", type: "A2102"},
            {name: "国内", type: "A2104"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 2494
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-vertical-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor IMX333-Inspired 1.4μm',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2光学变焦，x10数码变焦',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                }
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: [],
        waterResistant: {
            value: 'IP68',
            waterDepth: 2,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone XR",
        name_short: "XR",
        hardwareName: 'iPhone11,8',
        isTitleOnly: false,
        pic: `${BASE_URL}Foa0LaQR_yx3tP2qUi4Ol1i0j4Ql`,
        slogan: "Brilliant. In every way. Make room for color.",
        isNew: false,
        active: false,
        release: "2018-10-26",
        models: [
            {name: "", type: "A1984"},
            {name: "", type: "A2105"},
            {name: "日本", type: "A2106"},
            {name: "国内", type: "A2107"},
            {name: "国内,香港,墨西哥", type: "A2108"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 2263
        },
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
            type: '1',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '',
                pixelCount: '700万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: []},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony Exmor IMX333-Inspired 1.4μm',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: [],
        waterResistant: {value: 'IP67', waterDepth: 0, timeHold: 0},
        price: "",
    },
]

const iPhone11 = [
    {
        name: "iPhone 11",
        name_short: "11",
        hardwareName: 'iPhone12,1',
        isTitleOnly: false,
        pic: `${BASE_URL}FmyDkqsxD7bvahZl8v3iKXRyKN10`,
        slogan: "Just the right amount of everything.",
        isNew: false,
        active: false,
        release: "2019-09-20",
        models: [
            {name: "", type: "A2160"},
            {name: "", type: "A2217"},
            {name: "", type: "A2215"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 3095
        },
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
            type: '2-vertical',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '26mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '1080p', fps: [60]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '1.4μm',
                    aperture: 'ƒ/1.8',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4K', fps: [60]},
                        {size: '1080p', fps: [240]},
                    ],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 2,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 11 Pro",
        name_short: "11 Pro",
        hardwareName: 'iPhone12,3',
        isTitleOnly: false,
        pic: `${BASE_URL}FiEnin0Ui7Jyq7dGVg6DU2XtSMzW`,
        slogan: "And then there was Pro. Pro Cameras. Pro Display. Pro Performance.",
        isNew: false,
        active: false,
        release: "2019-09-20",
        models: [
            {name: "", type: "A2160"},
            {name: "", type: "A2217"},
            {name: "", type: "A2215"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 3275
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '1.4μm',
                    aperture: 'ƒ/1.8',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [],
                },
                {
                    name: '远焦',
                    model: '1μm',
                    aperture: 'ƒ/2.0',
                    focal: '52mm',
                    pixelCount: '1200万',
                    zoomRate: 'x2 光学变焦',
                    hdr: 'HDR',
                    dimension: [],
                },
                {
                    name: '广角',
                    model: '1μm',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 4,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 11 Pro Max",
        name_short: "11 Pro Max",
        hardwareName: 'iPhone12,5',
        isTitleOnly: false,
        pic: `${BASE_URL}FiEnin0Ui7Jyq7dGVg6DU2XtSMzW`,
        slogan: "And then there was Pro. Pro Cameras. Pro Display. Pro Performance.",
        isNew: false,
        active: false,
        release: "2019-09-20",
        models: [
            {name: "", type: "A2161"},
            {name: "", type: "A2220"},
            {name: "", type: "A2218"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 3283
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [],
            },
            back: [
                {
                    name: '默认',
                    model: '1.4μm HDR',
                    aperture: 'ƒ/1.8',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [],
                },
                {
                    name: '远焦',
                    model: '1μm',
                    aperture: 'ƒ/2.0',
                    focal: '52mm',
                    pixelCount: '1200万',
                    zoomRate: 'x2 光学变焦',
                    hdr: 'HDR',
                    dimension: [],
                },
                {
                    name: '广角',
                    model: '1μm',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 4,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
]

const iPhone12 = [
    {
        name: "iPhone 12",
        name_short: "12",
        hardwareName: 'iPhone13,2',
        isTitleOnly: false,
        pic: `${BASE_URL}FuSmVz8tgyBIC-3mOGnD8cVT7r8j`,
        slogan: "Blast past fast.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [
            {name: "美国", type: "A2172"},
            {name: "加拿大/日本", type: "A2402"},
            {name: "国内", type: "A2404"},
            {name: "其它", type: "A2403"},
        ],
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 3863
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-vertical',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4K', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30,60,120]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '1.4μm',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 12 Mini",
        name_short: "12 Mini",
        hardwareName: 'iPhone13,1',
        isTitleOnly: false,
        pic: `${BASE_URL}FsBkRgTDO2I18Q_pc2RId_3tgoF8`,
        slogan: "Blast past fast.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [
            {name: "美国", type: "A2176"},
            {name: "加拿大/日本", type: "A2398"},
            {name: "国内", type: "A2400"},
            {name: "其它", type: "A2399"},
        ],
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 3876
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-vertical',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4K', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30,60,120]},
                ],
            },
            back: [
                {
                    name: '默认',
                    model: '1.4μm',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                        {size: '720p', fps: [240]},
                    ],
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [],
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 12 Pro",
        name_short: "12 Pro",
        hardwareName: 'iPhone13,3',
        isTitleOnly: false,
        pic: `${BASE_URL}FkocNbP_dhEli7NT8QJf9pFMNy-I`,
        slogan: "It's a leap year.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [
            {name: "美国", type: "A2341"},
            {name: "加拿大/日本", type: "A2406"},
            {name: "国际", type: "A2407"},
            {name: "国内", type: "A2408"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 3873
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar',
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '26mm',
                hdr: '',
                pixelCount: '1200万',
                zoomRate: '',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                    {size: '720p', fps: [240]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.7μm',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ]
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '52mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: '',
                    focal: '13mm',
                    hdr: 'HDR',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: 'x0.5',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ]
                },
                {
                    name: '雷达',
                    model: 'LiDAR',
                    aperture: '',
                    focal: '',
                    hdr: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    dimension: []

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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 12 Pro Max ",
        name_short: "12 Pro Max",
        hardwareName: 'iPhone13,4',
        isTitleOnly: false,
        pic: `${BASE_URL}Fk_dI5iincN7G3AbauGekaVcx_DE`,
        slogan: "It's a leap year.",
        isNew: false,
        active: false,
        release: "2020-10-23",
        models: [
            {name: "美国", type: "A2342"},
            {name: "加拿大/日本", type: "A2410"},
            {name: "国际", type: "A2411"},
            {name: "国内", type: "A2412"},
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
        sim: [{name: '国内', type: '双卡双待'}],
        geekbenchScore: {
            single: 0,
            multi: 3987
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar',
            front: {
                name: '默认',
                model: '',
                aperture: '',
                focal: '26mm',
                hdr: '',
                pixelCount: '1200万',
                zoomRate: '',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                    {size: '720p', fps: [240]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.7μm',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ]
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: '',
                    focal: '52mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: 'x2',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: '',
                    focal: '13mm',
                    hdr: 'HDR',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: 'x0.5',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ]
                },
                {
                    name: '雷达',
                    model: 'LiDAR',
                    aperture: '',
                    focal: '',
                    hdr: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    dimension: []

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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
]

const iPhone13 = [
    {
        name: "iPhone 13",
        name_short: "13",
        hardwareName: 'iPhone14,5',
        isTitleOnly: false,
        pic: `${BASE_URL}FtgVizdsYyl_nCc5SWKZ2jtlq1NC`,
        slogan: "Your new superpower.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "国内", type: "A2634"},
            {name: "", type: "A2482"},
            {name: "", type: "A2631"},
            {name: "", type: "A2633"},
            {name: "", type: "A2635"},
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
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 0,
            multi: 4499
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-cross',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '23mm',
                hdr: 'HDR',
                pixelCount: '1200万',
                zoomRate: '',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.7μm',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    hdr: 'HDR',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 13 Mini",
        name_short: "13 mini",
        hardwareName: 'iPhone14,4',
        isTitleOnly: false,
        pic: `${BASE_URL}FoOOaHnie8aDAWFCw8bvpTnM8GPo`,
        slogan: "Your new superpower.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "国内", type: "A2629"},
            {name: "", type: "A2481"},
            {name: "", type: "A2626"},
            {name: "", type: "A2628"},
            {name: "", type: "A2630"},
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
        sim: [{name: '国内', type: '单卡'}],
        geekbenchScore: {
            single: 0,
            multi: 4500
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-cross',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/2.2',
                focal: '23mm',
                hdr: 'HDR',
                pixelCount: '1200万',
                zoomRate: '',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.7μm',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    hdr: 'HDR',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 13 Pro",
        name_short: "13 Pro",
        hardwareName: 'iPhone14,2',
        isTitleOnly: false,
        pic: `${BASE_URL}FidLoukTvZG8Sv5wZDiWi_ooEoAK`,
        slogan: "Oh. So. Pro.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "国内", type: "A2639"},
            {name: "", type: "A2483"},
            {name: "", type: "A2636"},
            {name: "", type: "A2638"},
            {name: "", type: "A2640"},
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
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 693,
            multi: 4659
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar',
            front: {
                name: '默认',
                model: 'Sony IMX514 1μm',
                aperture: 'ƒ/2.2',
                focal: '',
                hdr: 'HDR',
                pixelCount: '1200万',
                zoomRate: '',
                dimension: []
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: 'x3光学变焦',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    hdr: 'HDR',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    hdr: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    dimension: []

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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 13 Pro Max ",
        name_short: "13 Pro Max",
        hardwareName: 'iPhone14,3',
        isTitleOnly: false,
        pic: `${BASE_URL}FgEqeDTIKhfN2gw9gJa1wI1goSQg`,
        slogan: "Oh. So. Pro.",
        isNew: false,
        active: false,
        release: "2021-09-15",
        models: [
            {name: "国内", type: "A2644"},
            {name: "", type: "A2484"},
            {name: "", type: "A2641"},
            {name: "", type: "A2645"},
            {name: "", type: "A2643"},
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
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 0,
            multi: 4675
        },
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar',
            front: {
                name: '默认',
                model: 'Sony IMX514 1μm',
                aperture: 'ƒ/2.2',
                focal: '',
                hdr: 'HDR',
                pixelCount: '1200万',
                zoomRate: '',
                dimension: []
            },
            back: [
                {
                    name: '默认',
                    model: 'Sony IMX703 1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: 'x3光学变焦',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: 'Sony IMX713 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    hdr: 'HDR',
                    angle: '',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '广角',
                    model: 'Sony IMX772 1μm',
                    aperture: 'ƒ/2.8',
                    focal: '13mm',
                    hdr: 'HDR',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '雷达',
                    model: 'Sony IMX590 TOF 3D LiDAR',
                    aperture: '',
                    focal: '',
                    hdr: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    dimension: []

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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.0", "2G"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
]

const iPhone14 = [
    {
        name: "iPhone 14",
        name_short: "14",
        hardwareName: 'iPhone14,7',
        isTitleOnly: false,
        pic: `${BASE_URL}Fp7SAUS5RU_RFLpe5zeWEA4eAcOP`,
        slogan: "Big and bigger.",
        isNew: false,
        active: true,
        release: "2022-09-08",
        models: [
            {name: "A2649", type: ""},
            {name: "A2881", type: ""},
            {name: "A2882", type: ""},
            {name: "A2883", type: ""},
            {name: "A2884", type: ""},
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
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '美国', type: 'eSIM 2/8'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 1724,
            multi: 4621
        },
        memory: [
            {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '3279',
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-cross',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [25, 30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
            ]
        },
        colors: [
            {name: '午夜色', color: '#31353b'},
            {name: '紫色', color: '#e7d6e9'},
            {name: '星光色', color: '#f0ece6'},
            {name: '红色', color: '#e11b2b'},
            {name: '蓝色', color: '#bfcede'},
            {name: '黄色', color: '#F9E479'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 14 Plus",
        name_short: "14 Plus",
        hardwareName: 'iPhone14,8',
        isTitleOnly: false,
        pic: `${BASE_URL}FpZNenwa7MlTI4ytGQzPZ1BHc2EB`,
        slogan: "Big and bigger.",
        isNew: false,
        active: true,
        release: "2022-09-08",
        models: [
            {name: "A2632", type: ""},
            {name: "A2885", type: ""},
            {name: "A2886", type: ""},
            {name: "A2887", type: ""},
            {name: "A2888", type: ""},
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
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '美国', type: 'eSIM 2/8'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 1724,
            multi: 4638
        },
        memory: [
            {size: "6", type: "LPDDR4X"}
        ],
        storage: ["128", "256", "512"],
        battery: '4325',
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
            hdr:  'HDR',
        },
        cameras: {
            type: '2-cross',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [25, 30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.9μm',
                    aperture: 'ƒ/1.5',
                    focal: '26mm',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
            ]
        },
        colors: [
            {name: '午夜色', color: '#31353b'},
            {name: '紫色', color: '#e7d6e9'},
            {name: '星光色', color: '#f0ece6'},
            {name: '红色', color: '#e11b2b'},
            {name: '蓝色', color: '#bfcede'},
            {name: '黄色', color: '#F9E479'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 14 Pro",
        name_short: "14 Pro",
        hardwareName: 'iPhone15,2',
        isTitleOnly: false,
        pic: `${BASE_URL}Fma1VhVCS_cAJHIK5dvVPA8-9R__`,
        slogan: "Pro. Beyond.",
        isNew: false,
        active: true,
        release: "2022-09-08",
        models: [
            {name: "A2650", type: ""},
            {name: "A2889", type: ""},
            {name: "A2890", type: ""},
            {name: "A2891", type: ""},
            {name: "A2892", type: ""},
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
            rate: '3.46',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '美国', type: 'eSIM 2/8'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 1874,
            multi: 5376
        },
        memory: [
            {size: "6", type: "LPDDR5"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '3200',
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.22μm - 2.44μm',
                    aperture: 'ƒ/1.78',
                    focal: '24mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: '1.0μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    angel: '',
                    pixelCount: '4800万',
                    zoomRate: 'x3 光学变焦',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '1.4μm',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '雷达',
                    model: 'TOF 3D LiDAR scanner',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    hdr: false,
                    dimension: []
                },
            ]
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 14 Pro Max",
        name_short: "14 Pro Max",
        hardwareName: 'iPhone15,3',
        isTitleOnly: false,
        pic: `${BASE_URL}Fma1VhVCS_cAJHIK5dvVPA8-9R__`,
        slogan: "Pro. Beyond.",
        isNew: false,
        active: true,
        release: "2022-09-08",
        models: [
            {name: "A2651", type: ""},
            {name: "A2893", type: ""},
            {name: "A2894", type: ""},
            {name: "A2895", type: ""},
            {name: "A2896", type: ""},
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
            rate: '3.46',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        sim: [
            {name: '国内', type: '双卡双待'},
            {name: '美国', type: 'eSIM 2/8'},
            {name: '其它', type: '实体+eSIM'}
        ],
        geekbenchScore: {
            single: 1873,
            multi: 5357
        },
        memory: [
            {size: "6", type: "LPDDR5"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '4323',
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
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.22μm - 2.44μm',
                    aperture: 'ƒ/1.78',
                    focal: '24mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: '1.0μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    angel: '',
                    pixelCount: '4800万',
                    zoomRate: 'x3 光学变焦',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '1.4μm',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '雷达',
                    model: 'TOF 3D LiDAR scanner',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    hdr: false,
                    dimension: []
                },
            ]
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
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
]

const iPhone15 = [
    {
        name: "iPhone 15",
        name_short: "15",
        hardwareName: 'iPhone15,4',
        isTitleOnly: false,
        pic: `${BASE_URL}FhMbefkLQZWGAVhOBGVQtGCWlfr2`,
        slogan: "New camera. New design. Newphoria.",
        isNew: false,
        active: true,
        release: "2023-09-13",
        models: [
            {name: "A2846", type: ""},
            {name: "A3089", type: ""},
            {name: "A3090", type: ""},
            {name: "A3092", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 147.6,
        width: 71.6,
        thickness: 7.80,
        weight: 171,
        os: {
            init: "iOS 17",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A16',
            rate: '3.46',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 2544,
            multi: 6301
        },
        memory: [
            {size: "6", type: "LPDDR5"}
        ],
        storage: ["128", "256", "512"],
        battery: '3349',
        port: 'USB-C 2.0 480Mb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.1",
            type: 'XDR OLED',
            refreshRate: "60", // hz
            width: 1179,
            height: 2556,
            density: "460",
            touch3D: false,
            hdr:  'HDR',
        },
        cameras: {
            type: '2-cross',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [25, 30, 60]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
            ]
        },
        colors: [
            {name: '黑色', color: '#4c4d4f'},
            {name: '蓝色', color: '#f4f8f9'},
            {name: '绿色', color: '#f4f8e9'},
            {name: '黄色', color: '#fff9e1'},
            {name: '粉色', color: '#ffe5e6'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 15 Plus",
        name_short: "15 Plus",
        hardwareName: 'iPhone15,5',
        isTitleOnly: false,
        pic: `${BASE_URL}Fipw4PWx72ys9GXzxOZHGanSBqu2`,
        slogan: "New camera. New design. Newphoria.",
        isNew: false,
        active: true,
        release: "2023-09-13",
        models: [
            {name: "A2847", type: ""},
            {name: "A3093", type: ""},
            {name: "A3094", type: ""},
            {name: "A3096", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 160.9,
        width: 77.8,
        thickness: 7.80,
        weight: 201,
        os: {
            init: "iOS 17",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A16',
            rate: '3.46',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 2557,
            multi: 6366
        },
        memory: [
            {size: "6", type: "LPDDR5"}
        ],
        storage: ["128", "256", "512"],
        battery: '4383',
        port: 'USB-C 2.0 480Mb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.7",
            type: 'XDR OLED',
            refreshRate: "60", // hz
            width: 1290,
            height: 2796,
            density: "460",
            touch3D: false,
            hdr:  'HDR',
        },
        cameras: {
            type: '2-cross',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [25, 30, 60]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.4',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
            ]
        },
        colors: [
            {name: '黑色', color: '#4c4d4f'},
            {name: '蓝色', color: '#f4f8f9'},
            {name: '绿色', color: '#f4f8e9'},
            {name: '黄色', color: '#fff9e1'},
            {name: '粉色', color: '#ffe5e6'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 15 Pro",
        name_short: "15 Pro",
        hardwareName: 'iPhone16,1',
        isTitleOnly: false,
        pic: `${BASE_URL}Fupt6lIfMr8rjz00pnTt8jB2uMJN`,
        slogan: "Titanium. So strong. So light. So Pro.",
        isNew: false,
        active: true,
        release: "2023-09-13",
        models: [
            {name: "A2848", type: ""},
            {name: "A3101", type: ""},
            {name: "A3102", type: ""},
            {name: "A3104", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 146.6,
        width: 70.6,
        thickness: 8.25,
        weight: 187,
        os: {
            init: "iOS 17",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A17 Pro',
            rate: '3.78',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 6
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 2896,
            multi: 7202
        },
        memory: [
            {size: "8", type: "LPDDR5"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '3274',
        port: 'USB-C 3.1 10Gb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.1",
            type: 'XDR OLED ProMotion',
            refreshRate: "1 ~ 120", // hz
            width: 1179,
            height: 2556,
            density: "460",
            touch3D: false,
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar-15',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [ // 次序位置特定，会影响镜头布局
                {
                    name: '默认',
                    model: '1.22μm - 2.44μm',
                    aperture: 'ƒ/1.78',
                    focal: '24mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: '1.0μm',
                    aperture: 'ƒ/2.8',
                    focal: '77mm',
                    angel: '',
                    pixelCount: '1200万',
                    zoomRate: 'x3 光学变焦',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '1.4μm',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '雷达',
                    model: '3D LiDAR scanner',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    hdr: false,
                    dimension: []
                },
            ]
        },
        colors: [
            {name: '黑色钛金属', color: '#3c3c3c'},
            {name: '白色钛金属', color: '#e1ded7'},
            {name: '蓝色钛金属', color: '#3b3f48'},
            {name: '原色钛金属', color: '#a39c92'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 15 Pro Max",
        name_short: "15 Pro Max",
        hardwareName: 'iPhone16,2',
        isTitleOnly: false,
        pic: `${BASE_URL}Fljk6Vb_dKNwSSCe_0-4a-PMobIY`,
        slogan: "Titanium. So strong. So light. So Pro.",
        isNew: false,
        active: true,
        release: "2023-09-13",
        models: [
            {name: "A2849", type: ""},
            {name: "A3105", type: ""},
            {name: "A3106", type: ""},
            {name: "A3108", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 159.9,
        width: 76.7,
        thickness: 8.25,
        weight: 221,
        os: {
            init: "iOS 17",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A17 Pro',
            rate: '3.78',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 6
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 2888,
            multi: 7171
        },
        memory: [
            {size: "8", type: "LPDDR5"}
        ],
        storage: ["256", "512", "1024"],
        battery: '4422',
        port: 'USB-C 3.1 10Gb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.7",
            type: 'XDR OLED ProMotion',
            refreshRate: "1 ~ 120", // hz
            width: 1290,
            height: 2796,
            density: "460",
            touch3D: false,
            hdr:  'HDR',
        },
        cameras: {
            type: '3-radar-15',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '1.22μm - 2.44μm',
                    aperture: 'ƒ/1.78',
                    focal: '24mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: '1.12μm',
                    aperture: 'ƒ/2.8',
                    focal: '120mm',
                    angel: '',
                    pixelCount: '1200万',
                    zoomRate: 'x5 光学变焦',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '1.4μm',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '雷达',
                    model: '3D LiDAR scanner',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    hdr: false,
                    dimension: []
                },
            ]
        },
        colors: [
            {name: '黑色钛金属', color: '#3c3c3c'},
            {name: '白色钛金属', color: '#e1ded7'},
            {name: '蓝色钛金属', color: '#3b3f48'},
            {name: '原色钛金属', color: '#a39c92'},
        ],
        charge: [
            {name: '充电口', power: '12w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '15w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
]

const iPhone16 = [
    {
        name: "iPhone 16",
        name_short: "16",
        hardwareName: 'iPhone17,3',
        isTitleOnly: false,
        pic: `${BASE_URL}Flg1-cbZPlsMzpMFYcDBrto01R6a`,
        slogan: "",
        isNew: true,
        active: true,
        release: "2024-09-10",
        models: [
            {name: "A3081", type: ""},
            {name: "A3286", type: ""},
            {name: "A3287", type: ""},
            {name: "A3288", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 147.6,
        width: 71.6,
        thickness: 7.80,
        weight: 170,
        os: {
            init: "iOS 18",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A18',
            rate: '3.78',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 3268,
            multi: 8011
        },
        memory: [
            {size: "8", type: "LPDDR5X"}
        ],
        storage: ["128", "256", "512"],
        battery: '3561',
        port: 'USB-C 2.0 480Mb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.1",
            type: 'XDR OLED',
            refreshRate: "60", // hz
            width: 1179,
            height: 2556,
            density: "460",
            touch3D: false,
            hdr:  'HDR',
        },
        cameras: {
            type: '2-vertical-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [25, 30, 60]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: 'x2',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
            ]
        },
        colors: [
            {name: '黑色', color: '#444547'},
            {name: '白色', color: '#f7f6f4'},
            {name: '粉色', color: '#f0a7d5'},
            {name: '深青色', color: '#9fc9c7'},
            {name: '群青色', color: '#8195dc'},
        ],
        charge: [
            {name: '充电口', power: '20w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '25w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["WiFi7", "5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 16 Plus",
        name_short: "16 Plus",
        hardwareName: 'iPhone17,4',
        isTitleOnly: false,
        pic: `${BASE_URL}FneRdvOBuzynWMU6rXJA_eZxMyuW`,
        slogan: "New camera. New design. Newphoria.",
        isNew: true,
        active: true,
        release: "2024-09-10",
        models: [
            {name: "A3082", type: ""},
            {name: "A3289", type: ""},
            {name: "A3290", type: ""},
            {name: "A3291", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 160.9,
        width: 77.8,
        thickness: 7.80,
        weight: 199,
        os: {
            init: "iOS 18",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A18',
            rate: '3.78',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 3278,
            multi: 8022
        },
        memory: [
            {size: "8", type: "LPDDR5X"}
        ],
        storage: ["128", "256", "512"],
        battery: '4674',
        port: 'USB-C 2.0 480Mb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.7",
            type: 'XDR OLED',
            refreshRate: "60", // hz
            width: 1290,
            height: 2796,
            density: "460",
            touch3D: false,
            hdr:  'HDR',
        },
        cameras: {
            type: '2-vertical-simple',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr:  'HDR',
                dimension: [
                    {size: '4k', fps: [24, 25, 30, 60]},
                    {size: '1080p', fps: [25, 30, 60]},
                ]
            },
            back: [
                {
                    name: '默认',
                    model: '',
                    aperture: 'ƒ/1.6',
                    focal: '26mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60]},
                        {size: '1080p', fps: [25, 30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '1200万',
                    zoomRate: 'x2',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
            ]
        },
        colors: [
            {name: '黑色', color: '#444547'},
            {name: '白色', color: '#f7f6f4'},
            {name: '粉色', color: '#f0a7d5'},
            {name: '深青色', color: '#9fc9c7'},
            {name: '群青色', color: '#8195dc'},
        ],
        charge: [
            {name: '充电口', power: '20w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '25w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["WiFi7", "5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 16 Pro",
        name_short: "16 Pro",
        hardwareName: 'iPhone17,1',
        isTitleOnly: false,
        pic: `${BASE_URL}FrRL4rMpmwRvyLELv6FTMcFV7A_d`,
        slogan: "",
        isNew: true,
        active: true,
        release: "2024-09-10",
        models: [
            {name: "A3083", type: ""},
            {name: "A3292", type: ""},
            {name: "A3293", type: ""},
            {name: "A3294", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 149.6,
        width: 71.5,
        thickness: 8.25,
        weight: 199,
        os: {
            init: "iOS 18",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A18 Pro',
            rate: '4.04',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 6
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 3406,
            multi: 8413
        },
        memory: [
            {size: "8", type: "LPDDR5X"}
        ],
        storage: ["128", "256", "512", "1024"],
        battery: '3582',
        port: 'USB-C 3.1 10Gb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.3",
            type: 'XDR OLED ProMotion',
            refreshRate: "1 ~ 120", // hz
            width: 1206,
            height: 2622,
            density: "460",
            touch3D: false,
            hdr: 'HDR',
        },
        cameras: {
            type: '3-radar-15',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [ // 次序位置特定，会影响镜头布局
                {
                    name: '默认',
                    model: '1.22μm - 2.44μm',
                    aperture: 'ƒ/1.78',
                    focal: '24mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: 'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60, 120]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: 'ƒ/2.8',
                    focal: '120mm',
                    angel: '',
                    pixelCount: '1200万',
                    zoomRate: 'x5 光学变焦',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60, 120]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '1.4μm',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60, 120]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '雷达',
                    model: '3D LiDAR scanner',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    hdr: false,
                    dimension: []
                },
            ]
        },
        colors: [
            {name: '黑色钛金属', color: '#515151'},
            {name: '白色钛金属', color: '#e0e0de'},
            {name: '原色钛金属', color: '#a6a19b'},
            {name: '沙漠色钛金属', color: '#a49487'},
        ],
        charge: [
            {name: '充电口', power: '20w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '25w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["WiFi7", "5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    },
    {
        name: "iPhone 16 Pro Max",
        name_short: "16 Pro Max",
        hardwareName: 'iPhone17,2',
        isTitleOnly: false,
        pic: `${BASE_URL}FrRL4rMpmwRvyLELv6FTMcFV7A_d`,
        slogan: "",
        isNew: true,
        active: true,
        release: "2024-09-10",
        models: [
            {name: "A3084", type: ""},
            {name: "A3295", type: ""},
            {name: "A3296", type: ""},
            {name: "A3297", type: ""},
        ],
        network: ["5G", "4G", "LTE", "3G", "2G"],
        height: 163,
        width: 77.6,
        thickness: 8.25,
        weight: 227,
        os: {
            init: "iOS 18",
            last: lastOS
        },
        cpu: {
            icon: '',
            model: 'A18 Pro',
            rate: '4.04',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 6
        },
        sim: [
            {name: '国内', type: '双卡双待'},
        ],
        geekbenchScore: {
            single: 3394,
            multi: 8360
        },
        memory: [
            {size: "8", type: "LPDDR5X"}
        ],
        storage: ["256", "512", "1024"],
        battery: '4685',
        port: 'USB-C 3.1 10Gb/s',
        screen: {
            brightness: '1000~2000',
            size: "6.9",
            type: 'XDR OLED ProMotion',
            refreshRate: "1 ~ 120", // hz
            width: 1320,
            height: 2868,
            density: "460",
            touch3D: false,
            hdr: 'HDR',
        },
        cameras: {
            type: '3-radar-15',
            front: {
                name: '默认',
                model: '',
                aperture: 'ƒ/1.9',
                focal: '23mm',
                pixelCount: '1200万',
                zoomRate: '',
                hdr: 'HDR',
                dimension: [
                    {size: '4k', fps: [24, 30, 60]},
                    {size: '1080p', fps: [30, 60, 120]},
                ]
            },
            back: [ // 次序位置特定，会影响镜头布局
                {
                    name: '默认',
                    model: '1.22μm - 2.44μm',
                    aperture: 'ƒ/1.78',
                    focal: '24mm',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr:  'HDR',
                    dimension: [
                        {size: '4k', fps: [24, 30, 60, 120]},
                        {size: '1080p', fps: [30, 60, 120]},
                    ]
                },
                {
                    name: '远焦',
                    model: '',
                    aperture: 'ƒ/2.8',
                    focal: '120mm',
                    angel: '',
                    pixelCount: '1200万',
                    zoomRate: 'x5 光学变焦',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60, 120]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '广角',
                    model: '1.4μm',
                    aperture: 'ƒ/2.2',
                    focal: '13mm',
                    angel: '120',
                    pixelCount: '4800万',
                    zoomRate: '',
                    hdr: '10 bit HDR',
                    dimension: [
                        {size: '4k', fps: [24, 25, 30, 60, 120]},
                        {size: '1080p', fps: [30, 60, 120, 240]},
                    ]
                },
                {
                    name: '雷达',
                    model: '3D LiDAR scanner',
                    aperture: '',
                    focal: '',
                    angel: '',
                    pixelCount: '',
                    zoomRate: '',
                    hdr: false,
                    dimension: []
                },
            ]
        },
        colors: [
            {name: '黑色钛金属', color: '#515151'},
            {name: '白色钛金属', color: '#e0e0de'},
            {name: '原色钛金属', color: '#a6a19b'},
            {name: '沙漠色钛金属', color: '#a49487'},
        ],
        charge: [
            {name: '充电口', power: '20w'},
            {name: 'PD', power: '20-23w'},
            {name: 'MagSafe', power: '25w'},
        ],
        unlockMethod: ['面容解锁'],
        applePay: false,
        connectivity: ["WiFi7", "5G", "4G", "UWB", "蓝牙5.3", "2G", "NFC"],
        waterResistant: {
            value: 'IP68',
            waterDepth: 6,  // 深度 m
            timeHold: 30 // 时长 min
        },
        price: "",
    }
]

const iPhoneSeries = [
    iPhone,
    iPhone3,
    iPhone4,
    iPhone5,
    iPhone6,
    iPhone6s,
    iPhone7,
    iPhone8,
    iPhoneSE,
    iPhoneX,
    iPhone11,
    iPhone12,
    iPhone13,
    iPhone14,
    iPhone15,
    iPhone16,
].reverse()

const iPhones = iPhoneSeries.map(group => {
    return group.reverse()
}).flat()

export {
    iPhoneSeries, iPhones
}
