<template>
  <div class="calculation">
    <h2> Bai4 : Danh sách kết quả</h2>
    <ul>
      <li>{{ num1 }} + {{ num2 }} = {{ num1 + num2 }}</li>
      <li>{{ num1 }} - {{ num2 }} = {{ num1 - num2 }}</li>
      <li>{{ num1 }} * {{ num2 }} = {{ num1 * num2 }}</li>
      <li>{{ num1 }} / {{ num2 }} = {{ num1 / num2 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calculation',
  data() {
    return {
      num1: 10,
      num2: 10
    };
  }
};
</script>

