<template>
  <div id="list">
    <hr key="splitter">
    <div
      v-if="list.length <= 0"
      id="no-blog-posts"
      key="no-blog-posts"
      data-cy="no-blog-posts">
      {{ page.listFallback }}
    </div>
    <div
      v-else-if="list.length > 0"
      id="blog-posts"
      key="blog-posts"
      data-cy="blog-posts">
      <nuxt-link
        v-for="listItem in list"
        :to="`/blog/${listItem.slug_slug}`"
        :key="listItem.title"
        class="blog-post-link">
        <h2 class="blog-post-link-title">{{ listItem.title }}</h2>
        <span class="blog-post-link-create-date">{{ listItem._created | formatDate }}</span>
        <span class="blog-post-link-preview">{{ listItem.preview }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      },
      page: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      isOnline() {
        return this.$store.getters.isOnline;
      },
    },
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

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
  }
</style>
