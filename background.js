(function() {
  chrome.action.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, {text: 'download_transcript'});
  });
})();

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "download_transcript") {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {text: 'download_transcript'});
    });
  }
});