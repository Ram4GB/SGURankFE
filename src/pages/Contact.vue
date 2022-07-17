<template>
  <div style="text-align: center">
    <h2>Liên hệ</h2>
    <p>Nếu như bạn có bất cứ câu hỏi nào hay muốn góp ý, bạn có thể gửi email cho tụi mình thông qua địa chỉ <a href="mailto:name@email.com">ram4gbsi@ram4gb.site</a></p>
    <img :src="require('../assets/images/mail.gif')">
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
};
</script>

<style lang='scss' scoped>
a {
  color: blue;
}

img {
  width: 100%;
}
</style>