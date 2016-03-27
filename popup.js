function isEmpty(object) {
  for(var key in object) {
    if(object.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {type: "getContent"}, function(response) {
        var div = document.getElementById('images');
        div.style.maxHeight ='600px';
        div.style.maxWidth ='800px';
        if(isEmpty(response))
        	document.getElementById('head').innerHTML = "No pictures found :(";
        for(var i = 0; i < response.length; i++){
	        var img = new Image();
	        var url = response[i];
	        if(url.search("logo") != -1)//omit logos
	        	continue;
	        img.src = url;
	        img.style.maxHeight ='600px';
	        img.style.maxWidth ='800px';
	        img.style.minHeight ='100px';
	        img.style.minWidth = '100px';
	        img.style.textAlign ='center';
	        div.appendChild(img);
    	}
	});
});