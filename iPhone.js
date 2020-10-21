/*****************************
 Create Date: 20201016172121
 Update Date: 20201016172124
 *****************************/
const lastOS = "最新";
const iphones = [
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
      height: 138.4,
      width: 67.3,
      thickness: 7.3,
      weight: 148,
      os: {
         init: "iOS 11.0",
         last: lastOS
      },
      cpu: {
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
         resolution: "1334 × 750",
         density: "326",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
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
      height: 158.4,
      width: 78.1,
      thickness: 7.5,
      weight: 202,
      os: {
         init: "iOS 11.0",
         last: lastOS
      },
      cpu: {
         model: 'A11',
         rate: '2.39',
         core: 6
      },
      gpu: {
         model: "0",
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
         resolution: "1920 × 1080",
         density: "401",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
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
      height: 138.4,
      width: 67.3,
      thickness: 7.3,
      weight: 148,
      os: {
         init: "iOS 13.4",
         last: lastOS
      },
      cpu: {
         model: 'A13',
         rate: '2.65',
         core: 6
      },
      gpu: {
         model: "Apple",
         core: 4
      },
      modem: '双卡 eSIM',
      memory: [
         {size: "3", type: "LPDDR4X"}
      ],
      storage: ["64", "256"],
      battery: '1821',
      port: '闪电',
      screen: {
         size: "4.7",
         type: 'IPS',
         resolution: "1334 × 750",
         density: "326",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
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
      height: 143.6,
      width: 70.9,
      thickness: 7.7,
      weight: 174,
      os: {
         init: "iOS 11.0.1",
         last: lastOS
      },
      cpu: {
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
         resolution: "2436 × 1125",
         density: "458",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "Wi-Fi", "蓝牙 5.0"],
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
      height: 150.9,
      width: 75.7,
      thickness: 8.3,
      weight: 194,
      os: {
         init: "iOS 12",
         last: lastOS
      },
      cpu: {
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
         resolution: "1792 × 828",
         density: "326",
      },
      connectivity: [],
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
      height: 143.6,
      width: 70.9,
      thickness: 7.7,
      weight: 177,
      os: {
         init: "iOS 12",
         last: lastOS
      },
      cpu: {
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
         resolution: "2436 × 1125",
         density: "458",
      },
      connectivity: [],
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
      height: 157.5,
      width: 77.4,
      thickness: 7.7,
      weight: 208,
      os: {
         init: "iOS 12",
         last: lastOS
      },
      cpu: {
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
         resolution: "2688 × 1242",
         density: "458",
      },
      connectivity: [],
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
      height: 150.9,
      width: 75.7,
      thickness: 8.3,
      weight: 194,
      os: {
         init: "iOS 13",
         last: lastOS
      },
      cpu: {
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
         resolution: "1792 × 828",
         density: "326",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
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
      height: 144,
      width: 71.4,
      thickness: 8.1,
      weight: 188,
      os: {
         init: "iOS 13",
         last: lastOS
      },
      cpu: {
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
         resolution: "2436 × 1125",
         density: "458",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
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
      height: 158,
      width: 77.8,
      thickness: 8.1,
      weight: 226,
      os: {
         init: "iOS 13",
         last: lastOS
      },
      cpu: {
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
         resolution: "2688 × 1242",
         density: "458",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
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
      height: 131.5,
      width: 64.2,
      thickness: 7.44,
      weight: 133,
      os: {
         init: "iOS 14.2",
         last: lastOS
      },
      cpu: {
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
      port: '闪电',
      screen: {
         size: "5.4",
         type: 'XDR OLED',
         resolution: "2340 × 1080",
         density: "476",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
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
      height: 146.7,
      width: 71.5,
      thickness: 7.44,
      weight: 162,
      os: {
         init: "iOS 14.1",
         last: lastOS
      },
      cpu: {
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
      port: '闪电',
      screen: {
         size: "6.1",
         type: 'XDR OLED',
         resolution: "2532 × 1170",
         density: "460",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
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
      height: 146.7,
      width: 71.5,
      thickness: 7.4,
      weight: 189,
      os: {
         init: "iOS 14",
         last: lastOS
      },
      cpu: {
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
      port: '闪电',
      screen: {
         size: "6.06",
         type: 'XDR OLED',
         resolution: "2532 × 1170",
         density: "460",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
      price: "",
   },
   {
      name: "iPhone 12 Pro Max ",
      name_short: "12",
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
      height: 160.8,
      width: 78.1,
      thickness: 7.4,
      weight: 228,
      os: {
         init: "iOS 14",
         last: lastOS
      },
      cpu: {
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
      port: '闪电',
      screen: {
         size: "6.68",
         type: 'XDR OLED',
         resolution: "2778 × 1284",
         density: "458",
      },
      connectivity: ["2G", "3G", "4G", "LTE", "5G", "Wi-Fi 6", "蓝牙 5.0"],
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
      keyword: ''
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
      keyword(){
         this.filterIphone();
      }
   },
   methods: {
      tagToggle(tag){
         if (this.tags.some(item => item === tag)){
            this.tags.splice(this.tags.indexOf(tag), 1)
         } else {
            this.tags.push(tag)
         }
      },
      // 全屏显示
      enterFullScreen: function () {
         document.documentElement.requestFullscreen();
      },
      filterIphone() {
         if (this.keyword) {
            let finalKeyword = this.keyword.replace(/ /ig, '');
            this.keywordArray = finalKeyword.split('/');
            let tempCollection = [];
            this.keywordArray.forEach(name => {
               this.iphonesOrigin.forEach(iphone => {
                  let nameShort = iphone.name_short.replace(/ /ig, '');
                  let reg = new RegExp(name, 'ig');
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