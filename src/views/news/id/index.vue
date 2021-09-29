<template>
  <div class="info_news ma-6">
    <v-row>
      <h1 v-html="infoComputed.h1" />
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-carousel
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            cycle
            height="300"
        >
          <v-carousel-item
              v-for="(photo, i) in photos"
              :key="i"
          >
            <v-img
                contain
                :src="srcImg(photo.normal_photo)"
            ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col class="d-flex flex-column justify-start">
        <span class="subtitle-2 text-left">Дата публикации: {{publicDate}}</span>
        <span class="text-justify" v-html="fullText"></span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'id',
  data: () => ({
    info: {}
  }),
  mounted () {
    this.getInfoNews()
  },
  computed: {
    ...mapGetters({
      infoComputed: 'news/getInfoNews'
    }),
    photos () {
      return this.infoComputed.photos
    },
    fullText () {
      return this.infoComputed.full_text
    },
    publicDate () {
      return this.infoComputed.public_date
    }
  },
  methods: {
    ...mapActions({
      getInfoNews: 'news/GET_INFO_NEWS'
    }),
    srcImg (path) {
      return `https://shop.anyprinter.ru/${path}`
    }
  }
}
</script>

<style scoped>

</style>
