<script setup>
import developlogo from "@/assets/Developed_By_Image.gif"
</script>
<template>
<div class="footer1">
  <div class="footerbg">
    <div class="footericons">
      <a href="https://store.steampowered.com/app/413150/Stardew_Valley/"><img src="/steamicon.png" alt="steam"></a>
      <a href="https://www.humblebundle.com/store/stardew-valley"><img src="/humblestoreicon.png" alt="humblestore"></a>
      <a href="https://www.gog.com/game/stardew_valley"><img src="/gogicon.png" alt="gog"></a>
      <a href="https://www.xbox.com/en-gb/games/store/stardew-valley/c3d891z6tnqm"><img src="/xboxicon.png" alt="xbox"></a>
      <a href="https://www.playstation.com/en-us/games/stardew-valley/"><img src="/psicon.png" alt="ps"></a>
      <a href="https://www.nintendo.com/us/store/products/stardew-valley-switch/"><img src="/nintendoicon.png" alt="nintendo"></a>
      <a href="https://apps.apple.com/us/app/stardew-valley/id1406710800"><img src="/ios.png" alt="ios"></a>
      <a href="https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley&hl=en_US"><img src="/androidicon.png" alt="android"></a>
      <a href="https://twitter.com/concernedape"><img :src="developlogo" width="339" height="120"></a>
    </div>
  </div>
</div>
</template>

<style scoped>
.footerbg{
  background: url("src/assets/footerbg.png");
  height: 142px;
  width: 1824px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer1{
  padding-top: 50px;
  margin: 38px;
}
.footericons{
  width: 1652px;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
