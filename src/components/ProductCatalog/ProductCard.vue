<template>
  <div class="ProductCardDiv">
    <ProductIconDelete :id="product.id" class="deleteButton" />
    <ImageCard :image="product.image" />
    <TextCard :title="product.title" :description="product.description" :price="product.price" />
  </div>
</template>

<script>
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";
import ProductIconDelete from "./ProductIconDelete";

export default {
  name: "ProductCard",
  components: { TextCard, ImageCard, ProductIconDelete },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.ProductCardDiv {
  position: relative;
  cursor: pointer;
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.ProductCardDiv:hover .deleteButton {
  display: block;
  animation-name: delBut;
  animation-duration: 1s;
}

@keyframes delBut {
  0% {
    opacity: 0.1;
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
