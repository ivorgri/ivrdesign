<template>
  <div
    id="collection-list"
    data-cy="collection-list">
    <hr key="splitter">
    <div
      v-if="collectionList.length <= 0"
      id="no-collection-list-items"
      key="no-collection-list-items"
      data-cy="no-collection-list-items">
      {{ page.listFallback }}
    </div>
    <div
      v-else-if="collectionList.length > 0"
      id="collection-list-items"
      key="collection-list-items"
      data-cy="collection-list-items">
        Content from collection list should be put here.
      <!--<nuxt-link
        v-for="listItem in collectionList"
        :to="`/blog/${listItem.slug_slug}`"
        :key="listItem.title"
        class="blog-post-link">
        <h2 class="blog-post-link-title">{{ listItem.title }}</h2>
        <span class="blog-post-link-create-date">{{ listItem._created | formatDate }}</span>
        <span class="blog-post-link-preview">{{ listItem.preview }}</span>
      </nuxt-link>-->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      collectionList: {
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

  .collection-item-link {
    text-decoration: none;
    color: $light-main-color;
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "title createdate"
      "preview preview";
    padding: 0 1vw;

    .collection-item-link-title {
      grid-area: title;
      margin: 0;
      border-bottom: 3px solid $dark-main-color;
    }

    .collection-item-link-create-date {
      grid-area: createdate;
      justify-self: end;
    }

    .collection-item-link-preview {
      grid-area: preview;
      border-left: 3px solid $dark-main-color;
    }

    &:hover .collection-item-link-title {
      border-bottom: 3px solid $light-main-color;
    }

    &:hover .collection-item-link-preview {
      border-left: 3px solid $light-main-color;
    }
  }
</style>
