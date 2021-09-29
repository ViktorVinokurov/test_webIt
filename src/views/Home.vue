<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
          v-for="(item, i) in imagesComputed"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
      >
        <v-img
            contain
            :src="imgSrc(item.big_photo)"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
    <div class="news">
      <t-news
          v-for="(news, index) in newsComputed"
          :key="index"
          :news="news"
      ></t-news>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TNews from '@/components/news'
export default {
  name: 'Home',
  components: {
    TNews
  },
  data: () => ({
    images: [],
    news: []
  }),
  computed: {
    imagesComputed: {
      get () {
        return this.images
      },
      set (v) {
        this.images = v
      }
    },
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
    this.getImg()
    this.getNews()
  },
  methods: {
    async getImg () {
      const response = await axios.get('https://shop.anyprinter.ru/api/slider')
      if (response.status) {
        this.imagesComputed = response.data
      }
    },
    async getNews () {
      const response = await axios.get('https://shop.anyprinter.ru/api/news?limit=5')
      if (response.status) {
        this.newsComputed = response.data
      }
    },
    imgSrc (path) {
      return `https://shop.anyprinter.ru/${path}`
    }
  }
}
</script>
<style scoped lang="scss">
.news {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &-block {
    width: 200px;
    height: 300px;
  }
}
</style>
