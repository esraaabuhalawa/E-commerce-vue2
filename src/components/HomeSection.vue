<template>
  <section class="container my-3">
    <article class="row mt-3 align-items-center">
      <div class="col-12 col-md-6 my-4 my-lg-0">
        <div class="position-relative">
          <img
            src="../assets/images/products/perfume-002.jpg"
            alt="purfume 4"
            class="first-image small-image"
          />

          <img
            src="../assets/images/header/bg-03.jpg"
            alt=""
            class="img-fluid big-image"
          />
        </div>
        <div></div>
      </div>

      <div class="col-12 col-md-6 my-4 my-lg-0">
        <div class="header-text text-end py-5 py-md-0">
          <span class="d-block">Our original perfume</span>
          <h2 class="mt-3 mb-4">The <br />new <br />fragrance</h2>
          <p class="ms-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, tempora. amet consectetur adipisicing elit.
            Perferendis, tempora
          </p>
          <button class="text-uppercase blackbutton text-light px-3">
            Shop Now
          </button>
        </div>
        <div></div>
      </div>
    </article>
    <article class="row align-items-center second">
      <div class="col-12 col-md-6 order-2 order-md-1 my-4 my-lg-0">
        <div class="py-5 py-md-0 header-text">
          <span class="d-block">eau de toilette</span>
          <h2 class="mt-3 mb-4">
            instinctive<br />
            and <br />
            electric <br />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, tempora. amet consectetur adipisicing elit.
            Perferendis, tempora
          </p>
          <button class="text-uppercase blackbutton text-light px-3">
            Shop Now
          </button>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-3 order-1 order-md-2 my-4 my-lg-0">
        <div class="header-text position-relative">
          <img
            src="../assets/images/products/perfume-003.jpg"
            alt="purfume 4"
            class="small-image second-image"
          />

          <img
            src="../assets/images/header/bg-04.jpg"
            alt=""
            class="img-fluid big-image1"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  .second {
    margin-top: -3rem;
  }
  .header-text {
    vertical-align: middle;
    margin-top: 3rem;
    color: #333;
  }
  h2 {
    font-size: 2.5rem;
  }
  h2,
  span {
    font-family: serif;
    letter-spacing: 4px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: var(--second-color);
    width: 100%;
    margin-bottom: 3rem;
  }
  span {
    font-size: 1.3rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 100;

    @media (min-width: 768px) {
      font-size: 5rem;
    }
  }
  button:hover {
    background: var(--primary-color);
    cursor: pointer;
  }
}
/**OverLap Images for small screen */
.big-image {
  -webkit-transform: translateY(25%);
  transform: translateY(25%);
}
.big-image1 {
  -webkit-transform: translateY(25%);
  transform: translateY(25%);
}
.small-image {
  width: 40%;
  position: absolute;
  z-index: 100;
}
.first-image {
  right: 10%;
}
.second-image {
  left: 10%;
}
/**********Media Queries ********/
@media (min-width: 768px) {
  section {
    p {
      width: 85%;
    }
  }
  .big-image {
    -webkit-transform: translateX(15%);
    transform: translateX(15%);
    width: 90%;
  }
  .big-image1 {
    -webkit-transform: translateX(-4%);
    transform: translateX(-4%);
    width: 90%;
  }
  .small-image {
    width: 35%;
    position: absolute;
    z-index: 100;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .first-image {
    left: 0;
  }
  .second-image {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1024px) {
  section {
    h2 {
      font-size: 3.5rem;
    }
    p {
      width: 75%;
    }
  }
  .big-image {
    -webkit-transform: translateX(18%);
    transform: translateX(18%);
    width: 85%;
  }
  .big-image1 {
    -webkit-transform: translateX(-5%);
    transform: translateX(-5%);
    width: 85%;
  }
}
</style>
