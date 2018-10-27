<template>
  <section
    class="blog-container"
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
        v-else-if="$store.getters.getBlogPosts.length > 0"
        id="blog-posts"
        key="blog-posts"
        data-cy="blog-posts">
        <div
          v-for="blogPost in $store.getters.getBlogPosts"
          :key="blogPost.title">
          {{ blogPost.title }}
          {{ blogPost.title }}
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script>
  export default {
    computed: {
      page() {
        return this.$store.getters.getPageBySlug(this.$route.path);
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
    },
  }

</script>
