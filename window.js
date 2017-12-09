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

    const request_url = host + app_url + time_val;
    $.ajax({
      url: request_url,
      method: "GET",
      cache: false
    })
    .done(function( restResponse ) {console.log("done")
      $("#results").css("background-color", "yellow");
      $("#results").text( restResponse.errorMsg );
    });

  });

});
