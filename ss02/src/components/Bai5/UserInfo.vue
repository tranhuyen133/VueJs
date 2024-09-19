<template>
  <div class="user-info">
    <h2>BAI 5 : Thông tin cá nhân</h2>
    <ul>
      <li><strong>Họ và tên:</strong> {{ user.name }}</li>
      <li><strong>Giới tính:</strong> {{ user.gender }}</li>
      <li><strong>Ngày sinh:</strong> {{ user.dob }}</li>
      <li><strong>Email:</strong> {{ user.email }}</li>
      <li><strong>Địa chỉ:</strong> {{ user.address }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      user: {
        name: 'Nguyễn Văn A',
        gender: 'Nam',
        dob: '06/03/2024',
        email: 'nva@gmail.com',
        address: 'Thanh Xuân, Hà Nội'
      }
    };
  }
};
</script>

<style scoped>

h2 {
  font-weight: bold;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  font-size: 16px;
  margin-bottom: 5px;
}

strong {
  font-weight: bold;
}
</style>
