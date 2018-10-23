<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header>
      <h1 id="title">
        <nuxt-link to ="/">
          <span>IVR</span>
          <span
            id="dot"
            :class="[ $store.getters.isOnline ? 'light-dot' : 'dark-dot' ]">
            .
          </span><span>
            Design
          </span>
        </nuxt-link>
      </h1>
    </header>
    <nuxt/>
    <footer>
      <a :href="`mailto:${$store.getters.getContactDetails.email}`">
        <font-awesome-icon
          id="contactme-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['far', 'envelope']" />
      </a>
      <a
        id="github-link"
        :href="$store.getters.getContactDetails.githubRepo"
        target="_blank">
        <font-awesome-icon
          id="github-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['fab', 'github']" />
      </a>
      <a
        id="linkedin-link"
        :href="$store.getters.getContactDetails.linkedIn"
        target="_blank">
        <font-awesome-icon
          id="linkedin-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['fab', 'linkedin']" />
      </a>
    </footer>
  </div>
</template>
