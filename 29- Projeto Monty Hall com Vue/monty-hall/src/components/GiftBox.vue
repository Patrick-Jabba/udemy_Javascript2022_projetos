<template>
  <div class="gift">
    <div class="gift-tie-1"></div>
    <div class="gift-tie-2"></div>
    <div class="gift-top"></div>
    <gift class="gift-body"></gift>
  </div>
</template>

<script>
export default {
  name: "GiftBox",
};
</script>

<style>
.gift {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  top: 210px;
}

.gift-top {
  width: 100px;
  height: 25px;
  background-color: #7aa944;
}

.gift-body {
  width: 90px;
  height: 60px;
  background-color: #5c7e32;
}

.gift-tie-1 {
  position: absolute;
  width: 15px;
  height: 85px;
  background-color: red;
}

.gift-tie-2 {
  position: absolute;
  width: 90px;
  top: 40px;
  height: 15px;
  background-color: red;
}
</style>