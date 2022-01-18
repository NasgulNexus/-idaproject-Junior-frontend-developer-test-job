<template>
  <img :src="image" alt="img" class="ImageCard" />
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: String
  }
};
</script>

<style scoped>
.ImageCard {
  object-fit: contain;
  width: 332px;
  height: 200px;
  border-radius: 4px 4px 0px 0px;
}
</style>
