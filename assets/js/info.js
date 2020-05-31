$(document).ready(function () {
   $("#time").html(new Date().getFullYear());
   
   (function () {
      $.ajax({
         url: ('https://api.btstu.cn/yan/api.php?encode=json'),
         dataType: 'json',
         async: true,
         success: function (result) {
             $('#suiyuan').html(result.text);
         },
         error: function () {
             $('#suiyuan').html('亲...数据读取失败了(〒︿〒)');
         }
      });
   })();
});