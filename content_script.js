chrome.runtime.onMessage.addListener( (msg, sender, sendResponse) => {
  if (msg.text === 'download_transcript' && $('.conversation__view__stream-wrapper').length) {
    const dom = $('.conversation__view__stream-wrapper').clone();
    const conversation_id = dom.data('conversation-id');
    dom.find('.conversation__card__content-expanded__controls').remove().end()
    const sspage = new XMLSerializer().serializeToString(dom[0]);
    const blob = new Blob(['<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://mtskf.github.io/intercom.css"></head><body>' + sspage + '</body></html>'], { "type" : "text/plain" });
    const url = window.URL;
    const bloburl = url.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = conversation_id + '.html';
    a.href = bloburl;
    a.click();
    a.remove();
  }
});