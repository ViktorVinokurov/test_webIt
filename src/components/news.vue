<template>
  <v-card
      class="mx-5 my-6"
      :max-width="width"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="250"
        :src="imgSrc(news.normal_photo)"
        contain
    ></v-img>

    <v-card-title v-html="news.name"/>

    <v-card-text>
      <div class="text-left" v-html="news.short_text"/>
      <div class="text-right" v-html="news.public_date"></div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="goLink(news.id)"
      >
        Открыть
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'newsCard',
  props: {
    news: {
      type: Object,
      default: () => {}
    },
    width: {
      type: [String, Number],
      default: 374
    }
  },
  methods: {
    imgSrc (path) {
      return `https://shop.anyprinter.ru/${path}`
    },
    goLink (id) {
      this.$router.push(`/news/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
