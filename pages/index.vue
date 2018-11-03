<template>
  <content
    :defaultContent="onlineContent"
    :offlineContent="offlineContent"
  />
</template>

<script>
  import Content from '~/components/Content.vue';

  export default {
    components: {
      Content,
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