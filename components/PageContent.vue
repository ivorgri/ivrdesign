<template>
  <transition
    name="fade"
    mode="out-in">
    <div
      id="content"
      key="content"
      class="content"
      data-cy="content"
      v-html="content"/>
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
        default: ''
      },
    },
    computed: {
      isOnline() {
        return this.$store.getters.isOnline;
      },
      content() {
        if(this.isOnline) {
          return this.defaultContent;
        } else if (!this.isOnline && !this.offlineContent) {
          return this.defaultContent;
        } else if (!this.isOnline && this.offlineContent) {
          return this.offlineContent;
        } else {
          return this.defaultContent;
        }
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
