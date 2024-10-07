<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <header class="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button @click="handleShowForm" class="btn btn-primary">
          Thêm mới nhân viên
        </button>
      </header>
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo email"
        />
        <i class="fa-solid fa-arrows-rotate" title="Refresh"></i>
      </div>
      <!-- Danh sách nhân viên -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody
          v-for="(employeeItem, index) in listEmployee"
          :key="employeeItem.id"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ employeeItem.name }}</td>
            <td>{{ employeeItem.dateOfbBirth }}</td>
            <td>{{ employeeItem.email }}</td>
            <td>{{ employeeItem.address }}</td>
            <td>
              <div
                v-if="employeeItem.status"
                style="display: flex; align-items: center; gap: 8px"
              >
                <div class="status status-active"></div>
                <span> Đang hoạt động</span>
              </div>

              <div v-else style="display: flex; align-items: center; gap: 8px">
                <div class="status status-stop"></div>
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-block">Chặn</span>
            </td>
            <td>
              <span class="button button-edit">Sửa</span>
            </td>
            <td><span class="button button-delete">Xóa</span></td>
          </tr>
        </tbody>
      </table>
      <footer class="d-flex justify-content-end align-items-center gap-3">
        <select class="form-select">
          <option selected>Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </footer>
    </main>
  </div>

  <!-- Modal xác nhận chặn tài khoản -->
  <div class="overlay" hidden>
    <div class="modal-custom">
      <div class="modal-title">
        <h4>Cảnh báo</h4>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="modal-body-custom">
        <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
      </div>
      <div class="modal-footer-custom">
        <button class="btn btn-light">Hủy</button>
        <button class="btn btn-danger">Xác nhận</button>
      </div>
    </div>
  </div>

  <!-- Modal xác nhận xóa tài khoản -->
  <div class="overlay" hidden>
    <div class="modal-custom">
      <div class="modal-title">
        <h4>Cảnh báo</h4>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="modal-body-custom">
        <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
      </div>
      <div class="modal-footer-custom">
        <button class="btn btn-light">Hủy</button>
        <button class="btn btn-danger">Xác nhận</button>
      </div>
    </div>
  </div>

  <!-- Form quản lý nhân viên -->
  <FormEmployee
    v-if="isShowForm"
    @onClose="handleCloseForm"
    :listEmployee="listEmployee"
  />
</template>

<script setup>
import { reactive, ref } from "vue";
import FormEmployee from "./FormEmployee.vue";

const listEmployee = reactive(
  JSON.parse(localStorage.getItem("employees")) || []
);

const isShowForm = ref(false);

// Hàm mở form
const handleShowForm = () => {
  isShowForm.value = true;
};

// Hàm đóng form
const handleCloseForm = () => {
  isShowForm.value = false;
};
</script>

<style></style>