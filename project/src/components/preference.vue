<template>
  <preference_content/>

</template>
<script>
  // 头部引入
  /*import other_goods_top from '@/components/other_goods_top'*/
   // 内容引入
  import preference_content from '@/components/preference_content'
export default {
  name: 'preference',
   components:{
      preference_content
  },
  data () {
    return {
      message: '特惠页'
    }
  }
}
</script>
<style src="../../static//css/public.css"></style>
<style src="../../static/css/preference.css"></style>
