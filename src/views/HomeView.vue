<template>
  <div class="home">
    <header-item></header-item>
    <home-section></home-section>
    <section class="my-3 py-md-4 my-md-4">
      <div class="header-text text-center mb-4">
        <span>Check out our</span>
        <h3 class="mt-3">Best Sellers</h3>
      </div>
      <featured-products></featured-products>
    </section>
    <section id="centerized" class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <article>
            <div class="row mt-4 mt-md-1">
              <div class="col-12 col-md-6">
                <img
                  src="../assets/images/products/center.jpg"
                  alt="special perfume"
                  class="img-fluid"
                />
              </div>
              <div class="col-12 col-md-6 mt-3 mt-md-0">
                <img
                  src="../assets/images/products/center5.jpg"
                  alt="special offers"
                  class="img-fluid"
                />
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-12 text-center">
                <h3 class="">
                  the new fragrance that will surprise you every day
                </h3>
                <button class="blackbutton text-light px-4 my-3">
                  Discover
                </button>
              </div>
            </div>
          </article>
        </div>
        <div class="col-12 col-md-6">
          <img
            src="../assets/images/products/center3.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </section>
    <section id="offer" class="my-4 container-fluid">
      <div>
        <router-link to="/discount"
          ><img
            src="../assets/images/products/blackf.jpg"
            alt=""
            class="img-fluid h-50"
        /></router-link>
        <router-view></router-view>
      </div>
    </section>

    <section class="container">
      <div class="header-text text-center mb-4">
        <span>New perfumes</span>
        <h3 class="pt-3 pb-4">Shop by Category</h3>
      </div>
      <hr />
      <div class="row">
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="position-relative card">
            <router-link to="/products/product-category/exclusive">
              <img
                src="../assets/images/products/women.jpg"
                alt="exclusive"
                class="img-fluid"
              />
            </router-link>
            <div class="category position-absolute text-center mx-auto">
              <h5 class="text-uppercase">Exclusive</h5>
              <p class="text-uppercase text-muted">{{ exclusive }} Products</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="position-relative card">
            <router-link to="/products/product-category/women">
              <img
                src="../assets/images/products/perfume.jpg"
                alt="women"
                class="img-fluid"
              />
            </router-link>
            <div class="category position-absolute text-center mx-auto">
              <h5 class="text-uppercase">women</h5>
              <p class="text-uppercase text-muted">{{ women }} Products</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="position-relative card">
            <router-link to="/products/product-category/men">
              <img
                src="../assets/images/products/men1.jpg"
                alt="men"
                class="img-fluid"
              />
            </router-link>
            <div class="category position-absolute text-center mx-auto">
              <h5 class="text-uppercase">men</h5>
              <p class="text-uppercase text-muted">{{ men }} Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderItem from "@/components/HeaderItem.vue";
import HomeSection from "@/components/HomeSection.vue";
import FeaturedProducts from "@/components/FeaturedProducts.vue";
export default {
  name: "HomeView",

  components: {
    "header-item": HeaderItem,
    "home-section": HomeSection,
    "featured-products": FeaturedProducts,
  },
  computed: {
    exclusive() {
      return this.$store.getters.exclusiveProducts.length;
    },
    women() {
      return this.$store.getters.womenProducts.length;
    },
    men() {
      return this.$store.getters.menProducts.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.header-text {
  vertical-align: middle;
  margin-top: 3rem;
  color: #000;
}

span {
  font-size: 1.2rem;
}

.header-text h3 {
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
}

h3,
span {
  font-family: serif;
  letter-spacing: 4px;
}

/**Start of third section */
#centerized {
  h3 {
    width: auto;
    margin: 10px auto;
    letter-spacing: 0;
    font-size: 2rem;
    font-weight: 300;
  }
}

hr {
  width: 10%;
  margin: 2rem auto;
  background: #000;
  opacity: 1;
}

/**start of offer */
section:nth-of-type(4) {
  img {
    height: 50%;
  }
}

/**Section 5 categories */
section:nth-of-type(5) {
  margin-top: 2rem;
  margin-bottom: 3rem;

  .category {
    bottom: 8%;
    width: 94%;
    right: 3%;
    left: 3%;
    background: rgba(255, 255, 255, 0.9);
    font-family: serif;
    padding: 10px 0;

    h5,
    p {
      padding: 0;
      margin: 0;
    }

    h5 {
      font-size: 1rem;
      color: #000;
    }

    p {
      font-size: 0.7rem;
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    #centerized h3 {
      width: 100%;
    }
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  @media (min-width: 1024px) {
    #centerized h3 {
      width: 80%;
      font-size: 2.1rem;
    }
  }
  .card:hover {
    cursor: pointer;

    .category {
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
