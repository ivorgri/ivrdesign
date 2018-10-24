<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header data-cy="header">
      <nuxt-link to ="/">
        <h1
          id="title"
          data-cy="site-title">
          IVR
          <div
            id="dot"
            :class="[ $store.getters.isOnline ? 'light-dot' : 'dark-dot' ]"/>
          DESIGN
        </h1>
      </nuxt-link>

    </header>
    <nuxt/>
    <footer data-cy="footer">
      <a
        id="mailto-link"
        :href="`mailto:${$store.getters.getContactDetails.email}`"
        data-cy="mailto-link">
        <font-awesome-icon
          id="contactme-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['far', 'envelope']"
          class="footer-logo"
          data-cy="mailto-icon"/>
      </a>
      <a
        id="github-link"
        :href="$store.getters.getContactDetails.githubRepo"
        target="_blank"
        data-cy="github-link">
        <font-awesome-icon
          id="github-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['fab', 'github']"
          class="footer-logo"
          data-cy="github-icon"/>
      </a>
      <a
        id="linkedin-link"
        :href="$store.getters.getContactDetails.linkedIn"
        target="_blank"
        data-cy="linkedin-link">
        <font-awesome-icon
          id="linkedin-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['fab', 'linkedin']"
          class="footer-logo"
          data-cy="linkedin-icon"/>
      </a>
    </footer>
  </div>
</template>
