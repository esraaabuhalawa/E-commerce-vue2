<template>
  <div id="app">
    <nav-item></nav-item>

    <router-view />
    <footer-item></footer-item>
  </div>
</template>

<script>
import FooterItem from "@/components/FooterItem.vue";
import NavbarItem from "@/components/NavbarItem.vue";

export default {
  components: {
    "nav-item": NavbarItem,
    "footer-item": FooterItem,
  },
  beforeMount() {
    this.$store.commit("initialiseVar");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  overflow-y: scroll !important;
  padding-right: 0 !important;
  margin: 0 !important;
  font-size: 16px;
}
</style>
