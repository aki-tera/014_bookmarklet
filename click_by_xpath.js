javascript:(function(){
	n=document.getElementById("username");
	n.value="your_name";
	n=document.getElementById("userpass");
	n.value="your_pass";
	n=document.evaluate("xpath_of_click", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	
	example)
	 //*[@id="loginbox"]/div[2]/input     selected by full path
	 //input[@type="image"]               selected by <input>'s element and type="image"'s attribute
	
	n.snapshotItem(0).click();
})();
