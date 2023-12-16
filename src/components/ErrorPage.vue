<template>
  <div class="container my-4">
    <div class="text-center">
      <p class="py-4">
        <span class="text-danger font-bold">404</span> <br />
        Page not Found
      </p>
      <button
        @click="goBack"
        class="btn btn-outline-danger py-2 px-5 blackbutton fs-6"
      >
        GO Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
div:nth-of-type(2) {
  padding: 3rem 0;
  button {
    border-radius: none !important;
  }
  p {
    font-size: 3rem;
  }
}
@media (min-width: 625px) {
  div:nth-of-type(2) {
    padding: 5rem 0;
    p {
      font-size: 5rem;
    }
  }
}
</style>
