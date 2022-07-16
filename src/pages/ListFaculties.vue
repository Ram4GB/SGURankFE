<template>
  <div>
    <h2>Danh sách khoa</h2>
    <div>
      <el-input 
        v-model="searchString" 
        placeholder="Tìm kiếm: dct, k17, dct k17,..." 
      />
      <el-button
        type="primary"
        @click="toggleDrawer"
      >
        Yêu cầu mới
      </el-button>
    </div>
    <el-descriptions
      :column="1"
      direction="vertical"
      border
    >
      <el-descriptions-item
        v-for="faculty in finalFaculties"
        :key="faculty.name"
        :label="`${faculty.displayName} HK2 2021-2022`"
      >
        <p>
          Được duyệt:
          <el-icon
            v-if="faculty.isApproved"
            color="green"
            :size="20"
          >
            <SuccessFilled />
          </el-icon>
          <el-icon
            v-else
            color="red"
            :size="20"
          >
            <CircleCloseFilled />
          </el-icon>
        </p>
        <p>Số lượt tìm kiếm: {{ faculty.foundCount }}</p>
        <p>
          Có thể tra cứu:
          <el-icon
            v-if="faculty.isAvailable"
            color="green"
            :size="20"
          >
            <SuccessFilled />
          </el-icon>
          <el-icon
            v-else
            color="red"
            :size="20"
          >
            <CircleCloseFilled />
          </el-icon>
        </p>
      </el-descriptions-item>
    </el-descriptions>
    <el-drawer
      v-model="isShowDrawer"
      size="100%"
      direction="btt"
    >
      <el-form
        ref="formRef"
        :model="form"
        size="large"
        label-position="top"
        status-icon
        :rules="rules"
      >
        <h2>Mẫu yêu cầu khoa & khóa mới</h2>
        <p>Nếu như bạn không tìm thấy khoa hoặc khóa của mình, bạn có thể tạo mới để tụi mình có thể hỗ trợ bạn. Trễ nhất là 1 ngày sẽ có dữ liệu điểm. Cảm ơn bạn nhé</p>
        <el-form-item
          label="Mã khoa"
          prop="faculty"
        >
          <el-input
            v-model="form.faculty"
            :maxlength="3"
            placeholder="DCT"
          />
        </el-form-item>
        <el-form-item
          label="Khóa"
          prop="k"
        >
          <el-input-number
            v-model="form.k"
            :controls="false"
            min="17"
            placeholder="17"
          />
        </el-form-item>
        <el-form-item
          label="6 số đầu của MSV"
          prop="prefixId"
        >
          <el-input
            v-model="form.prefixId"
            maxlength="6"
            placeholder="311741"
          />
        </el-form-item>
        <el-button
          type="primary"
          @click="handleSubmitForm(formRef)"
        >
          Gửi đi
        </el-button>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { handleError } from '../api/axios';
import axios from '../api/axios';
import { onMounted } from 'vue';
import { ElNotification } from 'element-plus';

export default {
  setup() {
    const faculties = ref([]);
    const isShowDrawer = ref(false);
    const formRef = ref(null);
    const form = reactive({
      faculty: '',
      k: null,
      prefixId: ''
    });
    const rules = reactive({
      faculty: {
        required: true,
        message: 'Mời bạn điền mã khoa',
        trigger: 'blur'
      },
      k: {
        required: true,
        message: 'Mời bạn điền khóa',
        type: 'number',
        trigger: 'blur',
      }
    });
    const searchString = ref('');
    const finalFaculties = computed(() => {
      return faculties.value.filter((item) => {
        return item.displayName.toLowerCase().includes(searchString.value.toLowerCase())
          || searchString.value.toLowerCase().includes(item.displayName.toLowerCase());
      });
    });

    const handleMounted = async () => {
      try {
        const result = await axios.get('/all-points');

        if(result.status === 200) {
          faculties.value = result.data.data;
        }
      } catch (error) {
        handleError(error);
      }
    };

    const toggleDrawer = () => {
      isShowDrawer.value = !isShowDrawer.value;
    };

    const handleSubmitForm = () => {
      formRef.value.validate(async (valid) => {
        if(!valid) {
          return;
        }

        try {
          const result = await axios.post('/point', form);

          if(result.status === 201) {
            ElNotification({
              message: 'Gửi yêu cầu thành công, tụi mình sẽ sớm xử lý. Cảm ơn bạn rất nhiều',
              type: 'success'
            });

            toggleDrawer();
            handleMounted();

            form.faculty = '';
            form.k = null;
            form.prefixId = '';
          }
        } catch (error) {
          handleError(error);
        }
      });
    };

    onMounted(() => {
      handleMounted();
    });
    
    return {
      faculties,
      isShowDrawer,
      toggleDrawer,
      rules,
      form,
      formRef,
      handleSubmitForm,
      searchString,
      finalFaculties
    };
  }
};
</script>

<style lang='scss' scoped>
.el-button {
  margin-top: 1px;
  margin-bottom: 10px;
  width: 100%;
  padding: 25px 16px;
  text-transform: uppercase;
}
</style>