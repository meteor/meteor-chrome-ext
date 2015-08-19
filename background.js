var BASE_URL = 'http://meturl.meteor.com/m/';

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

function createUrl(shortLink) {
  return BASE_URL + shortLink;
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  var url = createUrl(text);
  navigate(url);
});

chrome.omnibox.setDefaultSuggestion({
  'description': 'Open ' + createUrl('%s')
});
