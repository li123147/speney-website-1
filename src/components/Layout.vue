<template>
  <div>
    <div class="nav-wrapper">
      <div class="content">
        <slot />
      </div>
      <Nav />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1; //尽量把所有的给它
  overflow: auto;
}
</style>