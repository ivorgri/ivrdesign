<template>
  <section class="container">
    <div
      id="content"
      v-html="$store.getters.getHomepage.contentOnline"/>
  </section>
</template>
