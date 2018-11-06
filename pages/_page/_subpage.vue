<template>
  <PageContent
    :defaultContent="blogPost.content"
  />
</template>

<script>
  import PageContent from '~/components/PageContent.vue';

  export default {
    components: {
      PageContent,
    },
    computed: {
      blogPost() {
        return this.$store.getters.getBlogPostBySlug(this.$route.params.subpage);
      },
    },
  }
</script>