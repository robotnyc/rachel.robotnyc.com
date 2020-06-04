
var client = contentful.createClient({
  space: 'sgo78rsjtx10',
  accessToken: 'nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4'
});

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      console.log(entry.fields.title)
    }
  })
});

// create variable that is a handle to the id="images" element
var imagesDiv = document.getElementById('image');

client.getAssets()
// .then((response) => console.log(response.items))
.then(function (response) {
  response.items.forEach(function (asset) {
    if (asset.fields.file.url) {
      console.log('https:' + asset.fields.file.url)
      var imageFile = document.createElement("img"); // <img>
      imageFile.src = 'https:' + asset.fields.file.url; // <img src=''>
      // imagesDiv.appendChild(imageFile); // <div id="images"
    }
  });
})
.catch(console.error)

//Get single image

client.getAsset('7orLdboQQowIUs22KAW4U')
.then(function (asset) {
  if (asset.fields.file.url) {
    console.log('https:' + asset.fields.file.url)
    var imageFile = document.createElement("img"); // <img>
    imageFile.src = 'https:' + asset.fields.file.url; // <img src=''>
    imagesDiv.appendChild(imageFile); // <div id="images"
  }
})
.catch(console.error)

// TODO
//resize images
//get content from blog, add my content, add picture



client.getEntry('73qFxyg0eEJemMBjDdR4je')
.then((entry) => console.log(entry))
.catch(console.error)