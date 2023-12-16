<template>
  <header>
    <div class="container">
      <div class="col-lg-5">
        <div class="header-text">
          <span class="">Member’s days</span>
          <h1 class="mt-3 mb-4">Your exclusive sitewide offer awaits</h1>
          <router-link
            tag="button"
            :to="'/products/product-category/shop'"
            class="text-uppercase"
            >Shop Now</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/images/header/bg5.jpg"),
    -webkit-linear-gradient(271deg, #f4c89bb3, transparent);
  background: url("../assets/images/header/bg5.jpg"),
    linear-gradient(179deg, #f4c89bb3, transparent);
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-position: left;
  background-size: cover;
  height: 90vh;
  color: #190603;

  .header-text {
    display: table-cell;
    vertical-align: middle;
    height: 90vh;
  }
  h1,
  span {
    font-family: serif;
    -webkit-transform: scaleY(1.01);
    transform: scaleY(1.01);
  }
  span {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 100;
    color: #000;
  }
  button {
    background: #000;
    padding: 10px 20px;
    font-size: 1.1rem;
    color: #fff;
    font-family: var(--poppins);
    border: 1px solid #33100a;
    margin-top: 1rem;
    box-shadow: 1px 1px 3px #190603;
  }
  button:hover {
    cursor: pointer;
  }
}
@media (min-width: 768px) {
  header {
    background-position: 128px;
    h1 {
      font-size: 4.1rem;
      width: 70%;
    }
  }
}
@media (min-width: 1023px) {
  header {
    h1 {
      width: 100%;
    }
  }
}
@media (min-width: 1040px) {
  header {
    background-position: 200px center;
    h1 {
      font-size: 5rem;
      -webkit-transform: scaleY(1.1);
      transform: scaleY(1.1);
      margin-top: 2rem !important;
    }
  }
}
</style>
