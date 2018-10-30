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
        return this.$store.getters.getPageBySlug('').contentOnline;
      },
      offlineContent() {
        return this.$store.getters.getPageBySlug('').contentOffline;
      },
    },
  }
</script>
