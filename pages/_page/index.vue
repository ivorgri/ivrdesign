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
      :list="associatedList"
    />
  </transition-group>
</template>

<script>
  import PageContent from '~/components/PageContent.vue';
  import PageList from '~/components/PageList.vue';

  export default {
    components: {
      PageContent,
      PageList,
    },
    computed: {
      cleanSlug() {
        return this.$route.params.page;
      },
      page() {
        return this.$store.getters.getPageBySlug(this.cleanSlug);
      },
      onlineContent() {
        return this.page.contentOnline;
      },
      offlineContent() {
        return this.page.contentOffline;
      },
      associatedList() {
        return [];
        // return this.$store.getters.getBlogPosts;
      }
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