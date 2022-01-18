<template>
  <div class="TextCard">
    <div class="TextCardTitle">
      <span>{{ title }}</span>
    </div>
    <div class="TextCardDescription">
      <span>{{ description }}</span>
    </div>
    <div class="TextCardPrice">
      <span>{{ price.toLocaleString("ru-RU") }} руб.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextCard",
  props: {
    title: String,
    description: String,
    price: Number
  }
};
</script>

<style scoped>
.TextCardTitle {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3f3f3f;
}
.TextCardDescription {
  margin-top: 16px;
  color: #3f3f3f;
  overflow: hidden;
  max-height: 80px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #3f3f3f;
}
.TextCardPrice {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 32px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3f3f3f;
}
.TextCard {
  margin: 16px 16px 24px 16px;
}
</style>
