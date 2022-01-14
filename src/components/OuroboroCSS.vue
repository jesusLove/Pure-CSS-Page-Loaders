<template>
  <div class="ouroboro-container">
    <!-- 圆环 -->
    <div class="circle">
      <span class="ouro">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>

      <span class="ouro ouro2">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>

      <span class="ouro ouro3">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>
    </div>
    <!-- 圆 -->
    <div class="round">
      <span class="ouro">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>

      <span class="ouro ouro2">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>

      <span class="ouro ouro3">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>
    </div>
    <!-- 双圆 -->
    <div class="double">
      <span class="ouro">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>

      <span class="ouro ouro2">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>

      <span class="ouro ouro3">
        <span class="left"><span class="anim"></span></span>
        <span class="right"><span class="anim"></span></span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 参考：https://codepen.io/GeoffreyCrofte/pen/vFBIh?editors=0100；
$ouro-width: 46px;
// 三行布局
.ouroboro-container {
  display: flex;
  flex-direction: column;

  .circle,
  .round,
  .double {
    display: flex;
    justify-content: center;
  }
  .ouro::after {
    position: absolute;
    content: '';
    left: 9px;
    top: 9px;
    width: $ouro-width - 9px * 2;
    height: $ouro-width - 9px * 2;
    background-color: #f2f2f2;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
  }
  .round .ouro::after {
    display: none;
  }
  .double .ouro::after {
    left: 7px;
    top: 7px;
    height: 13px;
    width: 13px;
    border: 10px solid #ddd;
    background: transparent;
    box-shadow: none;
  }
}
// 列布局动画
.ouroboro-container {
  .ouro {
    margin: 10px;
    height: $ouro-width;
    width: $ouro-width;
    display: inline-block;
    border-radius: 50%;
    background: #dddddd;
    position: relative;
    & > span {
      position: absolute;
      height: 100%;
      width: 50%;
      overflow: hidden;
    }
    .left {
      left: 0;
    }
    .right {
      left: 50%;
    }
  }
  .anim {
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 999px;
    transform-origin: 0 50% 0;
    background-color: #336699;
    animation: spinner-rotate-left 3s infinite;
  }
  .left .anim {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .right .anim {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    left: -100%;
    transform-origin: 100% 50% 0;
  }
  .ouro2 {
    .anim {
      animation-delay: 0;
    }
    .right .anim {
      animation-delay: 1.5s;
    }
  }
  .ouro3 {
    .anim {
      animation-delay: 0;
      animation-duration: 3s;
      animation-timing-function: linear;
    }
    .right .anim {
      animation-name: spinner-rotate-right;
      animation-delay: 1.5s;
    }
  }
}
// 两个关键帧
@keyframes spinner-rotate-left {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinner-rotate-right {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
