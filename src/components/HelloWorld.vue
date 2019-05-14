<template>
  <div class="hello" :style="cssProps">
    <div class="addleft">
      <div class="addleft_font">我是最外层hello</div>
      <div class="button_box">
        <div class="button_box_content1" @click="ret1">变成红色</div>
        <div class="button_box_content2" @click="ret2">变成绿色</div>
      </div>
    </div>
    <div class="left">
      <left/>
    </div>
    <div class="right">
      <right/>
    </div>
  </div>
</template>

<script>
import left from "@/components/left";
import right from "@/components/right";
export default {
  name: "HelloWorld",
  components: {
    left,
    right
  },
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
  methods: {
    ret1() {
      this.$store.commit("reset1");
    },
    ret2() {
      this.$store.commit("reset2");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  /*  background-color: var(--bg-color) */
}
.addleft {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 10vw;
  height: 100vh;
  border-right: 1px solid #000;
   background-color: var(--bg-color)
}
.addleft_font{
  color: var(--font-color)
}
.button_box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 5vh;
  /* background-color: aqua; */
}
.button_box_content1{
  width: 90px;
  height: 30px;
  border:1px solid #000;
  font:normal 16px/30px "微软雅黑";
  text-align: center;
  margin-right: 20px;
}
.button_box_content2{
  width: 90px;
  height: 30px;
  border:1px solid #000;
  font:normal 16px/30px "微软雅黑";
  text-align: center;
}
.left {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: calc(40vw - 1px);
  height: 100vh;
  border-right: 1px solid #000;
 /*   background-color: var(--bg-color) */
}
.right {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 50vw;
  height: 100vh;
    /*  background-color: var(--bg-color) */
}
</style>
