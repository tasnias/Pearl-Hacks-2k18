function processImage()
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

  // Display the image.
  var sourceImageUrl = document.getElementById("inputImage").value;

  // Perform the REST API call.
  $.ajax
  ({
      url: uriBase + "?" + $.param(params),

      // Request headers.
      beforeSend: function(xhrObj)
      {
        xhrObj.setRequestHeader("Content-Type", "application/json");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
      },

      type: "POST",

      // Request body.
      data: '{"url": ' + '"' + sourceImageUrl + '"}',
  })

    .done(function(data)
    {
      var temp = 65;
      var arr = JSON.stringify(data, null, 2);
      //document.getElementById("responseTextArea").innerHTML = arr;
      var m = arr.includes("shirt");

      if (temp < 70)
      document.querySelector("#sourceImage").src = sourceImageUrl;

    })

    .fail(function(jqXHR, textStatus, errorThrown)
    {
      // Display error message.
      var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
      errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
      alert(errorString);
    });
};
