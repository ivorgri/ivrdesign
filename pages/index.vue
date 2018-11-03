<template>
  <PageContent
    :defaultContent="onlineContent"
    :offlineContent="offlineContent"
  />
</template>

<script>
  import PageContent from '~/components/PageContent.vue';

  export default {
    components: {
      PageContent,
    },
    computed: {
      onlineContent() {
        return this.$store.getters.getPageBySlug('').contentOnline;
      },
      offlineContent() {
        return this.$store.getters.getPageBySlug('').contentOffline;
      },
    },
  }
</script>