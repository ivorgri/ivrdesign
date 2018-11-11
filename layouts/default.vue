<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header data-cy="header">
      <h1
        id="title"
        data-cy="site-title">
        <nuxt-link
          id="title-link"
          to ="/" >
          <span>IVR</span>
          <div
            id="dot"
            :class="[ $store.getters.isOnline ? 'light-dot' : 'dark-dot' ]"/>
          <span>DESIGN</span>
        </nuxt-link>
      </h1>
    </header>
    <nav>
      <input type="checkbox">
      <div id="hamburger">
        <span class="hamburger-line"/>
        <span class="hamburger-line"/>
        <span class="hamburger-line"/>
      </div>
      <div id="menu">
        <nuxt-link
          v-for="navItem in $store.getters.getNavItems"
          :key="navItem._id"
          :to="`/${navItem.slug_slug}`"
          class="nav-item">
          <span>{{ navItem.pageTitle }}</span>
        </nuxt-link>
      </div>
    </nav>
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

  :root {
    // --light-main-color: white;
    // --light-background-color: black;
    --text-color: darkslategray;
    --background-color: white;
    --logo: var(--text-color);
    --dot-color: green;
  }

  html {
    font-family: 'Raleway', sans-serif;
    width: 100vw;
    overflow: hidden;
    color: var(--text-color);
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
    overflow-x: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto repeat(2, 1fr);
    grid-template-areas: "title nav"
      "content content"
      "footer footer";
  }

  header {
    grid-area: title;

    #title {
      border-bottom: 3px solid var(--background-color);
      border-right: 3px solid var(--background-color);
      padding-right: 15px;

      &:hover {
        border-bottom: 3px solid var(--text-color);
        border-right: 3px solid var(--text-color);
      }
    }

    #title-link {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      color: inherit;
    }
  }

  /*
  ** Hamburger menu based on:
  ** https://codepen.io/erikterwan/pen/EVzeRP
  */
  nav {
    grid-column: 2 / span 1;
    grid-row: 1 / span 3;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 72px auto;
    grid-template-areas: "hamburger"
      "menu";

    input {
      grid-area: hamburger;
      margin: 20px 40px 20px 20px;
      justify-self: end;
      align-self: center;
      width: 40px;
      height: 32px;

      cursor: pointer;

      opacity: 0;
      z-index: 2;

      -webkit-touch-callout: none;

      &:checked ~ #hamburger .hamburger-line
      {
        opacity: 1;
        background: var(--text-color);
      }

      &:checked ~ #hamburger .hamburger-line:nth-child(1)
      {
        transform: translate(5px, 0px) rotate(45deg);
      }

      &:checked ~ #hamburger .hamburger-line:nth-child(2)
      {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &:checked ~ #hamburger .hamburger-line:nth-child(3)
      {
        transform: rotate(-45deg) translate(1px, 1px);
      }

      &:checked ~ #menu {
        transform: none;
      }
    }

    #hamburger {
      grid-area: hamburger;
      margin: 20px 40px 20px 20px;
      display: flex;
      flex-direction: column;
      justify-self: end;
      align-self: center;

      z-index: 1;
    }

    .hamburger-line {
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: var(--text-color);
      border-radius: 3px;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        opacity 0.55s ease;
    }

    #menu {
      grid-row: 1 / span 2;
      grid-column: 1;
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: calc(1.7em + 0.5vw);
      padding-top: 72px;
      transform: translate(100vw, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    .nav-item {
      align-self:end;
      justify-self: end;
      text-decoration: none;
      color: inherit;
      border-bottom: 3px solid var(--background-color);
      border-left: 3px solid var(--background-color);
      margin-right: 5px;
      padding-left: 5px;
      padding-right: 20px;
      font-size: calc(1.2em + 0.5vw);

      &:hover {
        border-bottom: 3px solid var(--text-color);
        border-left: 3px solid var(--text-color);
      }
    }
  }

  /* .dark {
    color: $dark-main-color;
    background-color: $dark-background-color;
    transition: $transition-time;
  }

  .light {
    color: $light-main-color;
    background-color: $light-background-color;
    transition: $transition-time;
  } */

  #dot {
    width: calc(8px + 0.7vw);
    height: calc(8px + 0.7vw);
    margin: 0 1vw;
    background-color: var(--dot-color);
    transition: $transition-time;
  }

  /*.light-dot {
    background-color: $logo-green-color;
    transition: $transition-time;
  }

  .dark-dot {
    background-color: $logo-red-color;
    transition: $transition-time;
  }*/

  .container {
    grid-area: content;
    display: grid;
    grid-template-columns: minmax(0,10vw) minmax($breakpoint, 80vw) minmax(0,10vw);
    grid-template-areas: ". content .";
  }

  @media screen and (max-width: $breakpoint) {
    .container {
      display: grid;
      grid-template-columns: 100vw;
      grid-template-areas: "content";
    }
  }

  footer {
    grid-area: footer;
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
    color: var(--text-color);
    transition: $transition-time;

    &:hover {
      width: calc(16px + 2.3vw);
      height: calc(16px + 2.3vw);
    }
  }

  /* .light-logo {
    color: $light-main-color;
    transition: $transition-time;
  }

  .dark-logo {
    color: $dark-main-color;
    transition: $transition-time;
  } */
</style>
