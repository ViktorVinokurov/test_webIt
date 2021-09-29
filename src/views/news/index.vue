<template>
  <div class="d-flex flex-wrap">
    <t-news
        v-for="(news, index) in newsComputed"
        :key="index"
        :news="news"
        width="335"
    ></t-news>
  </div>
</template>

<script>
import axios from 'axios'
import TNews from '@/components/news'
export default {
  name: 'news',
  data: () => ({
    news: []
  }),
  components: {
    TNews
  },
  computed: {
    newsComputed: {
      get () {
        return this.news
      },
      set (v) {
        this.news = v
      }
    }
  },
  mounted () {
    this.getNews()
  },
  methods: {
    async getNews () {
      const response = await axios.get('https://shop.anyprinter.ru/api/news')
      if (response.status) {
        this.newsComputed = response.data
      }
    }
  }
}
</script>

<style scoped>

</style>
