chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'download_transcript' && $('.conversation__view__stream-wrapper').length) {
    var dom = $('.conversation__view__stream-wrapper').clone();
    var conversation_id = dom.data('conversation-id');
    dom.find('.conversation__card__content-expanded__controls').remove().end()
    var sspage = new XMLSerializer().serializeToString(dom[0]);
    var blob = new Blob(['<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://mtskf.github.io/intercom.css"></head><body>' + sspage + '</body></html>'], { "type" : "text/plain" });
    var url = window.URL;
    var bloburl = url.createObjectURL(blob);
    var a = document.createElement('a');
    a.download = conversation_id + '.html';
    a.href = bloburl;
    a.click();
    a.remove();
  }
});