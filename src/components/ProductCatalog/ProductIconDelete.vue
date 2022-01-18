<template>
  <button class="ProductDelete" @click="deleteFromProducts()">
    <span class="ProductIconDelete"></span>
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductIconDelete",
  props: {
    id: Number
  },
  methods: {
    ...mapActions(["DELETE_FROM_PRODUCTS"]),
    deleteFromProducts() {
      this.$store.dispatch("DELETE_FROM_PRODUCTS", this.id);
    }
  }
};
</script>

<style scoped>
.ProductIconDelete {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url("../../assets/icon/deleteIcon.svg") center no-repeat;
}
.ProductDelete {
  position: absolute;
  right: -7px;
  top: -7px;
  width: 32px;
  height: 32px;
  background: #ff8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0;
  --webkit-appereance: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
}
</style>
