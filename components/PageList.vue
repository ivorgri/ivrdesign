<template>
  <div
    id="collection-list"
    data-cy="collection-list">
    <hr
      v-if="slug == 'blog' || slug == 'projects'"
      key="splitter"
    >
    <div
      v-if="collectionList.length <= 0"
      id="no-collection-list-items"
      key="no-collection-list-items"
      data-cy="no-collection-list-items">
      {{ page.listFallback }}
    </div>
    <div
      v-else-if="collectionList.length > 0 && slug == 'blog'"
      id="collection-list-items"
      key="collection-list-items"
      data-cy="collection-list-items">
      <nuxt-link
        v-for="listItem in collectionList"
        :to="`/${slug}/${listItem.slug_slug}`"
        :key="listItem.title"
        class="collection-item-link blog-post-link">
        <h2 class="blog-post-link-title">{{ listItem.title }}</h2>
        <span class="blog-post-link-create-date">{{ listItem.publishDate }}</span>
        <span class="blog-post-link-preview">{{ listItem.preview }}</span>
      </nuxt-link>
    </div>
    <div
      v-else-if="collectionList.length > 0 && slug == 'projects'"
      id="collection-list-items"
      key="collection-list-items"
      data-cy="collection-list-items">
      Project links needs to be implemented.
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      page: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      isOnline() {
        return this.$store.getters.isOnline;
      },
      slug() {
        const page = this.page;
        let slug = '';
        switch(page.associatedList) {
          case 'blogPosts':
            slug = 'blog';
            break;
          case 'projects':
            slug = 'projects';
            break;
          default:
            slug = '';
        }
        return slug;
      },
      collectionList() {
        const page = this.page;
        let collectionList = [];
        let collectionListSpecificEntries = [];
        collectionListSpecificEntries = page.projectList || page.blogPostList || [];
        const collectionListEntryIds = collectionListSpecificEntries.map(collectionListEntry => {
          return collectionListEntry._id;
        });
        switch(page.associatedList) {
          case 'blogPosts':
            const blogPosts = this.$store.getters.getBlogPosts;
            if (collectionListSpecificEntries.length > 0) {
              collectionListEntryIds.forEach(entryId => {
                collectionList.push(this.$store.getters.getBlogPostById(entryId));
              })
            } else {
              collectionList = blogPosts;
            }
            break;
          case 'projects':
            const projects = this.$store.getters.getProjects;
            if (collectionListSpecificEntries.length > 0) {
              collectionListEntryIds.forEach(entryId => {
                collectionList.push(this.$store.getters.getProjectById(entryId));
              })
            } else {
              collectionList = projects;
            }
            break;
          default:
            collectionList = [];
        }
        return collectionList;
      },
    },
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

  .collection-item-link {
    text-decoration: none;
    color: var(--text-color);
    margin: 3vw 0;
    padding: 0 1vw;
  }

  .blog-post-link {
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "title createdate"
      "preview preview";

    .blog-post-link-title {
      grid-area: title;
      margin: 0;
    }

    .blog-post-link-create-date {
      grid-area: createdate;
      justify-self: start;
      align-self: end;
    }

    .blog-post-link-title, .blog-post-link-create-date {
      border-bottom: 3px solid var(--background-color);
    }

    .blog-post-link-preview {
      grid-area: preview;
      border-left: 3px solid var(--background-color);
      padding-left: 1vw;
    }

    &:hover .blog-post-link-title, &:hover .blog-post-link-create-date {
      border-bottom: 3px solid var(--text-color);
    }

    &:hover .blog-post-link-preview {
      border-left: 3px solid var(--text-color);
    }
  }
</style>
