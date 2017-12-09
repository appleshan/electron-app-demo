$(() => {
  const host = "http://192.168.14.56:18080";
  const app_url = "/DaanReport/v3/api/report/sendTimeOutPdf?time=";

  const input = document.getElementById("text-input");

  $("#create_button").bind("click", function() {
    if (!input.validity.valid) {
      $("#results").css("background-color", "yellow");
      $("#results").text( "只能输入 2 到 5 位数字. 不能是字母或其他特殊字符." );
      return;
    }

    const time_val = $("#text-input").val();
    const request_url = host + app_url + time_val;
    $.ajax({
      url: request_url,
      method: "GET",
      cache: false,
      beforeSend: function( xhr ) {
        $("#create_button").attr('disabled','disabled');
      }
    })
    .done(function( restResponse ) {
      $("#results").css("background-color", "yellow");
      if(restResponse.success) {
        $("#results").text( "执行成功！" );
      }
      else {
        $("#results").text( restResponse.errorMsg );
      }
      $("#create_button").removeAttr('disabled');
    });

  });

});
