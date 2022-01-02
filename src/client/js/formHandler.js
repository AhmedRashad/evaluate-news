const handleSubmit = async (event) => {
  event.preventDefault()

  let url = document.getElementById('url').value

  if(Client.urlPattern(url)) {
  console.log('url', url);

  const resultData = await postData('http://localhost:8081/api', {url: url})
 console.log('resultData',resultData);
 Client.updateUI(resultData)
  } else {
      alert('please insert a valid url');
  }
}

const postData = async (url = "", inputLink = {}) => {
console.log('link to server:',url);
  console.log('Analyzing:', inputLink);
  const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputLink)
  });
  try {
      const dataRecivde = await response.json();
      console.log('Data', dataRecivde)
      return dataRecivde;
  } catch (error) {
      console.log('error', error);
  }
};


export { handleSubmit }
