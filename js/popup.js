function hello() {
  chrome.tabs.executeScript({
    file: 'js/alert.js'
  }); 
}

document.getElementById('refresh').addEventListener('click', hello);