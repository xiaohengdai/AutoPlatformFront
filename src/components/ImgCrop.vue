<template>
  <div class="tab-container">
    <ImgCutter v-on:cutDown="cutDown">
      <button slot="open">选择图片</button>
    </ImgCutter>
  </div>
</template>
<script>
import ImgCutter from "vue-img-cutter";
export default {
  components: {
    ImgCutter,
  },
  methods:{
    //裁剪
    forIe9(index){
      this.valueIndex=index
      this.$refs.imgCutterModal0.handleOpen({
        name:'img',
        src:this.value[index],
        width:400,
        height:400,
      });
    },
    //裁剪完执行上传事件
    cutDown(fileName) {
      var imgGs = fileName.dataURL.split(';')[0].split('/')[1]
      console.log("imgGs:"+imgGs)
      // var file = this.dataURLtoBlob(fileName.dataURL, '33333.' + imgGs)
      // var formData = new FormData()
      // formData.append('file', file)
      // this.axios.post('/admin/sys-file/upload', formData).then((res) => {
      //   this.value[this.valueIndex] = this.baseImgUrl + res.data.data.bucketName + '/' + res.data.data.fileName
      //   this.$forceUpdate()
      // })
    },
  }

};
</script>
