<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header data-cy="header">
      <nuxt-link
        id="title-link"
        to ="/" >
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
    <section
      class="container"
      data-cy="container">
      <nuxt/>
    </section>
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

<style lang="scss">
  @import "@/assets/css/variables.scss";

  /* :root {
    --light-main-color: white;
    --light-background-color: black;
  } */

  html {
    font-family: 'Raleway', sans-serif;
    width: 100vw;
    overflow: hidden;
  }

  body, #__nuxt, #__layout, #portfolio {
    height: 100vh;
    min-height: 100vh;
    margin: 0;
    font-size: calc(16px + 1vw);
    /* line-height: calc(1.1em + 0.5vw); */
  }

  h1 {
    font-size: calc(1.2em + 3vw);
    margin: 0;
  }

  #portfolio {
    overflow-y: auto;
  }

  #title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #title-link {
    text-decoration: none;
    color: inherit;
  }

  .dark {
    color: $dark-main-color;
    background-color: $dark-background-color;
    transition: $transition-time;
  }

  .light {
    color: $light-main-color;
    background-color: $light-background-color;
    transition: $transition-time;
  }

  #dot {
    width: calc(8px + 0.7vw);
    height: calc(8px + 0.7vw);
    margin: 0 1vw;
  }

  .light-dot {
    background-color: $logo-green-color;
    transition: $transition-time;
  }

  .dark-dot {
    background-color: $logo-red-color;
    transition: $transition-time;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5vh 0;
  }

  footer > * {
    margin: 0 2vw;
  }

  #github-link {
    display: flex;
  }

  .footer-logo {
    width: calc(16px + 2vw);
    height: calc(16px + 2vw);

    &:hover {
      width: calc(16px + 2.3vw);
      height: calc(16px + 2.3vw);
    }
  }

  .light-logo {
    color: $light-main-color;
    transition: $transition-time;
  }

  .dark-logo {
    color: $dark-main-color;
    transition: $transition-time;
  }
</style>
