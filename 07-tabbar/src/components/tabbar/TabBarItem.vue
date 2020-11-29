<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      computed:{
        isActive(){
          //route:拿到处于活跃的路由
         // 你活跃的路径是否和我当前传入的路径相同  如果要检索的字符串值没有出现，则返回 -1。
         return  this.$route.path.indexOf(this.path) !==-1
        },
        activeStyle(){
          //isActive活跃就变this.activeColor传过来的颜色
          return this.isActive ? {color:this.activeColor} : {}
        }
      },
      methods:{
        itemClick(){
          // console.log('itemClick');
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }
  .tab-bar-item img{
    weight:20px;
    height: 20px;
    margin-top: 6px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /*.active{*/
  /*  !*随图片的颜色变化*!*/
  /*  color: darkblue;*/
  /*}*/
</style>
