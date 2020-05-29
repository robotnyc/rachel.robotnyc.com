
const contentful = require('contentful')

const client = contentful.createClient({
  space: 'sgo78rsjtx10',
  accessToken: 'nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4'
})
//Get the blog content type
client.getContentType('<nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4')
.then((contentType) => console.log(contentType))
.catch(console.error)