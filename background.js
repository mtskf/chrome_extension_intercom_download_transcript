(function() {
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'download_transcript'});
  });
  chrome.commands.onCommand.addListener(function(command) {
    if(command === "download_transcript"){
      chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: 'download_transcript'});
      });
    }
  });
})();
