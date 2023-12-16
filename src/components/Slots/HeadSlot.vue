<template>
  <div class="py-3 py-lg-2 ps-4 ps-md-0 mb-2 mb-md-4">
    <nav aria-label="breadcrumb ">
      <slot name="topSlot"></slot>
      <ol class="breadcrumb mt-2 pt-2 mt-lg-4 pt-lg-4">
        <router-link
          to="/"
          tag="li"
          class="breadcrumb-item text-decoration-none"
        >
          <a class="text-decoration-none">Home</a>
        </router-link>
        <li class="breadcrumb-item active" aria-current="page">
          <slot name="pageName"></slot>
        </li>
        <slot name="search"></slot>
      </ol>
    </nav>
    <div>
      <h4 class="mt-0 mb-2 pb-2 mb-lg-4 pb-lg-4"><slot name="title"></slot></h4>
    </div>
    <slot name="filterproducts"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
ol {
  font-family: var(--roboto);
  li span,
  li a {
    color: #9ba1a5;
    font-size: 17px;
  }
  li:last-of-type {
    font-size: 14px;
    margin-top: 4px;
  }
}
h4 {
  font-family: var(--second-font);
  font-size: 2.5rem;
}

@media (min-width: 768px) {
  h4 {
    font-size: 3.5rem;
  }
  ol {
    li:last-of-type {
      font-size: 15px;
      margin-top: 4px;
    }
  }
}
@media (min-width: 986px) {
  h4 {
    font-size: 4.5rem;
  }
  ol {
    li:last-of-type {
      font-size: 16px;
      margin-top: 0;
    }
  }
}
</style>
