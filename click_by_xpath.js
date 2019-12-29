javascript:(function(){
	n=document.getElementById("username");
	n.value="your_name";
	n=document.getElementById("userpass");
	n.value="your_pass";
	n=document.evaluate("xpath_of_click", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	n.snapshotItem(0).click();
})();
