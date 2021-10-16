
function getdog() {
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function () {
       console.log(xhrRequest.response); 
       var parse = JSON.parse(xhrRequest.response);
       var imgurl  = parse.message;
       var image = document.getElementById('dog');
       image.src = imgurl;
      }
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random');
    xhrRequest.send();

}
var fetch = document.getElementById('btn');
fetch.addEventListener("click",getdog);