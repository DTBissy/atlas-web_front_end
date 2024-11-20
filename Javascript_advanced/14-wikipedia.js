function createElement(data) {
  document.body.createElement('p');
  document.body.innerHTML(data);
  document.body.appendChild(paragraph);
}


function queryWikipedia(callback) {
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'


  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true)


}
