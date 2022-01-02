
function updateUI  (allData={})  {
   
    console.log('allData',allData);
      document.getElementById('data').innerHTML = ` 
      <div class="data">Polarity: ${allData.score_tag}</div>
      <div class="data">Agreement: ${allData.agreement}</div>
      <div class="data">Subjectivity: ${allData.subjectivity}</div>
      <div class="data">Confidence: ${allData.confidence}</div>
      <div class="data">Irony: ${allData.irony}</div>`;
      
}
export{updateUI}