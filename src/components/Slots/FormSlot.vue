<template>
  <div>
    <div class="modal-header">
      <slot name="close"></slot>
    </div>
    <div class="modal-body">
      <div class="mb-3 row">
        <slot name="email"></slot>
      </div>
      <div class="mb-0 row">
        <slot name="password"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal {
  font-family: var(--roboto);
}

.modal-footer {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
  border: none;
  -webkit-box-align: start !important;
  -ms-flex-align: start !important;
  align-items: flex-start !important;

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  button {
    margin: 0;
  }
}

.eye span {
  right: 1rem;
  top: 0.5rem;
  color: var(--second-color);
}

.errorMessage {
  margin-right: 0;
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 5px;
  padding: 0;
  color: rgb(233, 6, 6);
}
</style>
