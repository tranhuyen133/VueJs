<template>
  <div class="format-name">
    <h2> BAI6 :Họ và tên: {{ formatName(user) }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FormatName',
  data() {
    return {
      user: {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam'
      }
    };
  },
  methods: {
    formatName(user) {
      return `${user.firstName} ${user.lastName}`;
    }
  }
};
</script>

<style scoped>
.format-name {
  font-family: Arial, sans-serif;
}

h2 {
  font-weight: bold;
}
</style>
