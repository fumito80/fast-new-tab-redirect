chrome.storage.local.get('url', ({ url }) => {
	document.form.url.value = url ?? '';
});

document.form.addEventListener('submit', () => {
  chrome.storage.local.set({ url: document.form.url.value });
});
