var domain_arr = window.location.hostname.split(".");
domain_arr.shift();
var domain_str = domain_arr.join('.');

function getCookie(objName){
  var arrStr = document.cookie.split("; ");
  var count = 0;
  for(var i = 0;i < arrStr.length;i ++){
    var temp = arrStr[i].split("=");
    if(temp[0] == objName){ 
      count = 1;
      return unescape(temp[1]);
    }
  }
  if(count==0) {
    if(localStorage.getItem(objName)) return localStorage.getItem(objName);
    else return '';
  }
}
function setCookie(objName, objValue, expiresDays){
  var expiresTime;
  if(!expiresDays) {
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    expiresTime = "expires="+ d.toUTCString();
  }
  else {
    var d = new Date();
    d.setTime(d.getTime() + (expiresDays*24*60*60*1000));
    expiresTime = "expires="+ d.toUTCString();
  }
  document.cookie = objName+'='+objValue+'; domain='+domain_str+'; expires='+expiresTime+'; path=/';
  localStorage.setItem(objName, objValue);
}

function deleteCookie(objName){
  document.cookie = objName+'=; domain='+domain_str+'; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}