<template>
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
</template>

<script>
  export default {
    props: {
      defaultContent: {
        type: String,
        required: true,
        default: '',
      },
      offlineContent: {
        type: String,
      },
    },
    computed: {
      isOnline() {
        return this.$store.getters.isOnline;
      },
      offlineContentComputed() {
        return this.offlineContent || this.defaultContent;
      },
    },
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

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
