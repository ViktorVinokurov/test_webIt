<template>
  <v-app-bar app
      color="primary"
      dark
  >
    <v-toolbar-title v-html="titlePage" />
    <v-spacer></v-spacer>
    <div class="ml-4">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        v-html="link.title"
        class="subtitle-1 link"
        active-class="link--active"
        exact
      ></router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'THeader',
  data: () => ({
    links: [
      {
        title: 'Главная',
        path: '/'
      },
      {
        title: 'Новости',
        path: '/news'
      }
    ]
  }),
  computed: {
    titlePage () {
      return this.$route?.meta?.title
    }
  }
}
</script>

<style scoped lang="scss">
.link {
  color: #fff;
  text-decoration: none;
  &:not(:first-child) {
    margin-left: 8px;
  }
  &--active {
    text-decoration: underline;
  }
}
</style>
