

const client = contentful.createClient({
  space: 'sgo78rsjtx10',
  environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: 'nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4'
})

client.getContentType('blogPost')
.then((contentType) => console.log(contentType))
.catch(console.error)