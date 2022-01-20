chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.contentScriptQuery) {
    case 'fetchData':
      return true;
    default:
      return false;
  }
});
