<template>
  <footer class="text-light">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div>
            <img src="../assets/images/logo/logo-regular-dark.png" alt="logo" />
          </div>
          <p class="mt-4 w-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            ipsum modi fugiat cumque repellat sequi, delectus vitae? Ex,
            molestiae pariatur
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h6>customer care</h6>
          <div class="mt-4">
            <p>Need Help?We are alawyes here for you ,and ready to help</p>
            <ul class="nav flex-column mt-4">
              <li class="mt-2"><b>E: </b><span>wwww123@gmail.com</span></li>
              <li class="mt-2"><b>P: </b><span>+245 258 255</span></li>
              <li class="mt-2"><b>A: </b><span>5th settlement, Egypt</span></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
          <h6>follow</h6>
          <ul class="nav flex-column mt-3">
            <li class="mt-2">
              <a class="text-decoration-none" aria-current="page" href="#"
                >Facebook</a
              >
            </li>
            <li class="mt-2">
              <a class="text-decoration-none" href="#">Twitter</a>
            </li>
            <li class="mt-2">
              <a class="text-decoration-none" href="#">Instagram</a>
            </li>
            <li class="mt-2">
              <a class="text-decoration-none" href="#">Snapchat</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
          <h6>useful links</h6>
          <ul class="nav flex-column">
            <li class="mt-2">
              <a class="text-decoration-none" href="#">Returns & Exchange</a>
            </li>
            <li class="mt-2">
              <a class="text-decoration-none" href="#">FAQ</a>
            </li>
            <li class="mt-2">
              <a class="text-decoration-none" href="#">Shipping Information</a>
            </li>
            <li class="mt-2">
              <a class="text-decoration-none" href="#">Affiliates</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <p class="text-center footer_end pt-md-2 pt-lg-4">
      All Copyrights are Reserved
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  padding-top: 5rem;
  padding-bottom: 0.5rem;
  background: #000;
  margin-top: 3rem;
  .container {
    margin-bottom: 6rem;
  }
  p,
  ul li {
    font-size: 11px;
  }
  ul li {
    a {
      color: #ddd;
    }
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  hr {
    display: block;
  }
  .footer_end {
    color: #555;
  }
}

@media (min-width: 768px) {
  footer {
    padding-bottom: 1rem;
  }
}
@media (min-width: 960px) {
  footer {
    margin-top: 4rem;
    p,
    ul li {
      font-size: 13px;
    }
    ul li:hover {
      cursor: pointer !important;
      -webkit-transform: translateX(10px) !important;
      transform: translateX(10px) !important;
      a {
        color: var(--primary-color) !important;
      }
    }
  }
}
</style>
