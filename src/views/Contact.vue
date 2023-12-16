<template>
  <div class="container_contact mt-4 mb-5">
    <section class="text-center my-5 py-4 contact">
      <span class="text-lowercase mt-4 mb-2">get In TOuch</span>
      <h5 class="mt-4 mb-4">Contact</h5>
    </section>
    <section class="content">
      <div class="row">
        <section
          class="col-10 col-md-6 text-center text-md-start mb-5 pb-5 pb-lg-0 ps-lg-2 address"
        >
          <aside class="">
            <h6 class="">CONTACT DETAILS</h6>
            <address>
              P: +1 234 567 890<br />
              E: contact@info.com<br />
              A: 123 Fifth Avenue, New York, NY 10160<br />
            </address>
          </aside>

          <aside class="mt-5">
            <h6 class="text-uppercase mb-3">Follow us</h6>
            <div>
              <a href="#">
                <i class="fa-brands fa-facebook social_icon"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram social_icon"></i>
              </a>
              <a href="#"> <i class="fa-brands fa-youtube social_icon"></i> </a>
              <a href="#">
                <i class="fa-brands fa-pinterest social_icon"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-x-twitter social_icon"></i>
              </a>
            </div>
          </aside>
        </section>
        <section class="col-12 col-md-6">
          <form action="" method="" class="message">
            <div class="">
              <label for="exampleFormControlInput1" class="form-label pb-1"
                >Name <span class="text-danger">*</span></label
              >
              <div class="d-flex">
                <div class="me-2 w-50">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput2"
                  />
                  <span class="text-muted">First</span>
                </div>
                <div class="w-50">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput3"
                  />
                  <span class="text-muted">Last</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <label for="exampleFormControlInput1" class="form-label pb-1"
                >Email <span class="text-danger">*</span></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mt-5">
              <label for="exampleFormControlTextarea1" class="form-label pb-1"
                >Message <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <div class="col-12 my-4">
              <button
                class="blackbutton text-uppercase text-light px-4"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
    <section>
      <div class="container px-0">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=737&amp;height=300&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://embed-googlemap.com">google map embed</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container_contact {
  width: 90%;
  margin: 0 auto;
}
input {
  border-radius: 0 !important;
  padding: 10px 0;
}
input + span {
  font-size: 15px;
}
.contact {
  border-bottom: 1px solid #333;

  span {
    font-size: 1rem;
    font-weight: bold;
    font-family: var(--second-font);
  }
  h5 {
    font-size: 3rem;
    font-family: var(--second-font);
  }
}

aside address {
  font-size: 0.75rem;
  line-height: 1.5;
  font-family: "poppins";
  font-weight: 500;
  color: #3e4042;
}
h6 {
  font-family: var(--second-font);
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.1rem;
  -webkit-transform: scaleY(1.1);
          transform: scaleY(1.1);
  color: #3e4042;
}
.content .address {
  border-bottom: 1px solid #333;
  margin: 0 auto;
}
aside .social_icon {
  border: 1px solid #5e5f60;
  border-radius: 50%;
  padding: 8px;
  font-size: 0.8rem;
  display: inline-block;
  color: #3e4042;
  margin-right: 10px;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
aside .social_icon:hover {
  cursor: pointer;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

/**Map Styling */
section:last-of-type {
  font-family: var(--poppins);
  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #3e4042;
  }
  span {
    font-size: 0.8rem;
  }
  margin-bottom: 5rem;
}
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 400px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 400px;
}
.gmap_iframe {
  height: 400px !important;
}

/**for Large Devices */
@media (min-width: 768px) {
  h6 {
    font-size: 1.2rem;
  }
  section:last-of-type {
    label {
      font-size: 1rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
  .content .address {
    border: none;
  }
  .contact {
    margin: 3rem auto;
    //margin-top:3rem;
    h5 {
      font-size: 5.5rem;
    }
  }
}
@media (min-width: 1024px) {
  h6 {
    font-size: 1.3rem;
  }
  section:last-of-type {
    label {
      font-size: 1.1rem;
    }
    span {
      font-size: 0.8rem;
    }
  }

  .container_contact {
    width: 80%;
  }
  aside .social_icon {
    font-size: 1rem;
  }
}

@media (min-width: 1040px) {
  h6 {
    font-size: 1.5rem;
  }
  section:last-of-type {
    label {
      font-size: 1.1rem;
    }
    span {
      font-size: 0.9rem;
    }
  }
  aside address {
    font-size: 0.9rem;
  }
  .container_contact {
    width: 70%;
  }
}
</style>
