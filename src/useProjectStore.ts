import {defineStore} from "pinia";


export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        insets: {
            windowsHeight: window.innerHeight,
            windowsWidth: window.innerWidth,
            heightPanel: window.innerHeight - 45, // 除 navbar 的高度
        },
        isShareShowed: false
    }),
    mutations: {
    }
})
