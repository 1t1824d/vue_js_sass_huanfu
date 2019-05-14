<template>
  <div class="leftbox" :style="cssProps">
    <div class="leftbox_font">我是left</div>
    <div class="leftbox_top">我是left的top</div>
    <div class="leftbox_bottom">我是left的bottom</div>
  </div>
</template>
<script>
export default {
  name: "left",
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
  }
};
</script>
<style scoped>
.leftbox {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 30vw;
  height: 100vh;
   color: var(--font-color);
/*   border: 2px solid blueviolet;
  background-color: var(--bg-color);
  color: var(--font-color); */
}
.leftbox_font{
   width: 10vw;
  height: 5vh;
  font: normal 16px/5vh "微软雅黑";
  text-align: center;
   color: var(--font-color);
background-color: var(--bg-color);
}
.leftbox_top{
   width: 25vw;
  height: 20vh;
  border: 2px solid blueviolet;
  background-color: var(--bg-color);
  color: var(--font-color);
  margin-top: 60px;
}
.leftbox_bottom{
 width: 25vw;
  height:50vh;
  border: 2px solid blueviolet;
  background-color: var(--bg-color);
  color: var(--font-color);
    margin-top: 160px;
}
</style>
