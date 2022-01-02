const handleSubmit = async (event) => {
  event.preventDefault()

  // check what text was put into the form field
  let userLink = document.getElementById('url').value

  if(Client.checkURL(userLink)) {
  console.log("::: Form Submitted :::")
  console.log(userLink);

  const resultData = await postData('http://localhost:8081/api', {url: userLink})
 console.log('resultData',resultData);
 updateUI(resultData)
  } else {
      alert('Seems like an invalid URL, please try with a valid URL.');
  }
}

const postData = async (url = "", data = {}) => {
console.log('link to server:',url);
  console.log('Analyzing:', data);
  const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  });
  try {
      const newData = await response.json();
      console.log('Data received:', newData)
      return newData;
  } catch (error) {
      console.log('error', error);
  }
};

const updateUI = (allData={}) => {
   
    console.log('allData',allData);
    console.log("polarity_term",polarity_term);
      document.getElementById('polarity').innerHTML = `Polarity: ${polarity_term(allData.score_tag)}`;
      document.getElementById("agreement").innerHTML = `Agreement: ${allData.agreement}`;
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${allData.subjectivity}`;
      document.getElementById("confidence").innerHTML = `Confidence: ${allData.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${allData.irony}`;
}
const polarity_term = (score) => {
    let scoreResult;
    switch (score){
        case 'P+':
            scoreResult = 'strong positive';
            break;
        case 'P':
            scoreResult = 'positive';
            break;
        case 'NEW':
            scoreResult = 'neutral';
            break;
        case 'N':
            scoreResult = 'negative';
            break;
        case 'N+':
            scoreResult = 'strong negative';
            break;
        case 'NONE':
            scoreResult = 'without polarity';
    }
    return scoreResult.toUpperCase();
}

export { handleSubmit ,updateUI,polarity_term }
