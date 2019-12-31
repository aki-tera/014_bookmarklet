javascript:(function(){
  n=document.getElementsByName("username");
  n[0].value="your_name";
  n=document.getElementsByName("userpass");
  n[0].value="your_pass";
  n=document.getElementById("userlogin");
  n[0].submit();
})();
