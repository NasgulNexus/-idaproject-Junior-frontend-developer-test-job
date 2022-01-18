<template>
  <form @submit.prevent="someAction()" class="AddProductForm">
    <div>
      <label class="AddProductLabel">Наименование товара</label>
      <div class="AddProductObligatoryField" />
      <input
        v-model="title"
        placeholder="Введите наименование товара"
        class="AddProductInput"
        :class="{ AddProductInputError: $v.title.$error }"
        @blur="$v.title.$touch()"
      />
      <div v-if="$v.title.$error" class="AddProductError">Поле является обязательным</div>
    </div>
    <div>
      <label class="AddProductLabel">Описание товара</label>
      <textarea
        v-model="description"
        placeholder="Введите описание товара"
        class="AddProductTextArea"
      />
    </div>
    <div>
      <label class="AddProductLabel">Ссылка на изображение товара</label>
      <div class="AddProductObligatoryField" />
      <input
        v-model="image"
        placeholder="Введите ссылку"
        class="AddProductInput"
        :class="{ AddProductInputError: $v.image.$error }"
        @blur="$v.image.$touch()"
      />
      <div v-if="$v.image.$error" class="AddProductError">Поле является обязательным</div>
    </div>
    <div>
      <label class="AddProductLabel">Цена товара</label>
      <div class="AddProductObligatoryField" />
      <input
        v-model="price"
        placeholder="Введите цену"
        class="AddProductInput"
        :class="{ AddProductInputError: $v.price.$error }"
        @blur="$v.price.$touch()"
      />
      <div v-if="$v.price.$error && !price" class="AddProductError">Поле является обязательным</div>
      <div
        v-if="$v.price.$error && price"
        class="AddProductError"
      >Цена должна быть числовым значением</div>
    </div>
    <button
      type="submit"
      :disabled="!isValidate || $v.$anyError === true || $v.$dirty === false"
      class="AddProductButton"
    >Добавить товар</button>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "AddProduct",
  components: {},
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
      title: null,
      description: null,
      image: null,
      price: null,
      id: null,
      product: {},
      productsData: []
    };
  },
  computed: {
    isValidate() {
      return this.title && this.image && this.price;
    }
  },
  methods: {
    ...mapActions(["ADD_TO_PRODUCTS"]),
    someAction() {
      this.productsData = [...this.products];
      if (this.productsData.length > 0) {
        this.productsData.sort((a, b) => (a.id > b.id ? -1 : 1));
        this.id = this.productsData[0].id + 1;
      } else {
        this.id = 0;
      }
      this.product = {
        id: this.id,
        title: this.title,
        description: this.description,
        image: this.image,
        price: parseInt(this.price.replace(/\s/g, ""), 10)
      };
      this.$store.dispatch("ADD_TO_PRODUCTS", this.product);
      this.title = null;
      this.description = null;
      this.image = null;
      this.price = null;
    }
  },
  validations: {
    title: {
      required
    },
    image: {
      required
    },
    price: {
      required,
      validFormat: val => /\d/.test(val)
    }
  }
};
</script>

<style scoped>
.AddProductObligatoryField {
  display: inline-block;
  margin-bottom: 5.5px;
  width: 4px;
  height: 4px;
  background: #ff8484;
  border-radius: 4px;
}
.AddProductLabel {
  margin-bottom: 4px;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;
}
.AddProductButton {
  width: 284px;
  height: 36px;
  background: #7bae73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 8px;
  border: 0;
  color: #ffffff;
  cursor: pointer;
}
.AddProductButton[disabled] {
  background: #eeeeee;
  color: #b4b4b4;
  cursor: auto;
}
.AddProductInput {
  margin-bottom: 18px;
  width: 268px;
  height: 26px;
  padding-top: 10px;
  padding-left: 16px;
  padding-bottom: 11px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #3f3f3f;
  border: 0;
}
.AddProductInput::placeholder {
  color: #b4b4b4;
}
.AddProductForm {
  height: 440px;
  width: 284px;
  margin-left: 32px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
}
.AddProductTextArea {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  margin-bottom: 16px;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #3f3f3f;
  width: 252px;
  height: 94px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  resize: none;
  padding-top: 14px;
  padding-left: 16px;
  padding-right: 16px;
  border: 0;
}
.AddProductTextArea::placeholder {
  color: #b4b4b4;
}
.AddProductError {
  margin-top: 4px;
  margin-bottom: 2px;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
}
.AddProductInputError {
  margin-bottom: 0px;
  border: 1px solid #ff8484;
}
@media screen and (max-width: 420px) {
  .AddProductForm {
    position: static;
    margin-top: 10px;
    margin-left: 16px;
    height: 440px;
    width: 284px;
    left: 32px;
    top: 83px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
  }
}
</style>
