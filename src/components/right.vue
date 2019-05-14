<template>
  <div class="rightbox" :style="cssProps">
我是right
  </div>
</template>
<script>
export default {
  name: "right",
  data() {
    return {};
  },
 computed: {
    cssProps() {
      return {
        "--bg-color": this.$store.state.bgcolor,
        "--font-color": this.$store.state.color
      };
    }
  },
};
</script>
<style scoped>
.rightbox{
  width: 40vw;
  height: 60vh;
 border:2px solid rgb(156, 226, 43);
  background-color: var(--bg-color);
 color: var(--font-color)
}
</style>
