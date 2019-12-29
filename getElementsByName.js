javascript:(function(){
  n=document.getElementsByName("username");
  n.item(0).value="your_name";
  n=document.getElementsByName("userpass");
  n.item(0).value="your_pass";
  n.item(0).submit();
})();
