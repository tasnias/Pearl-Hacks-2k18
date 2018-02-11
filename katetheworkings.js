function processImage4()
{
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
  //
  // Also, if you want to use the celebrities model, change "landmarks" to "celebrities" here and in
  // uriBuilder.setParameter to use the Celebrities model.
  var uriBase = "https://eastus.api.cognitive.microsoft.com/vision/v1.0/analyze";

  // Request parameters.
  var params =
  {
    "visualFeatures": "Description",
  };

  var sourceImageUrl = "http://maxpixel.freegreatpicture.com/static/photo/2x/People-Exposure-Studio-Pants-Design-Photography-2604730.jpg";

  // Perform the REST API call.
  $.ajax
  ({
      url: uriBase + "?" + $.param(params),

      // Request headers.
      beforeSend: function(xhrObj)
      {
        xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
      },

      type: "POST",

      // Request body.
      //'data:image/jpeg;base64,' + btoa('your-binary-data');
      data: '{"url": ' + '"' + sourceImageUrl + '"}',
  })

    .done(function(data)
    {
      //var temp = 55;
      var arr = JSON.stringify(data, null, 2);
      //if (arr.includes("pants"))
        var pants = sourceImageUrl
      if (temp < 70)
      document.querySelector("#sourceImage4").src = pants;
    })

    .fail(function(jqXHR, textStatus, errorThrown)
    {
      // Display error message.
      var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
      errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
      alert(errorString);
    });
};
