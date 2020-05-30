

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'sgo78rsjtx10',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4'
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("31TNnjHlfaGUoMOwU0M2og")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));