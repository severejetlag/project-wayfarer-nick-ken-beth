$(document).ready(function () {

  console.log("linked!");

  var singleWidget = uploadcare.SingleWidget('[role=uploadcare-uploader]');

  singleWidget.onUploadComplete(function(info) {
      console.log(info);
      console.log(info.originalUrl);
      console.log("upload complete");
      $('.personalIcon').attr("src",info.originalUrl);
  });



});
