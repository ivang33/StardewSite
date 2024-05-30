<script>

</script>

<template>
   <div class="header1">
     <div class="bgheader">
       <div class="navig">
         <RouterLink to="/home">Home</RouterLink>
         <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">Wiki</a>
         <a href="https://www.fangamer.com/collections/stardew-valley">Merch</a>
         <RouterLink to="/characters">Characters</RouterLink>
         <RouterLink to="/FAQ">FAQ</RouterLink>
       </div>
       <div class="navigicons">
         <a href="https://twitter.com/concernedape"><img src="/twitterlogo.png" alt="twitterlogo"></a>
         <a href="https://www.facebook.com/StardewValley"><img src="/facebooklogo.png" alt="facebooklogo"></a>
         <a href="https://www.reddit.com/r/StardewValley/?rdt=60853"><img src="/redditlogo.png" alt="redditlogo"></a>
         <a href="https://discord.com/invite/StardewValley"><img src="/discordlogo.png" alt="discordlogo"></a>
       </div>
     </div>
   </div>
</template>

<style scoped>
.bgheader{
  background: url("src/assets/bgheader.png") no-repeat;
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navig{
  width: 690px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 390px;
}
.navigicons{
  width: 233px;
  height: 58px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 200px;
}
.navigicons > a:nth-child(4) > img{
  margin-left: 20px;
}
.navig > a{
  font-family: "Stardew_Valley", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 50px;
}
.header1{
  width: 1850px;
  height: 76px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 40px;
}
</style>
