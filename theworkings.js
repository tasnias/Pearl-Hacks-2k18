  var  num;
$(document).ready(function() {
    $("#getWeatherForcast").click(function(){
      console.log('clicked');
      var city = $("#city").val();
      var data = null;
      var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.openweathermap.org/data/2.5/weather?q=" + city +
  "&units=imperial&APPID=e8099a47b3b1f75371f9d449d0584d9f",
  "method": "GET",
}

$.ajax(settings).done(function (response) {
  console.log(response);

    var helper = '';
    $.each(response.weather, function(index,val) {
      helper += '<p><b>' + response.name + '</b></p>'+ response.main.temp + ' &deg;F ' + ' | '
       + val.main + ", "  + val.description

    });
    $("#showWeatherForcast").html(helper);
  var  num= response.main.temp;
});

 });
  });
  //var help_temp = response.main.temp;
function processImage() {
    // **********************************************
    // *** Update or verify the following values. ***
    // **********************************************

    // Replace the subscriptionKey string value with your valid subscription key.
    var subscriptionKey = "c9ff0ef0cbf2491b8b4c89572347e4dc";

    // Replace or verify the region.
    //
    // You must use the same region in your REST API call as you used to obtain your subscription keys.
    // For example, if you obtained your subscription keys from the westus region, replace
    // "westcentralus" in the URI below with "westus".
    //
    // NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
    // a free trial subscription key, you should not need to change this region.
    var uriBase = "https://eastus.api.cognitive.microsoft.com/vision/v1.0/analyze";

    // Request parameters.
    var params = {
        "visualFeatures": "Description",
    };

    // Display the image.
    var sourceImageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Japanese-market_-pointerbrand_wool_band-collar_jacket_%289598148489%29.jpg";
    // document.querySelector("#sourceImage").src = sourceImageUrl;

    // Perform the REST API call.
    $.ajax({
        url: uriBase + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",

        // Request body.
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function(data) {
      //document.querySelector("#sourceImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY0X4pN6FdoE-R49hWyseyU43shE-Ej9tLSEfaSynRiD4HUnn";

      var arr = JSON.stringify(data, null, 2);
      if (arr.includes("coat")) {
        var coaturl = sourceImageUrl
      };

    //  var temp = 63;
      if (num < 40) {
        document.querySelector("#sourceImage1").src = coaturl
      };
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
      // Display error message.
      var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
      errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
      alert(errorString);
    });
  };
