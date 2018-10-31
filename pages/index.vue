<template>
  <section
    class="container"
    data-cy="container">
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="isOnline"
        id="online-content"
        key="online-content"
        class="content"
        data-cy="content"
        v-html="onlineContent"/>
      <div
        v-else-if="!isOnline && !offlineContent"
        id="online-offline-content"
        key="online-offline-content"
        class="content"
        data-cy="content"
        v-html="onlineContent"/>
      <div
        v-else-if="!isOnline && offlineContent"
        id="offline-content"
        key="offline-content"
        class="content"
        data-cy="content"
        v-html="offlineContent"/>
      <div
        v-else
        id="fallback-content"
        key="fallback-content"
        class="content"
        data-cy="content"
        v-html="onlineContent"/>
    </transition>
  </section>
</template>

<script>
  export default {
    computed: {
      isOnline() {
        return this.$store.getters.isOnline;
      },
      onlineContent() {
        // console.log(this.$store.getters.getPageBySlug('').contentOnline);
        return this.$store.getters.getPageBySlug('').contentOnline;
      },
      offlineContent() {
        return this.$store.getters.getPageBySlug('').contentOffline;
      },
    },
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

  .container {
    display: grid;
    grid-template-columns: 10vw 80vw 10vw;
    grid-template-areas: ". content .";
  }

  .content {
    grid-area: content;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time/2;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
