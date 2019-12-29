javascript:(function(){
	n=document.getElementById("username");
	n.value="your_name";
	n=document.getElementById("userpass");
	n.value="your_pass";
	function nn(){return button_submit('val1', 'val2');};
	
	example)
	<html>
   <body>
    <button type="submit" onclick="return button_submit('val1', 'val2');">login</button>
   </body>
  </html>
	
	nn();
})();
