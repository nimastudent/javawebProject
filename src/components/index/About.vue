<template>
  <div class="footer">
    <div style="border-top:1px #1F1F1F solid;">
      <p class="alt" style="color:#999; line-height:0">&copy; 版权所有： &nbsp;
         <a href="" target="_blank" style="color:#999;">愿世界没有bug队</a>
        
      </p>
      <div  style="color:#999; line-height:0;margin-top:10px">
        <span>技术支持：</span>
        <a href="" target="_blank" style="color:#999;">愿世界没有bug队</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    font-family: '微软雅黑', Arial, Helvetica, sans-serif;
  }

  body {
    font-size: 1rem;
  }

  div {
    font-size: 1rem;
  }

  span {
    font-size: 1rem;
  }

  .footer {
    background: #585f6b;
    width: 100vw;
    height: 80px;
    margin: auto;
  }

  .footer .alt {
    overflow: hidden;
    padding: 20px 0;
    width: 1160px;
    margin: auto;
  }

  .footer .alt .foot {
    width: 138px;
    float: left;
  }

  .footer .alt .foot p {
    color: #FFF;
    line-height: 28px;
  }

  a{
    text-decoration: none;
  }

  .footer .alt .foot a {
    color: #999;
    display: block;
    line-height: 24px;
  }
</style>
