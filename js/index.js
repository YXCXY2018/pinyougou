// 设置轮播图的
//获得slider插件对象
// var gallery = mui('.mui-slider');
// gallery.slider({
//   interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
// });


// 轮播图部分的设置
 // 获取首页轮播图数据
 function getSwiperData() {
    // http://api.pyg.ak48.xyz/api/public/v1/home/swiperdata
    $.get("//api.pyg.ak48.xyz/api/public/v1/home/swiperdata", function (ret) {

      var html = template("swiperTpl", { arr: ret.data });
      $(".mui-slider").html(html);
      // 初始化轮播图
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 1000//自动轮播周期，若为0则不自动播放，默认为0；
      });
    })
  }

  getSwiperData();



















// 设置导航栏部分的ajax
// 1：
function getNav(){
    $.get( " http://api.pyg.ak48.xyz/api/public/v1/home/catitems"  ,function(ret){
    // console.log(ret);

    var  htmlStr=template("navTmp", {arr:ret.data} );
    $(".nav").html(htmlStr);
    })
}
getNav();
// 这里记得要调用一下，调用一下
// 2：
// 使用ajax的方法
// $.ajax({
//     url:"http://api.pyg.ak48.xyz/api/public/v1/home/catitems  ",
//     type:"get",
//     dataType:"json",
//     success:function (ret){
//    console.log(ret)
//     var  htmlStr=template("navTmp", {arr:ret.data} )
//     $(".nav").html(htmlStr);
//     // 这里是冒号
//     }
// })




// 设置goods-group部分
// 1：

function getGoods(){
    $.get( "http://api.pyg.ak48.xyz/api/public/v1/home/goodslist "  ,function(ret){
    // console.log(ret)
    var  htmlStr=template("goodsTmp", {arr:ret.data} );
    // console.log(htmlStr)
    $(".main-content").html(htmlStr);
    })
}
 getGoods();
//  2：使用ajax
// $.ajax({
//     uri:" http://api.pyg.ak48.xyz/api/public/v1/home/goodslist ",
//     type:"get",
//     // data:.data,
//     datType:"json",
//     success:function(ret1){
//         // console.log(ret1)
//         var  htmlStr=template("goodsTmp", {arr:ret1.data} );
//         //     // console.log(htmlStr)
//             $(".main-content").html(htmlStr)
//             }
 
// })




 
   







 