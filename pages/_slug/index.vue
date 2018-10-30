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
