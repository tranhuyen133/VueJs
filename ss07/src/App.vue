<script setup>
import { ref } from 'vue'; // Import ref to manage reactivity
import BaseButton from "./components/BaseButton.vue";
import ParentComponents from "./components/ParentComponents.vue";
import SlotComponent from "./components/SlotComponent.vue";
import ParentComponent from "./components/Baitap/Bai1/ParentComponent.vue";
import ProductParent from "./components/Baitap/Bai2/ProductParent.vue";
import CountParent from "./components/Baitap/Bai3/CountParent.vue";
import TodoApp from "./components/Baitap/Bai4/TodoApp.vue";
import Modal from "./components/Baitap/Bai5/Modal.vue";
import Card from "./components/Baitap/Bai6/Card.vue";
import MessageParent from "./components/Baitap/Bai7/MessageParent.vue";
import ListUser from "./components/Baitap/Bai8/ListUser.vue";

const viewDetails = () => {
  alert('Xem chi tiết sản phẩm');
};

</script>
<template>
  <div>
    <h1>Home Page</h1>
    <p>_______________________________________________</p>
    <ParentComponents></ParentComponents>
    <p>_______________________________________________</p>
    <base-button title="Click Click"></base-button>
    <p>_______________________________________________</p>
    <SlotComponent>
      <a href="">Facebook</a>
    </SlotComponent>

    <BaseButton> Click me </BaseButton>

    <ParentComponent />
    <ProductParent />
    <CountParent />
    <TodoApp />

    <div>
      <Modal title="Thông báo từ hệ thống">
      <p>Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút 'Close'.</p>
    </Modal>
    </div>

    <div>
    <Card>
      <template #header>
        Thông tin sản phẩm
      </template>
      <template #body>
        Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật và giá cả hợp lý.
      </template>
      <template #footer>
        <button @click="viewDetails">Xem chi tiết</button>
      </template>
    </Card>
  </div>

    <MessageParent />

    <ListUser />
  </div>
</template>

<style></style>
