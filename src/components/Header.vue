<template>
  <div>
    <ProductCatalog :products="PRODUCTS" />
  </div>
</template>

<script>
import ProductCatalog from "./ProductCatalog";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    ProductCatalog
  },
  data() {
    return {
      productDataDefault: []
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"])
  },
  mounted() {
    this.$store.dispatch("GET_PRODUCTS_FROM_API").then(response => {
      if (!response.data) {
        console.log("Error");
      }
    });
  }
};
</script>

<style></style>
