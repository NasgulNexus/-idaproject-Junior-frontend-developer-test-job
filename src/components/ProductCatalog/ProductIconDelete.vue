<template>
  <img :src="icon" class="ProductIconDelete" @click="deleteFromProducts()" />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductIconDelete",
  props: {
    id: Number
  },
  data() {
    return {
      icon: "./assets/icon/deleteIcon.svg"
    };
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
  position: absolute;
  right: -7px;
  top: -7px;
  width: 32px;
  height: 32px;
  background: #ff8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: none;
}
</style>
