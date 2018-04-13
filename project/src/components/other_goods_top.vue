<template>
  <div class="other_goods_top">
    <div id="vLife-top" class="topTitle">
      <span id="topBack" class="topBack"></span>
      <form class="vLife-search-form" action="/Product/ProductList" accept-charset="utf-8">
       <input id="search-btn" type="submit" class="vLife-search-icon" value="">
        <input id="search-input" class="vLife-search-input" type="search" name="keyWord"  autocomplete="off" placeholder="上千好物等你挑选">
      </form>
      <span class="vLife-icon"></span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'other_goods_top',

  data () {
    return {
      message: '头部'
    }
  }
}
</script>
<style src="../../static//css/public.css"></style>
<style src="../../static/css/other_goods_content.css"></style>
