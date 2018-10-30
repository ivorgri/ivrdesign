<template>
  <section
    :class="containerClass"
    class="container"
    data-cy="container">
    <transition-group
      name="fade"
      mode="out-in">
      <div
        v-if="isOnline"
        id="online-content"
        key="online-content"
        class="blog-content"
        data-cy="content"
        v-html="onlineContent"/>
      <div
        v-else-if="!isOnline && !offlineContent"
        id="online-offline-content"
        key="online-offline-content"
        class="blog-content"
        data-cy="content"
        v-html="onlineContent"/>
      <div
        v-else-if="!isOnline && offlineContent"
        id="offline-content"
        key="offline-content"
        class="blog-content"
        data-cy="content"
        v-html="offlineContent"/>
      <div
        v-else
        id="fallback-content"
        key="fallback-content"
        class="blog-content"
        data-cy="content"
        v-html="onlineContent"/>
      <hr key="splitter">
      <div
        v-if="$store.getters.getBlogPosts.length <= 0"
        id="no-blog-posts"
        key="no-blog-posts"
        data-cy="no-blog-posts">
        {{ page.listFallback }}
      </div>
      <div
        v-else-if="blogPosts.length > 0"
        id="blog-posts"
        key="blog-posts"
        data-cy="blog-posts">
        <nuxt-link
          v-for="blogPost in blogPosts"
          :to="blogPost.slug_slug"
          :key="blogPost.title"
          class="blog-post-link">
          <h2 class="blog-post-link-title">{{ blogPost.title }}</h2>
          <span class="blog-post-link-create-date">{{ blogPost._created | formatDate }}</span>
          <span class="blog-post-link-preview">{{ blogPost.preview }}</span>
        </nuxt-link>
      </div>
    </transition-group>
  </section>
</template>

<script>
  export default {
    computed: {
      cleanSlug() {
        return this.$route.path.replace('/','');
      },
      containerClass() {
        return `${this.cleanSlug}-container`;
      },
      page() {
        return this.$store.getters.getPageBySlug(this.cleanSlug);
      },
      isOnline() {
        return this.$store.getters.isOnline;
      },
      onlineContent() {
        return this.page.contentOnline;
      },
      offlineContent() {
        return this.page.contentOffline;
      },
      blogPosts() {
        return this.$store.getters.getBlogPosts;
      }
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

  .blog-container span {
    grid-area: content;
  }

  .blog-post-link {
    text-decoration: none;
    color: $light-main-color;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "title createdate"
      "preview preview";

    .blog-post-link-title {
      grid-area: title;
      margin: 0;
    }

    .blog-post-link-create-date {
      grid-area: createdate;
      justify-self: end;
    }

    .blog-post-link-preview {
      grid-area: preview;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time/2;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>