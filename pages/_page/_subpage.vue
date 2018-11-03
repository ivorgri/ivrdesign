<template>
  <section
    class="blog-post"
    data-cy="blog-post">
    <transition
      name="fade">
      <div
        id="content"
        class="blog-content"
        data-cy="blog-content"
        v-html="blogPost.content"/>
    </transition>
  </section>
</template>

<script>
  export default {
    computed: {
      blogPost() {
        return this.$store.getters.getBlogPostBySlug(this.$route.params.subpage);
      },
    },
  }

</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

  .container {
    display: grid;
    grid-template-columns: 10vw 80vw 10vw;
    grid-template-rows: repeat(2,auto);
    grid-template-areas: ". content .";
  }

  .content {
    padding: 0 1vw;
  }

  .blog-container span {
    grid-area: content;
  }

  /*
  .blog-post-link {
    text-decoration: none;
    color: $light-main-color;
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "title createdate"
      "preview preview";
    padding: 0 1vw;

    .blog-post-link-title {
      grid-area: title;
      margin: 0;
      border-bottom: 3px solid $dark-main-color;
    }

    .blog-post-link-create-date {
      grid-area: createdate;
      justify-self: end;
    }

    .blog-post-link-preview {
      grid-area: preview;
      border-left: 3px solid $dark-main-color;
    }

    &:hover .blog-post-link-title {
      border-bottom: 3px solid $light-main-color;
    }

    &:hover .blog-post-link-preview {
      border-left: 3px solid $light-main-color;
    }
  } */

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time/2;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>