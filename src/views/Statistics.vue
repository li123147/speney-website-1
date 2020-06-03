import Statistics from '@/views/Statistics.vue';
<template>
  <div class="nav-wrapper">
    <div class="content">
     Statistics.vue
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "Statistics"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex-grow: 1; //尽量把所有的给它
  overflow: auto;
}
</style>