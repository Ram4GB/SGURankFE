<template>
  <h2>Tra cứu hạng</h2>
  <el-form 
    ref="formRef"
    :model="form"
    :rules="rules"
    size="large"
    label-position='top'
    status-icon
  >
    <el-form-item label="Mã sinh viên" prop="id">
      <el-input v-model="form.id" />
    </el-form-item>
    <el-form-item label="Khoa" prop="faculty">
      <el-select v-model="form.faculty">
        <el-option label="Khoa CNTT K18" value="dct-k18" />
        <el-option label="Khoa CNTT K19" value="dct-k19" />
        <el-option label="Khoa CNTT K20" value="dct-k20" />
        <el-option label="Khoa CNTT K21" value="dct-k21" />
      </el-select>
    </el-form-item>
    <el-button 
      type="primary" 
      @click="handleSubmit(formRef)"
    >
      Tra cứu
    </el-button>
  </el-form>
  <h2>Kết quả</h2>
  <el-descriptions 
    :column="1" 
    :accordion="true"
    direction="horizontal"
    border
  >
    <el-descriptions-item label="Hạng">120/500</el-descriptions-item>
    <el-descriptions-item label="Mã sinh viên">3117410027</el-descriptions-item>
    <el-descriptions-item label="Học kì">HK2 Năm 2021-2022</el-descriptions-item>
    <el-descriptions-item label="Điểm trung bình tích lũy (hệ 4)">4.0</el-descriptions-item>
    <el-descriptions-item label="Điểm trung bình tích lũy (hệ 10)">4.0</el-descriptions-item>
    <el-descriptions-item label="Điểm trung bình học kì (hệ 4)">4.0</el-descriptions-item>
    <el-descriptions-item label="Điểm trung bình học kì (hệ 10)">4.0</el-descriptions-item>
    <el-descriptions-item label="Số tín chỉ đạt">21</el-descriptions-item>
    <el-descriptions-item label="Số tín chỉ tích lũy">41</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  setup() {
    const form = reactive({
        id: '',
        faculty: ''
    })
    const rules = reactive({
      id: {
        required: true,
        message: 'Mời bạn điền mã sinh viên',
        trigger: 'blur'
      },
      faculty: {
        required: true,
        message: 'Mời bạn chọn khoa',
        trigger: 'change'
      }
    });
    const formRef = ref(null);

    const handleSubmit = (formRef) => {
      formRef.validate((valid, fields) => {
        if(!valid) {
          return;
        }

        console.log(form);
      })
    }

    return {
      form,
      rules,
      formRef,
      handleSubmit
    }
  },
}
</script>

<style>

</style>