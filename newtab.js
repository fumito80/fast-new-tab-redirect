chrome.storage.local.get('url', ({ url }) => {
  url ? chrome.tabs.update({ url }) : chrome.runtime.openOptionsPage();
});
