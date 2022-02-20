const { id } = chrome.runtime;
const { url } = document.form;

chrome.storage.local.get(id, ({ [id]: redirectUrl }) => {
	url.value = redirectUrl ?? '';
});

document.form.addEventListener('submit', () => {
  chrome.storage.local.set({ [id]: url.value });
});
