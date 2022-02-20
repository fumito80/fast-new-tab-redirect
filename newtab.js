const { id } = chrome.runtime;

function openNewTab({ [id]: url }) {
  if (url == null) {
    chrome.runtime.openOptionsPage();
    return;
  }
  chrome.tabs.update({ url });  
}

chrome.storage.local.get(id, openNewTab);
