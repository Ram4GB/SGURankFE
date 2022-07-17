<template>
  <div>
    <div class="mb-15">
      <router-link to="/rank">
        <el-button type="primary">
          Tra cứu điểm thi
        </el-button>
      </router-link>
    </div>
    <div class="mb-15">
      <router-link to="/all-faculties">
        <el-button
          type="primary"
          plain
        >
          Danh sách các khoa
        </el-button>
      </router-link>
    </div>
    <!-- <div class="mb-15">
      <router-link to="/about-us">
        <el-button type="primary">
          Về tụi mình
        </el-button>
      </router-link>
    </div> -->
    <div class="mb-15">
      <router-link to="/qa">
        <el-button type="primary">
          Câu hỏi thường gặp
        </el-button>
      </router-link>
    </div>
    <div class="mb-15">
      <router-link
        type="primary"
        to="/contact-us"
      >
        <el-button
          type="primary"
          plain
        >
          Liên hệ
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped lang='scss'>
.el-button {
  width: 100%;
  padding: 25px 16px;
  text-transform: uppercase;
}
</style>