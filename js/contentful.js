
var client = contentful.createClient({
  space: 'sgo78rsjtx10',
  accessToken: 'nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4'
});


//IMAGES//
//Function to take image element by ID and set the src to contentful asset ID

function imageSetSourceFromAsset(htmlID, assetID) {
  // create variable that is a handle to the html ID element
  var imageElm = document.getElementById(htmlID);

  //Get header image from contentful
  client.getAsset(assetID)
  .then(function (asset) {
    if (asset.fields.file.url) {
      console.log('https:' + asset.fields.file.url)
      imageElm.src = 'https:' + asset.fields.file.url; // <img src=''>
    }
  })
  .catch(console.error)

}
//Set image header
imageSetSourceFromAsset('imageHeader','5eDsPCyVtqJc1uDdLdN1Xp');

//Set image footer
imageSetSourceFromAsset('imageFooter','5eDsPCyVtqJc1uDdLdN1Xp');





//Get Software Implementation entry
client.getEntry('1xT2SUdopy1JCedFJ563S1')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);
    
  }
})
.catch(console.error)





// TODO
//resize images
//get content from blog, add my content, add picture