<template>
  <div>
    <div class="ProductCatalogHeader">
      <span class="ProductCatalogTitle">Добавление товара</span>
      <select v-model="selectFilter" v-on:change="filtred()" class="ProductCatalogSelect">
        <option value="default">По умолчанию</option>
        <option value="min">По цене min</option>
        <option value="max">По цене max</option>
        <option value="title">По наименованию</option>
      </select>
    </div>
    <div class="ProductCardContent">
      <div :class="{'AddProductShow': !isShowHeader}" @scroll="handleScroll">
        <AddProduct :products="products" />
      </div>
      <div class="ProductCatalogGoods" :class="{'ProductCatalogGoodsShow': isShowHeader}">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import AddProduct from "../AddProduct";

export default {
  name: "ProductCatalog",
  components: { ProductCard, AddProduct },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selectFilter: "default",
      isShowHeader: true
    };
  },
  methods: {
    handleScroll() {
      const scrollPX = 59;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isShowHeader = scrollTop > scrollPX ? false : true;
    },
    filtred() {
      if (this.selectFilter === "default") {
        this.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (this.selectFilter === "min") {
        return this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      if (this.selectFilter === "max") {
        return this.products.sort((a, b) => (a.price > b.price ? -1 : 1));
      }
      if (this.selectFilter === "title") {
        return this.products.sort((a, b) => (a.title > b.title ? 1 : -1));
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.ProductCatalogGoods {
  margin-left: 380px;
  margin-right: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-auto-rows: minmax(100px, auto);
}
.ProductCatalogGoodsShow {
  margin-left: 16px;
}
.ProductCatalogSelect {
  width: 150px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 0;
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 16px;
  appearance: none;
  background: url("../../assets/icon/arrowSelect.svg") no-repeat right;
  background-position-x: calc(100% - 16px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.ProductCatalogTitle {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
}
.ProductCatalogHeader {
  margin: 32px;
  margin-right: 17px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.ProductCardContent {
  display: flex;
}
.AddProductShow {
  position: fixed;
  top: 24px;
}
@media screen and (max-width: 420px) {
  .ProductCatalogGoods {
    margin-top: 60px;
    margin-left: 16px;
    margin-right: 16px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-auto-rows: minmax(100px, auto);
  }
  .ProductCardContent {
    display: block;
  }
  .AddProductShow {
    position: static;
  }
}
</style>
