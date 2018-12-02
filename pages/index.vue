<template>
  <PageContent
    :defaultContent="onlineContent"
    :offlineContent="offlineContent"
  />
</template>

<script>
  import PageContent from '~/components/PageContent.vue';

  export default {
    async asyncData({ params, error, payload, store }) {
      if (payload) return { page: payload }
      else return { page: store.getters.getPageBySlug('') }
    },
    components: {
      PageContent,
    },
    computed: {
      onlineContent() {
        return this.page.contentOnline;
      },
      offlineContent() {
        return this.page.contentOffline;
      },
    },
  }
</script>