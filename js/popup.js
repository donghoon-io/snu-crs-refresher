function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}

document.getElementById('refresh').addEventListener('click', hello);