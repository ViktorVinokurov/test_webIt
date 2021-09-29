import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    news: [],
    newsInfo: {}
  }),

  getters: {
    getNews: (state) => state.news,
    getInfoNews: (state) => state.newsInfo
  },
  mutations: {
    setNews (state, payload) {
      state.news = payload
    },
    setInfoNews (state, payload) {
      state.newsInfo = payload
    }
  },
  actions: {
    async GET_NEWS (ctx, payload) {
      const response = await axios.get('https://shop.anyprinter.ru/api/news')
      if (response.status) {
        ctx.commit('setNews', payload)
      }
    },
    async GET_NEWS_LIMIT (ctx, payload) {
      const response = await axios.get('https://shop.anyprinter.ru/api/news?limit=5')
      if (response.status) {
        ctx.commit('setNews', payload)
      }
    },
    GET_INFO_NEWS (ctx, payload) {
      ctx.commit('setInfoNews', payload)
    }
  }
}
