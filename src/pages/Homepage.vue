<template>
  <div class="mb-15">
    <router-link to="/rank">
      <el-button type="primary">
        Tra cứu điểm thi
      </el-button>
    </router-link>
  </div>
  <div class="mb-15">
    <router-link to="/all-faculties">
      <el-button type="primary">
        Danh sách các khoa
      </el-button>
    </router-link>
  </div>
  <div class="mb-15">
    <router-link to="about-us">
      <el-button type="primary">
        Về chúng tôi
      </el-button>
    </router-link>
  </div>
  <div class="mb-15">
    <router-link to="feedback">
      <el-button type="primary">
        Gửi đánh giá
      </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>

<style scoped lang='scss'>
.el-button {
  width: 100%;
  padding: 25px 16px;
  text-transform: uppercase;
}
</style>