<script setup>
import bird from "@/assets/stardew_bird.gif"
import clouds from "@/assets/parallax3a (1).png"
</script>

<template>
<div class="homebg">
  <div class="homelogo">

  </div>
  <div class="texticon">
    <div class="text">
      <h2>You're moving to the Valley...</h2>
      <span>You've inherited your grandfather's old farm plot in Stardew Valley.
         Armed with hand-me-down tools and a few coins,
        you set out to begin your new life!</span>
    </div>
  </div>
  <div class="cloud">
    <img :src="clouds" alt="" width="900" height="500" />
  </div>
  <div class="bird-container">
    <img :src="bird" alt="">
  </div>
</div>
</template>

<style scoped>
.homebg{
 background: url("/src/assets/homebg.png") no-repeat;
  width: 1920px;
  height: 2120px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
.homelogo{
  background: url("/src/assets/homelogo.png") no-repeat;
  width: 733px;
  height: 400px;
}
.texticon{
  background: url("/src/assets/texticon.png") no-repeat;
  width: 1162px;
  height: 652px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text{
  width: 991px;
  height: 359px;
}
.text h2{
  font-family: "Stardew_Valley", sans-serif;
  color: #99B0EC;
  font-size: 70px;
  margin-left: 50px;
}
.text span{
  font-family: "Stardew_Valley", sans-serif;
  color: white;
  font-size: 40px;
}
.bird-container {
  width: 100%;
  display: flex;
  justify-content: end;
}

.bird-container img {
  animation: fly 10s infinite;
}

@keyframes fly {
  from {
    margin-left: 100%;
    margin-right: 0;
  }
  to {
    margin-left: 0;
    margin-right: 100%;
  }
}
.cloud {
  width: 1500px;
  display: flex;
  justify-content: start;
}

.cloud img {
  animation: clouds 110s infinite;
}

@keyframes clouds {
  from {
    margin-left: 0;
    margin-right: 100%;
  }
  to {
    margin-left: 100%;
    margin-right: 0;
  }
}
</style>
