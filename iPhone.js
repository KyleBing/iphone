/*****************************
 Create Date: 20201016172121
 Update Date: 20201016172124
 *****************************/
const lastOS = "最新";
const iphones = [
    {
        name: "iPhone 1",
        name_short: "1",
        pic: "1",
        slogan: "This is only the beginning. Apple reinvents the phone.",
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
            size: "3.5",
            type: 'LCD',
            width: 480,
            height: 320,
            density: "163",
            touch3D: false
        },
        connectivity: ['Wi-Fi', "蓝牙 2.0"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 3G",
        name_short: "3G",
        pic: "3g",
        slogan: "New features, new price.",
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
            size: "3.5",
            type: 'LCD',
            width: 480,
            height: 320,
            density: "163",
            touch3D: false
        },
        connectivity: ['Wi-Fi', "蓝牙 2.0"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 3Gs",
        name_short: "3Gs",
        pic: "3gs",
        slogan: "The fastest, smartest phone yet. More to love. Less to pay.",
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
            size: "3.5",
            type: 'LCD',
            width: 480,
            height: 320,
            density: "163",
            touch3D: false
        },
        connectivity: ['Wi-Fi 2.4', "蓝牙 2.1"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 4",
        name_short: "4",
        pic: "4",
        slogan: "This changes everything. Again.",
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
            size: "3.5",
            type: 'IPS TFT LCD',
            width: 960,
            height: 640,
            density: "326",
            touch3D: false
        },
        connectivity: ['Wi-Fi 2.4', "蓝牙 2.1"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 4s",
        name_short: "4s",
        pic: "4s",
        slogan: "The most amazing iPhone yet.",
        active: false,
        release: "2012-09-21",
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
            size: "3.5",
            type: 'IPS TFT LCD',
            width: 960,
            height: 640,
            density: "326",
            touch3D: false
        },
        connectivity: ['Wi-Fi 2.4'],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 5",
        name_short: "5",
        pic: "5",
        slogan: "Loving it is easy. That's why so many people do. The biggest thing to happen to iPhone since iPhone.",
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
            size: "4.0",
            type: 'IPS TFT LCD',
            width: 1136,
            height: 640,
            density: "326",
            touch3D: false
        },
        connectivity: ['Wi-Fi'],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 5c",
        name_short: "5c",
        pic: "5c",
        slogan: "For the colorful",
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
            size: "4.0",
            type: 'IPS TFT LCD',
            width: 1136,
            height: 640,
            density: "326",
            touch3D: false
        },
        connectivity: [],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 5s",
        name_short: "5s",
        pic: "5s",
        slogan: "You're more powerful than you think. Forward thinking",
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
            size: "4.0",
            type: 'IPS TFT LCD',
            width: 1136,
            height: 640,
            density: "326",
            touch3D: false
        },
        connectivity: ["2G", "3G", "LTE", "Wi-Fi", "蓝牙 4.0", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6",
        name_short: "6",
        pic: "6",
        slogan: "Bigger than bigger. The two and only",
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
            size: "4.7",
            type: 'IPS LCD',
            width: 1334,
            height: 750,
            density: "326",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6 plus",
        name_short: "6 plus",
        pic: "6",
        slogan: "Bigger than bigger. The two and only",
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
            size: "5.5",
            type: 'IPS LCD',
            width: 1920,
            height: 1080,
            density: "401",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6s",
        name_short: "6s",
        pic: "6s",
        slogan: "The only thing that’s changed is everything. One powerful phone",
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
            size: "4.7",
            type: 'IPS LCD',
            width: 1334,
            height: 750,
            density: "326",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 6s plus",
        name_short: "6s plus",
        pic: "6s",
        slogan: "The only thing that’s changed is everything. One powerful phone",
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
            size: "5.5",
            type: 'IPS LCD',
            width: 1920,
            height: 1080,
            density: "401",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 4.2", "NFC", "GPS"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone SE",
        name_short: "SE",
        pic: "SE",
        slogan: "A big step for small.",
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
            last: "iOS 14.4.2"
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
            size: "4.0",
            type: 'IPS',
            width: 1136,
            height: 640,
            density: "326",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "Wi-Fi", "蓝牙 4.2"],
        prove: '',
        price: "",
    },
    {
        name: "iPhone 7",
        name_short: "7",
        pic: "7",
        slogan: "This is 7",
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
            size: "4.7",
            type: 'IPS LCD',
            width: 1334,
            height: 750,
            density: "326",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone 7 plus",
        name_short: "7 plus",
        pic: "7",
        slogan: "This is 7",
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
            size: "5.5",
            type: 'IPS LCD',
            width: 1920,
            height: 1080,
            density: "401",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone 8",
        name_short: "8",
        pic: "8",
        slogan: "A new generation of iPhone",
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
            size: "4.7",
            type: 'IPS LCD',
            width: 1334,
            height: 750,
            density: "326",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone 8 Plus",
        name_short: "8 Plus",
        pic: "8",
        slogan: "A new generation of iPhone",
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
            size: "5.5",
            type: 'IPS LCD',
            width: 1920,
            height: 1080,
            density: "401",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone SE2",
        name_short: "SE2",
        pic: "SE2",
        slogan: "Lots to love. Less to spend.",
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
            size: "4.7",
            type: 'IPS',
            width: 1334,
            height: 750,
            density: "326",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone X",
        name_short: "X",
        pic: "X",
        slogan: "Say hello to the future.",
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
            size: "6.08",
            type: 'AMOLED',
            width: 2436,
            height: 1125,
            density: "458",
            touch3D: true
        },
        connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
        prove: 'IPX67',
        price: "",
    },
    {
        name: "iPhone XR",
        name_short: "XR",
        pic: "XR",
        slogan: "Brilliant. In every way. Make room for color.",
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
        modem: '',
        memory: [
            {size: "3", type: "LPDDR4X"}
        ],
        storage: ["64", "128", "256"],
        battery: '2942',
        port: '闪电',
        screen: {
            size: "6.08",
            type: 'IPS LCD',
            width: 1792,
            height: 828,
            density: "326",
            touch3D: false
        },
        connectivity: [],
        prove: 'IPX',
        price: "",
    },
    {
        name: "iPhone XS",
        name_short: "XS",
        pic: "XS",
        slogan: "Welcome to the big screens.",
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
            size: "5.85",
            type: 'OLED HDR',
            width: 2436,
            height: 1125,
            density: "458",
            touch3D: false
        },
        connectivity: [],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone XS Max",
        name_short: "XS Max",
        pic: "XS",
        slogan: "Welcome to the big screens.",
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
        modem: '',
        memory: [
            {size: "4", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512"],
        battery: '3174',
        port: '闪电',
        screen: {
            size: "6.46",
            type: 'OLED HDR',
            width: 2688,
            height: 1242,
            density: "458",
            touch3D: false
        },
        connectivity: [],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 11",
        name_short: "11",
        pic: "11",
        slogan: "Just the right amount of everything.",
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
            size: "6.1",
            type: 'IPS LCD',
            width: 1792,
            height: 828,
            density: "326",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },

    {
        name: "iPhone 11 Pro",
        name_short: "11 Pro",
        pic: "11pro",
        slogan: "And then there was Pro. Pro Cameras. Pro Display. Pro Performance.",
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
            size: "5.85",
            type: 'XDR OLED',
            width: 2436,
            height: 1125,
            density: "458",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 11 Pro Max",
        name_short: "11 Pro Max",
        pic: "11pro",
        slogan: "And then there was Pro. Pro Cameras. Pro Display. Pro Performance.",
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
            size: "6.46",
            type: 'XDR OLED',
            width: 2688,
            height: 1242,
            density: "458",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12 Mini",
        name_short: "12 Mini",
        pic: "12",
        slogan: "Blast past fast.",
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
            size: "5.4",
            type: 'XDR OLED',
            width: 2340,
            height: 1080,
            density: "476",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12",
        name_short: "12",
        pic: "12",
        slogan: "Blast past fast.",
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
            size: "6.1",
            type: 'XDR OLED',
            width: 2532,
            height: 1170,
            density: "460",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12 Pro",
        name_short: "12 Pro",
        pic: "12pro",
        slogan: "It's a leap year.",
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
            size: "6.06",
            type: 'XDR OLED',
            width: 2532,
            height: 1170,
            density: "460",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
    {
        name: "iPhone 12 Pro Max ",
        name_short: "12 Pro Max",
        pic: "12pro",
        slogan: "It's a leap year.",
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
            size: "6.68",
            type: 'XDR OLED',
            width: 2778,
            height: 1284,
            density: "458",
            touch3D: false
        },
        connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
        prove: 'IPX68',
        price: "",
    },
].reverse();

