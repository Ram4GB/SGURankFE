<template>
  <div>
    <el-result
      icon="error"
      title="404"
      sub-title="Không tìm thấy trang"
    >
      <template #extra>
        <el-button
          type="primary"
          @click="handleBack"
        >
          Quay lại
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'NotFound',
  setup() {
    const router = useRouter();

    return {
      handleBack: router.back,
    };
  }
};
</script>

<style>

</style>