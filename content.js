function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
//console.log(srcArray);
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  	switch(message.type){
  		case "getContent":	
  			var picArray = document.getElementsByTagName("img");
			var srcArray = [];
			for(var i = 0; i < picArray.length; i++){
				if(isInArray(picArray[i].src, srcArray))
					continue;
				if(picArray[i].src.search("logo") != -1)//*******THIS HASN'T BEEN TESTED **************
	        		continue;
				srcArray.push(picArray[i].src);
			}
			//console.log(srcArray);
			sendResponse(srcArray);
			break;
		default:
			console.error("unexpected message: ", message);
  	}
});