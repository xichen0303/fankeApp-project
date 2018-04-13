<template>
  <div class="shopping_cart">
    <h1>{{ message }}</h1>
    <div class="shoppingCar-wrap">
        <div class="ptype ">
          <span class="sp-col">在售商品：</span>

          <input type="button" name="" value="删除" id="normal-delete-selected" class="delete-selected">
          <input type="button" name="" value="全不选" id="normal-select-all" class="select-all" >





        </div>
        <div class="pmt-type-link" id="good_list"> </div>
        <div class="shoppingCar">
          <div class="car-settle-product-item">
            <input type="checkbox">
            <a class="car-settle-pi-l" href="/style/index/6374346"> <img src="http://i.vanclimg.com/140/q80/product/6/3/7/6374346/mid/6374346-1j201709191136144818.jpg"></a>
            <div class="car-settle-pi-r">
              <a href="/style/index/6374346">凡客针织外套 连帽薄款 菱形格 男款</a>
              <p class="choose-num"><span class="product-color">颜色: 藏蓝&nbsp;&nbsp;&nbsp;&nbsp;尺码: L</span>
                <i>图片待添加..</i>
              </p>
               <p class="choose-num">
                <span class="p-money">¥&nbsp;498.00</span>
                <span class="reduce"></span>
                <span class="num">
                  <input size="3" type="text" value="1">
                </span>
                <span class="n-plus"></span>
               </p>
            </div>
          </div>
        </div>
      </div>
      <div class="final-info">
        <div class="pay-money-info">
          <p class="total-price">需支付:<span class="red-w" id="totalPrice">¥&nbsp;498.00</span></p>
          <p>   </p>
          <p>   </p>
          <p class="total-amount-discount"> <span>总金额:</span><span id="totalAmount">¥&nbsp;498.00</span> <span>已优惠:</span><span id="totalDiscount">¥&nbsp;0.00</span> </p>
        </div>
        <div class="settlement">
          <input type="submit" value="结算（1）" class="set-btn red-bg" id="btnSubmit">

        </div>


      </div>
  </div>
</template>

<script>
export default {
  name: 'shopping_cart',
  data () {
    return {
      message: '购物车'
    }
  }
}
</script>
<style src="../../static//css/public.css"></style>
<style src="../../static/css/shopping_cart.css"></style>
