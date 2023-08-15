import { createStore } from 'vuex'

export default createStore({
    state: {
        insets: {
            windowsHeight: window.innerHeight,
            windowsWidth: window.innerWidth,
            heightPanel: window.innerHeight - 45, // 除 navbar 的高度
        },
        isShareShowed: false
    },
    getters: {

    },
    mutations: {

        SET_INSETS(state, payload){
            state.insets = payload
        },

        SET_SHOW_SHARE(state, payload){
            state.isShareShowed = payload
        },
    }
})
