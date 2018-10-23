<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header>
      <!--<h1 id="title">
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
      </h1>-->

      <nuxt-link to ="/">
        <h1 id="title">
          IVR
          <div
            id="dot"
            :class="[ $store.getters.isOnline ? 'light-dot' : 'dark-dot' ]"/>
          DESIGN
        </h1>
      </nuxt-link>

    </header>
    <nuxt/>
    <footer>
      <a :href="`mailto:${$store.getters.getContactDetails.email}`">
        <font-awesome-icon
          id="contactme-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['far', 'envelope']"
          class="footer-logo" />
      </a>
      <a
        id="github-link"
        :href="$store.getters.getContactDetails.githubRepo"
        target="_blank">
        <font-awesome-icon
          id="github-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['fab', 'github']"
          class="footer-logo" />
      </a>
      <a
        id="linkedin-link"
        :href="$store.getters.getContactDetails.linkedIn"
        target="_blank">
        <font-awesome-icon
          id="linkedin-logo"
          :class="[ $store.getters.isOnline ? 'light-logo' : 'dark-logo' ]"
          :icon="['fab', 'linkedin']"
          class="footer-logo" />
      </a>
    </footer>
  </div>
</template>
