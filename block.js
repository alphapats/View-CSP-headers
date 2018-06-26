
chrome.webRequest.onHeadersReceived.addListener(check_CSP, {
    urls: ["<all_urls>"],
    types: ["main_frame", "sub_frame"]
    }, ["blocking", "responseHeaders"]);

function check_CSP(details) {

        var headers = details.responseHeaders;
        var jLen=headers.length;
        var flag=false;
        for (var j = 0; j !== jLen; ++j) {
            var header = headers[j];
            var name = header.name.toLowerCase();
            //alert(header.name+":       "+header.value + details.url);

            if (name !== "content-security-policy" &&
                name !== "x-webkit-csp") {
                continue;
            }
            else
            {
              flag=true;
              alert(header.value + details.url);
              
            }
                       
            }
            
           
            if(!flag){
              alert("no CSP header"+details.url);
              
            }
        return {responseHeaders: headers};
    
}



