const data = { id_str: 'All'};

//POST request with body equal on data in JSON format
fetch('https://jtvbzuigff.execute-api.us-east-1.amazonaws.com/Prod', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success')
  //Determine the number of rows needed on the page.
  const numRows = Math.ceil(Object.keys(data).length / 4)

  //Get the Name Div where all the info will go
  const root = document.getElementById('root')
  
  //Loop through each row
  for(i = 0; i < numRows; i++) {
    
    //Create the row Div
    const row = document.createElement('div')
    row.setAttribute('class', 'w3-main w3-content w3-padding')
    row.setAttribute('style', 'max-width:1200px;margin-top:100px')
    row.setAttribute('id', `RowNumber${i+1}`)
    root.appendChild(row)
    const theRow = document.getElementById(`RowNumber${i+1}`)

    //Loop through each picture set in the row
    for(j = i*4; j<4*(i+1); j++) {
      console.log(j)
      //Create the items in the row container
      const container = document.createElement('div')
      container.setAttribute('class', 'w3-quarter w3-padding-16')
      container.id = `ContainerNumber${j}`
      theRow.appendChild(container)
      const theContainer = document.getElementById(`ContainerNumber${j}`)
      

      const DonutPic = document.createElement('img')
      DonutPic.src = `Donuts/${data[j].image_name.S}`
      DonutPic.alt = data[j].id.S
      DonutPic.setAttribute('style', 'width:100%')
      theContainer.appendChild(DonutPic)

      const DonutName = document.createElement('h3')
      DonutName.textContent = data[j].name.S
      theContainer.appendChild(DonutName)

      const DonutDesc = document.createElement('p')
      DonutDesc.textContent = data[j].description.S
      theContainer.appendChild(DonutDesc)

    }
  }
  


  






})
//Then with the error genereted...
.catch((error) => {
  console.error('Error:', error);
});