<template>
  <div> 
      <ColorBoxVue color="red" /> 
      <ColorBoxVue color="blue" /> 
      <ColorBoxVue color="green" /> 
  </div> 
</template>

<script>
export default {
  name: "ColorBox",
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.color-box-container {
  text-align: center;
  display: inline-block;
  margin: 0 20px;
}

.color-box {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

.color-name {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