let app = new Vue({
    el: "#app",
    data: {
        // full screen 相关
        showFullScreenBtn: false,
        didEnteredFullScreen: false,
        // 浏览器参数
        portraitMode: false,
        mobileMode: false,
        latesOS: lastOS,
        iphones: iphones,
        iphonesOrigin: iphones,

        tags: [],
        keyword: '',
        tipShowed: false,
    },
    mounted: function () {
        // 全屏相关
        let chromeCore = /Chrome/i.test(navigator.userAgent);
        let mobileMode = /Mobile/i.test(navigator.userAgent);
        this.portraitMode = window.innerWidth > window.innerHeight;
        this.mobileMode = mobileMode;
        this.showFullScreenBtn = chromeCore && !mobileMode;
    },
    watch: {
        keyword() {
            this.filterIphone();
        }
    },
    methods: {
        tagToggle(tag) {
            if (this.tags.some(item => item === tag)) {
                this.tags.splice(this.tags.indexOf(tag), 1)
            } else {
                this.tags.push(tag)
            }
        },
        // 全屏显示
        enterFullScreen: function () {
            document.documentElement.requestFullscreen();
        },

        toggleTip(show) {
            this.tipShowed = show;
        },

        filterIphone() {
            if (this.keyword) {
                let finalKeyword;
                // 以 # 开头为精确查找，匹配整个字符串，少或多都不匹配
                if (this.keyword.indexOf('#') >= 0) {
                    finalKeyword = this.keyword.replace('#', '').replace(/ /ig, '');
                } else {
                    finalKeyword = this.keyword.replace(/ /ig, '');
                }
                this.keywordArray = finalKeyword.split('/');
                let tempCollection = [];
                this.keywordArray.forEach(name => {
                    this.iphonesOrigin.forEach(iphone => {
                        let reg = null;
                        // reg 匹配模式
                        if (this.keyword.indexOf('#') >= 0) {
                            reg = new RegExp(`^${name}$`, 'ig');
                        } else {
                            reg = new RegExp(name, 'ig');
                        }
                        let nameShort = iphone.name_short.replace(/ /ig, '');
                        if (reg.test(nameShort)) {
                            tempCollection.push(iphone);
                        }
                    })
                });
                this.iphones = tempCollection
            } else {
                this.iphones = this.iphonesOrigin
            }

        }
    }
});
// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
    app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
