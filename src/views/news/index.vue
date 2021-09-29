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
import TNews from '@/components/news'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'news',
  data: () => ({
    news: []
  }),
  components: {
    TNews
  },
  computed: {
    ...mapGetters({
      newsComputed: 'news/getNews'
    })
  },
  mounted () {
    this.getNews()
  },
  methods: {
    ...mapActions({
      getNews: 'news/GET_NEWS'
    })
  }
}
</script>

<style scoped>

</style>
