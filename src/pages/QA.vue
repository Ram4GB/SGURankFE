<template>
  <div>
    <h2>Câu hỏi thường gặp</h2>

    <el-collapse>
      <el-collapse-item>
        <template #title>
          <h3>1. Hướng dẫn sử dụng tra cứu hạng</h3>
        </template>
        <p>
          Bước 1: Nhấn vào đường link để tra cứu tại <a
            style="color: blue"
            href="https://www.ram4gb.site/#/rank"
          >https://www.ram4gb.site/#/rank</a>
        </p>
        <p>Bước 2: Điền thông tin của bạn và chọn đúng khoa như hình</p>
        <img 
          :src="require('../assets/images/1.png')" 
          alt="Ảnh hướng dẫn 1"
        >
        <p>Bước 3: Nhấn nút "Tra cứu"</p>
        <img 
          :src="require('../assets/images/2.png')" 
          alt="Ảnh hướng dẫn 2"
        >
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h3>2. Xếp hạng được căn cứ vào đâu?</h3>
        </template>
        <ul>
          <li>
            Dữ liệu của app được lấy từ trang https://thongtindaotao.sgu.edu.vn/. Sau khi có sinh viên gửi yêu cầu thì tụi mình sẽ thực hiện duyệt để đảm bảo
            thông tin cung cấp là chính xác và phù hợp.
          </li>
          <li>Hệ thống sẽ thực hiện lấy toàn bộ sinh viên theo 6 kí tự đầu của khoa (VD Khoa CNTT K17 sẽ là 311741) một cách tự động, và lưu về Cơ sở dữ liệu</li>
          <li>Khi có sinh viên muốn tra cứu thì sẽ lấy dữ liệu có sẵn, sắp xếp và tính toán để hiển thị cho sinh viên</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h3>3. Hướng dẫn gửi yêu cầu</h3>
        </template>
        <p>Nếu như trong quá trình sử dụng, bạn không tìm thấy khoa của mình thì có thể thực hiện gửi yêu cầu, tụi mình sẽ cố gắng lấy điểm càng sớm các tốt</p>

        <p>
          Bước 1: Nhấn vào đường link các khoa <a
            style="color: blue"
            href="https://www.ram4gb.site/#/rank"
          >https://www.ram4gb.site/#/all-faculties</a>
        </p>
        <p>Bước 2: Nhấn nút Yêu cầu mới</p>
        <img 
          :src="require('../assets/images/3.png')" 
          alt="Ảnh hướng dẫn 3"
        >
        <li>Bước 3: Một modal hiển thị, bạn điền các thông tin chi tiết bao gồm: Mã khoa, khóa, 6 số đầu mã sinh viên</li>
        <ul>
          <li>Mã khoa: gồm 3 chữ cái đầu VD là DCT</li>
          <li>Khóa: khóa mà bạn đang theo học VD Khóa K17 thì sẽ là 17</li>
          <li>6 số đầu mã sinh viên: VD Bạn là sinh viên CNTT thì lấy 6 số đầu: 311741</li>
        </ul>
        <img 
          :src="require('../assets/images/4.png')" 
          alt="Ảnh hướng dẫn 4"
        >
        <li>Bước 4: Nhân nút Gửi đi</li>
        <img 
          :src="require('../assets/images/5.png')" 
          alt="Ảnh hướng dẫn 5"
        >
        <p>Màn hình sẽ hiển thị thông báo bạn đã gửi yêu cầu thành công</p>
        <img 
          :src="require('../assets/images/6.png')" 
          alt="Ảnh hướng dẫn 6"
        >
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h3>4. Hướng dẫn kiểm tra khóa</h3>
        </template>
        <p>Mục đích: Để kiểm tra khóa & khoa của mình đã có trên hệ thống chưa hay là đã có sinh viên nào gửi yêu cầu chưa, và tình trạng hiện tại là gì</p>
        <p>
          Bước 1: Nhấn vào đường link <a
            style="color: blue"
            href="https://www.ram4gb.site/#/rank"
          >https://www.ram4gb.site/#/all-faculties</a>
        </p>
        <p>Bước 2: Bạn có thể tìm kiếm khoa hoặc khóa mà bạn muốn VD: dct, 17, dct k17 vào ô tìm kiếm</p>
        <img 
          :src="require('../assets/images/7.png')"
        >
        <p>Chú thích các thông tin</p>
        <ul>
          <li>Được duyệt: Thông tin này đã có sinh viên trước có gửi yêu cầu và tình trạng hiện tại có thể là "duyệt" và "chưa duyệt"</li>
          <li>Số lượt tìm kiếm: Nếu khoa & khóa này chưa được duyệt và có sinh viên khác gửi yêu cầu thì sẽ tính là 1 lượt tìm kiếm</li>
          <li>Có thể tra cứu: Hệ thống có cơ sở dữ liệu khoa & khóa này rồi, bạn có thể tra cứu hạng của mình trên thống </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'QA',
};
</script>

<style lang='scss' scoped>
img {
  width: 100%;
}
</style>