
function processImage2() {
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
    var sourceImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CuuSTRMoEDBPIcOI-4Ub-BRVru-5WM88iYIva0EO004aKd98NA";
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
      if (arr.includes("dress")) {
        var dressurl = sourceImageUrl
      };

      var temp = num;
      if (temp >60.00) {
        document.querySelector("#sourceImage2").src = dressurl
      };
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
      // Display error message.
      var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
      errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
      alert(errorString);
    });
  };
