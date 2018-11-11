<template>
  <PageContent
    :defaultContent="blogPost.content"
  />
</template>

<script>
  import PageContent from '~/components/PageContent.vue';

  export default {
    async asyncData({ params, error, payload, store }) {
      if (payload) return { blogPost: payload }
      else return { blogPost: store.getters.getBlogPostBySlug(params.subpage) }
    },
    components: {
      PageContent,
    },
  }
</script>