<template>
  <div
    id="portfolio"
    :class="[ $store.getters.isOnline ? 'light' : 'dark' ]">
    <header data-cy="header">
      <button
        id="title-link"
        to ="/"
        @click="showMenu = !showMenu">
        <span
          id="ivr">
          IVR
        </span>
        <svg
          id="dot">
          <circle
            class="dot-circle"
            cx="50%"
            cy="50%"
            r="50%"/>
        </svg>
        <span
          id="dsgn">
          DESIGN
        </span>
      </button>
    </header>
    <nav
      id="menu">
      <div
        v-for="navItem in $store.getters.getNavItems"
        :key="navItem._id"
        class="nav-item">
        <svg class="menu-dot">
          <circle
            class="dot-circle"
            cx="50%"
            cy="50%"
            r="50%"/>
        </svg>
        <nuxt-link
          :to="`/${navItem.slug_slug}`"
          :class="{'show-nav-item-link': showMenu, 'hide-nav-item-link': !showMenu}"
          class="nav-item-link">
          {{ navItem.pageTitle }}
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

<script>
  export default {
    data: () => {
      return {
        showMenu: false,
      }
    },
  };
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

  :root {
    --text-color: darkslategray;
    --background-color: white;
    --logo: var(--text-color);
    --dot-color-rgb: 0,128,0;
    --dot-color: rgba(var(--dot-color-rgb));
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
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto) repeat(2, 1fr);
    grid-template-areas: "title"
      "menu"
      "content"
      "footer";
  }

  .dot-circle {
    fill: var(--dot-color);
  }

  header {
    grid-area: title;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". titlelink .";

    & #title-link {
      grid-area: titlelink;
      display: flex;
      color: var(--text-color);
      padding: 0;
      border: none;
      font: inherit;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }

      & span {
        border-bottom: 3px solid var(--background-color);
        font-size: calc(1.2em + 3vw);
      }

      &:hover span {
        border-bottom: 3px solid var(--text-color);
      }

      & #dot {
        grid-area: dot;
        align-self: center;
        justify-self: center;

        height: calc(10px + 0.7vw);
        width: calc(10px + 0.7vw);
        margin: 0 0.5vw;
        z-index: 5;
      }
    }
  }

  nav {
    grid-area: menu;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 0;

    .nav-item {
      display: flex;
      align-items: center;

      & .menu-dot {
        height: calc(8px + 0.5vw);
        width: calc(8px + 0.5vw);
        margin: 10px;
      }

      & .nav-item-link {
        text-decoration: none;
        color: var(--text-color);
      }

      & .show-nav-item-link {
        font-size: calc(16px + 1.2vw);
        transition: font-size $transition-time;
      }

      & .hide-nav-item-link {
        font-size: 0;
        transition: font-size $transition-time;
      }
    }

    .nav-item:hover {
      text-decoration: underline;
    }
  }

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
</style>
