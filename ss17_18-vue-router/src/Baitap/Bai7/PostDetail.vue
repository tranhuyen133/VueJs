<template>
  <div>
    <h1>Chi tiết bài viết</h1>
    <p v-if="post">{{ post.title }} - Nội dung bài viết {{ post.content }}</p>
    <p v-else>Đang tải...</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

// Mô phỏng danh sách bài viết
const posts = [
  { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
  { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' },
  { id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3' },
];

// Lấy id bài viết từ URL
const route = useRoute();
const post = ref(null);

onMounted(() => {
  const postId = route.params.id;
  post.value = posts.find(p => p.id === Number(postId)) || null;
});
</script>

<style >
</style>
