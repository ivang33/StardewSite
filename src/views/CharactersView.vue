<script>
export default {
  data() {
    return {
      icons: [],
      icons2: []
    };
  },
  mounted() {
    fetch('/stardew.json')
        .then(response => response.json())
        .then(response =>  this.icons = response)
    fetch('/stardewother.json')
        .then(response => response.json())
        .then(response =>  this.icons2 = response)
  }
}
</script>
<template>
  <div v-if="icons.length > 0" class="charbg">
    <div class="famcan">
      <div class="famcantext">
        <p>Family candidates</p>
      </div>
    </div>
    <div class="gridfam">
      <div class="familycandit" v-for="icon in icons" :key="icon.id">
        <img :src="icon.ref_image" alt="icon" width="122" height="122" />
        <p>{{icon.description}}</p>
      </div>
    </div>
    <div class="famca2">
      <div class="famcantext2">
        <p>Other residents</p>
      </div>
    </div>
    <div class="othervillages">
      <div class="othervillagesgrid">
        <div class="familycandit2" v-for="icon in icons2" :key="icon.id">
          <img :src="icon.ref_image" alt="icon" width="122" height="122" />
          <p>{{icon.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.charbg{
  background: url("src/assets/charbg.png");
  width: 1920px;
  height: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.famcan{
  background: url("src/assets/famcanbg.png");
  width: 824px;
  height: 35px;
  display: flex;
  justify-content: center;
  margin: 150px;
}
.famcantext{
  width: 200px;
  height: 24px;
  display: flex;
  justify-content: center;
}
.famcantext p{
  font-family: "Stardew_Valley", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 30px;
}
.familycandit{
  background: url("src/assets/famiconsbg.png");
  width: 257px;
  height: 145px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.gridfam{
  width: 1738px;
  height: 334px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 46px;
  grid-row-gap: 42px;
}
.familycandit p{
  font-family: "Stardew_Valley", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.othervillages{
  background: url("src/assets/otherbg.png");
  width: 1237px;
  height: 695px;
  display: flex;
  justify-content: center;
}
.othervillagesgrid{
  margin-top: 13px;
  width: 1086px;
  height: 576px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 19px;
}
.familycandit2 p{
  font-family: "Stardew_Valley", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.famca2{
  background: url("src/assets/famcanbg.png");
  width: 824px;
  height: 35px;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.famcantext2{
  width: 200px;
  height: 24px;
  display: flex;
  justify-content: center;
}
.famcantext2 p{
  font-family: "Stardew_Valley", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 30px;
}
.familycandit2{
  margin-top: 20px;
  width: 128px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app > main > div > div.othervillages > div > div:nth-child(22) > img{
  margin-left: 950px;
}
#app > main > div > div.othervillages > div > div:nth-child(22) > p{
  margin-left: 950px;
}
</style>
