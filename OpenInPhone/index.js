var EVENT_DOM_CONTENT_LOADED = 'DOMContentLoaded';
var currentTabUrl;

function atDOMContentLoaded() {

  //Prepare the current URL in focus
  //First get the current windowId
  chrome.windows.getCurrent(function(window) {
    //Find the active tab
    chrome.tabs.query({
        active: true,
        windowId: window.id
    }, function (tabs) {
        currentTabUrl = tabs[0].url;
        //alert(currentTabUrl)  
        //Generate the QR code using Qrious library
        var qriousObj =new QRious({
          element: document.getElementById('qr'),
          size: 400,
          padding:40,
          backgroundAlpha: 0.8,
          foregroundAlpha: 0.8,
          value: String(currentTabUrl)
        }) 
   
    });
  });

        
}

document.addEventListener(EVENT_DOM_CONTENT_LOADED, atDOMContentLoaded);