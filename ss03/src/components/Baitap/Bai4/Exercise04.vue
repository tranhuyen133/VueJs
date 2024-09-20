<template>
  <div>
    <div :class="{ active: isActive }" :style="{ backgroundColor: backgroundColor }" class="block">
      Block
    </div>
    <p>isActive={{ isActive }}</p>
  </div>
</template>

<script>
export default {
  name: 'Exercise04',
  props: {
    isActive: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style scoped>
.block {
  width: 150px;
  height: 50px;
  margin: 10px;
}

.active {
  color: #fff;
}
</style>
