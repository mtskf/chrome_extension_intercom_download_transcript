chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'download_transcript' && document.querySelector('.conversation__view__stream-wrapper')) {
    const dom = document.querySelector('.conversation__view__stream-wrapper').cloneNode(true);
    const conversation_id = dom.dataset.conversationId;
    dom.querySelector('.conversation__card__content-expanded__controls').remove();
    const sspage = new XMLSerializer().serializeToString(dom);
    const blob = new Blob(['<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://mtskf.github.io/intercom.css"></head><body>' + sspage + '</body></html>'], { "type" : "text/plain" });
    const url = window.URL;
    const bloburl = url.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = conversation_id + '.html';
    a.href = bloburl;
    a.click();
    a.remove();
    dom.remove();
  }
});
