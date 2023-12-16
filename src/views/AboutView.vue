<template>
  <div class="about">
    <header>
      <div class="container">
        <div class="header-text">
          <h6>A few words</h6>
          <h2>About us</h2>
        </div>
      </div>
    </header>
    <article class="container p-lg-5 history">
      <about-slot>
        <h6 slot="spantext">who we are</h6>
        <h3 slot="heading" class="pb-3 pt-2">
          we are the NY’s largest specialist fragrance retailer with 20 stores
          across the UsA & Europe.
        </h3>
        <p slot="paragraph">
          Nunc vulputate feugiat tortor ac congue. Nam sit amet urna vitae
          ligula pellentesque porttitor ut id nisl. Nam laoreet velit ipsum.
          Suspendisse ullamcorper, odio id faucibus consectetur, elit quam
          cursus est, nec sagittis purus enim a eros. Sed posuere nec lacus sit
          amet ullamcorper. Donec ut egestas purus. Duis placerat turpis non
          urna convallis convallis vitae nec odio. Vestibulum quam turpis,
          blandit vel fermentum sed, pulvinar in risus. Etiam a mauris sed nunc
          venenatis vulputate vitae quis tortor. Curabitur gravida accumsan
          elementum. Praesent ut hendrerit dui, vitae elementum mi.
        </p>
      </about-slot>
    </article>
    <section class="container my-4 py-5">
      <img
        src="../assets/images/about/bg-14.jpg"
        class="img-fluid w-100 px-lg-4"
      />
    </section>
    <article class="container p-lg-5 history">
      <h6>Old friends</h6>
      <h3 class="pb-3 pt-2">here with you for over 15 years</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultrices posuere magna, et cursus metus scelerisque congue. Maecenas
        lorem enim, pharetra sed imperdiet eu, bibendum id nibh. In hac
        habitasse platea dictumst. Donec mattis molestie arcu vitae tempus. In
        hac habitasse platea dictumst. Ut mattis mauris vitae justo accumsan
        dignissim.
      </p>
      <p>
        Ut egestas quam sit amet magna sollicitudin iaculis. In sit amet libero
        vel mauris bibendum faucibus ac non diam. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Proin id ante pulvinar risus convallis
        consectetur et sit amet erat. Aliquam et sapien rhoncus, vulputate urna
        non, egestas elit. In lacus ante, imperdiet eget justo ut, sodales
        sollicitudin turpis. Donec egestas mauris vel enim facilisis, nec dictum
        mi consectetur. Suspendisse ac ullamcorper felis. Nulla id libero id
        justo lacinia consectetur sit amet ac libero. Maecenas cursus placerat
        auctor. Integer condimentum elit ut feugiat ornare. Maecenas leo ipsum,
        pharetra sed ornare id, mattis vel nisi. Nam dui nunc, gravida sed
        tortor non, tempus pretium lectus.
      </p>
    </article>
    <section class="my-5 w-100"></section>

    <section class="container my-3 history">
      <div class="row mt-3 align-items-center">
        <div class="col-12 col-lg-6 order-2 order-lg-1 my-md-4">
          <div class="">
            <img
              src="../assets/images/about/9.jpg"
              alt=""
              class="img-fluid w-100"
            />
          </div>
          <div></div>
        </div>

        <div class="col-12 col-lg-6 order-1 order-lg-2 my-4">
          <div class="header-text text-center px-4">
            <h6 class="d-block">Sine 1995</h6>
            <h3 class="pt-1 pb-2">History</h3>
            <p class="mx-auto mission">
              Donec dapibus ullamcorper magna quis posuere. Aenean tincidunt
              posuere tellus nec dapibus. Aliquam pharetra egestas tellus. Nulla
              sed quam ante. Curabitur porta pharetra nunc, in maximus ex
              ultricies a. Donec nibh turpis, eleifend ut tristique ut, aliquam
              eu urna. Fusce eget ante tellus. Vestibulum.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 text-center px-4 my-4">
          <div class="mt-lg-5">
            <h6>we are visionaries</h6>
            <h3 class="pt-1 pb-2">Mission</h3>
            <p class="mx-auto mission">
              Donec dapibus ullamcorper magna quis posuere. Aenean tincidunt
              posuere tellus nec dapibus. Aliquam pharetra egestas tellus. Nulla
              sed quam ante. Curabitur porta pharetra nunc, in maximus ex
              ultricies a. Donec nibh turpis, eleifend ut tristique ut, aliquam
              eu urna. Fusce eget ante tellus. Vestibulum.
            </p>
          </div>
          <div></div>
        </div>
        <div class="col-12 col-lg-6 mb-3 my-4">
          <div class="header-text">
            <img
              src="../assets/images/about/8.jpg"
              alt=""
              class="img-fluid w-100"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutSlot from "@/components/Slots/AboutSlot.vue";

export default {
  components: { "about-slot": AboutSlot },
};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/images/header/top-view-expensive-perfume-elegant-package-as-present-dark-table.jpg"),
    rgba(48, 35, 22, 0.4);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
  height: 80vh;
  color: #fff;
  margin-bottom: 4rem;
  .header-text {
    font-family: var(--second-font);
    display: table-cell;
    vertical-align: bottom;
    height: 80vh;
    h2 {
      font-size: 4.4rem;
    }
    h6 {
      font-size: 1.5rem;
      margin-left: 10px;
    }
    padding-bottom: 2rem;
  }
}
.history {
  h3,
  h6 {
    font-family: var(--second-font);
  }
  h6 {
    font-size: 1.4rem;
    color: #343437;
    font-weight: 500;
  }
  h3 {
    font-size: 2.8rem;
  }
  p {
    font-family: var(--poppins);
    line-height: 1.5;
    word-spacing: 4px;
    font-weight: 500;
    color: #343437;
    padding-top: 1rem;
    font-size: 0.75rem;
  }
}

section:nth-of-type(2) {
  background-image: url("../assets/images/about/5.jpg");
  height: 80vh;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin-top: 5rem;
}
.mission {
  width: 100%;
}

@media (min-width: 768px) {
  .history {
    p {
      padding-top: 1rem;
      font-size: 0.8rem;
    }
  }
  article {
    width: 70%;
  }
  .mission {
    width: 80%;
  }
}
@media (min-width: 1024px) {
  article {
    width: 60%;
  }
  .mission {
    width: 80%;
  }
}
</style>
