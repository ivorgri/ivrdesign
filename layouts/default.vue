<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header>
      <nuxt-link to ="/">
        <h1 id="title">
          <span>IVR</span>
          <span
            id="dot"
            :class="[ $store.getters.isOnline ? 'light-dot' : 'dark-dot' ]">
            .
          </span><span>
            Design
          </span>
        </h1>
      </nuxt-link>
    </header>
    <nuxt/>
  </div>
</template>
