const { id } = chrome.runtime;

chrome.storage.local.get(id, ({ [id]: url }) => {
  if (url == null) {
    chrome.runtime.openOptionsPage();
    return;
  }
  chrome.tabs.update({ url });
});
