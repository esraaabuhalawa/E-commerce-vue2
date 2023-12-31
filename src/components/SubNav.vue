<template>
  <div>
    <nav class="navbar navbar-light bg-light py-3">
      <div class="container justify-content-center">
        <router-link tag="div" class="navbar-brand home" :to="{ name: 'home' }">
          <img
            src="../assets/images/logo/logo-regular-light.png"
            alt="Inssa Logo"
            class=""
          />
        </router-link>
      </div>
    </nav>
  </div>
</template>
<style scoped>
nav {
  border-bottom: 1px solid #ddd;
  background: #222;
}
img {
  width: auto;
  height: max-content;
}
.navbar-brand:hover{
  cursor: pointer;
}
</style>
