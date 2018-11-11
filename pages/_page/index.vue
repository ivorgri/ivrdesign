<template>
  <transition-group
    id="page"
    name="fade"
    mode="out-in">
    <PageContent
      key="content"
      :defaultContent="onlineContent"
      :offlineContent="offlineContent"
    />
    <PageList
      key="associatedList"
      :page="page"
    />
  </transition-group>
</template>

<script>
  import PageContent from '~/components/PageContent.vue';
  import PageList from '~/components/PageList.vue';

  export default {
    async asyncData({ params, error, payload, store }) {
      if (payload) return { page: payload }
      else return { page: store.getters.getPageBySlug(params.page) }
    },
    components: {
      PageContent,
      PageList,
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

<style lang="scss">
  @import "@/assets/css/variables.scss";

  #page {
    grid-area: content;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time/2;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>