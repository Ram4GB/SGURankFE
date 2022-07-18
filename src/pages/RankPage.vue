<template>
  <div>
    <h2>HK2 2021-2022</h2>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      size="large"
      label-position="top"
      status-icon
    >
      <el-form-item
        label="Mã sinh viên"
        prop="id"
      >
        <el-input
          v-model="form.id"
          placeholder="3117410001"
        />
      </el-form-item>
      <el-button
        type="primary"
        @click="handleSubmit(formRef)"
      >
        Tra cứu
      </el-button>
    </el-form>
    <div v-if="rankUser">
      <h2>Kết quả</h2>
      <el-descriptions
        :column="1"
        direction="vertical"
        border
      >
        <el-descriptions-item label="Khoa">
          {{ faculty.displayName }}
        </el-descriptions-item>
        <el-descriptions-item label="Hạng">
          {{ rankUser.rank }}
        </el-descriptions-item>
        <el-descriptions-item label="Mã sinh viên">
          {{ rankUser.id }}
        </el-descriptions-item>
        <el-descriptions-item label="Học kì">
          {{ rankUser.semester }}
        </el-descriptions-item>
        <el-descriptions-item label="Điểm TB tích lũy (hệ 4)">
          {{ rankUser.aveAccumulatedType4Raw }}
        </el-descriptions-item>
        <el-descriptions-item label="Điểm TB tích lũy (hệ 10)">
          {{ rankUser.aveAccumulatedType10Raw }}
        </el-descriptions-item>
        <el-descriptions-item label="Điểm TB học kì (hệ 4)">
          {{ rankUser.aveSemesterType4Raw }}
        </el-descriptions-item>
        <el-descriptions-item label="Điểm TB học kì (hệ 10)">
          {{ rankUser.aveSemesterType10Raw }}
        </el-descriptions-item>
        <el-descriptions-item label="Số tín chỉ tích lũy">
          {{ rankUser.accumulatedCreditsRaw }}
        </el-descriptions-item>
        <el-descriptions-item label="Số tín chỉ đạt">
          {{ rankUser.creditsRaw }}
        </el-descriptions-item>
      </el-descriptions>
      <h2>Top 5 cao nhất khóa</h2>
      <el-descriptions
        :column="1"
        direction="vertical"
        border
      >
        <el-descriptions-item
          v-for="(user, index) in rankUser.top5"
          :key="user.id"
          :label="`Hạng ${index + 1}`"
        >
          <p>MSV: {{ user.id }}</p>
          <p>Điểm TB học kì (hệ 4): {{ user.aveSemesterType4Raw }}</p>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import axios, { handleError } from '../api/axios';
import { onMounted } from 'vue';
import { ElNotification } from 'element-plus';

export default {
  name: 'RankPage',
  setup() {
    const form = reactive({
        id: ''
    });
    const rules = reactive({
      id: {
        required: true,
        message: 'Mời bạn điền mã sinh viên',
        trigger: 'blur'
      }
    });
    const formRef = ref(null);
    const faculties = ref([]);
    const rankUser = ref(null);
    const faculty = ref(null);

    const handleSubmit = (formRef) => {
      formRef.validate((valid) => {
        if(!valid) {
          return;
        }

        const item = faculties.value.find((i) => i.prefixId === form.id.slice(0, 6));

        if(!item) {
          return ElNotification({
            message: 'Hiện tại khoa của bạn chưa có trong cơ sở dữ liệu. Bạn vui lòng gửi yêu cầu giúp tụi mình nhé.',
            type: 'error'
          });
        }

        faculty.value = item;

        getRank(form.id, item.faculty, item.k);
      });
    };

    const getFaculties = async () => {
      try {
        const result = await axios.get('/all-available-points');

        if(result.status === 200) {
          faculties.value = result.data.data;
        }
        
      } catch (error) {
        handleError(error);
      }
    };

    const getRank = async (idStudent, faculty, k) => {
      try {
        const result = await axios.get('/rank', {
          params: {
            faculty, 
            semester: '2',
            year: '20212022', 
            k, 
            idStudent,
          }
        });

        rankUser.value = result.data.data;
      } catch (error) {
        handleError(error);
      }
    };

    onMounted(async () => {
      await getFaculties();
    });

    return {
      form,
      rules,
      formRef,
      faculties,
      faculty,
      rankUser,
      handleSubmit
    };
  },
};
</script>

<style lang='scss' scoped>
.el-button {
  width: 100%;
  padding: 25px 16px;
  text-transform: uppercase;
}
</style>