<script setup>

import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="FAQbg">
    <div class="FAQbody">
      <div class="twotables">
        <div class="textwindow">
          <div class="text1">
            <h2>Features</h2>
            <ul>
              <li><span>Create the farm of your dreams:</span> Turn your overgrown fields into a lively and bountiful farm!</li>
              <li><span>Learn to live off the land:</span> Raise animals, go fishing, tend to crops, craft items, or do it all! The choice is yours...</li>
              <li><span>Become a part of the local community:</span> Pelican Town is home to over 30 residents you can befriend!</li>
              <li><span>Meet someone special:</span> With 12 townsfolk to date, you may even find someone to start a family with!</li>
              <li><span>Explore vast, mysterious caves:</span> Encounter dangerous monsters & valuable treasures deep underground!</li>
              <li><span>Customize:</span> There are hundreds of character & home decoration options to choose from!</li>
            </ul>
          </div>
        </div>
        <div class="textwindow2">
          <div class="text1">
            <h2>History</h2>
            <ul>
              <p>
                <span>Stardew Valley</span> was created by game designer <span>Eric Barone</span>, under the alias of ConcernedApe.
                During the four years he spent solo-developing it, he taught himself the necessary skills to produce the game’s
                music, art, programming, and design. The game was released on PC on February 26, 2016, and within two months passed 1 million copies sold.
                Within a few months the game expanded support to Mac and Linux, it released on Xbox One and Playstation 4 in December 2016,
                Nintendo Switch in late 2017, and iOS in October 2018. There have been five major post release updates – the first which added new farm maps,
                marriage options, and content, the second expanded supported languages to include German, Spanish, Brazilian Portuguese, Russian,
                Japanese and Simplified Chinese. The third update (in late 2018) added Multiplayer functionality,
                with network code done by (then) <span>Chucklefish</span>
                programmer Tom Coxon. Starting with the 4th update,
                Eric formed a small team to help him update the game.
                The fourth and fifth updates added significant amounts of new content to the game.
                As of February 2024, <span>Stardew Valley</span> has sold over 30 million copies across all platforms,
                with over 19 million copies sold on PC alone.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ot7uXNQskhs?si=KYyhfBP8kXbzgKTp"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
        </iframe>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.FAQbg{
  background: url("src/assets/FAQbg.png") no-repeat;
  width: 1920px;
  height: 1440px;
  display: flex;
  justify-content: center;
}
.twotables{
  margin-left: 80px;
  margin-top: 170px;
  width: 1758px;
  height: 465px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 102px;
  grid-row-gap: 0px;
}
.textwindow{
  background: url("/src/assets/FAQIcon.png") no-repeat;
  width: 828px;
  height: 465px;
}
.textwindow2{
  background: url("/src/assets/FAQIcon.png") no-repeat;
  width: 828px;
  height: 465px;
}
.text1{
  width: 721px;
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text1 h2{
  font-family: "Stardew_Valley", sans-serif;
  color: #99B0EC;
  font-size: 80px;
  list-style-type: none;
  margin: 0;
}
.text1 ul li{
  font-family: "Stardew_Valley", sans-serif;
  color: white;
  font-size: 20px;
  list-style-type: none;
  line-height: 20px;
}
.text1 ul li span{
  color: #99B0EC;
}
.text1 p{
  font-family: "Stardew_Valley", sans-serif;
  color: white;
  font-size: 20px;
  list-style-type: none;
  line-height: 20px;
}
.text1 p span{
  color: #99B0EC;
}
.video{
  width: 1920px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video iframe{
  width: 800px;
  height: 500px;
}
</style>