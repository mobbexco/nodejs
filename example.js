const mobbex = require('./index')
let apiKey = 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj';
let accessToken = 'd31f0721-2f85-44e7-bcc6-15e19d1a53cc';

mobbex.configurations.configure({
  apiKey: apiKey,
  accessToken: accessToken
})


mobbex.devConnect.connect({
  url: "https://example.com"
})
  .then(data => console.log(data))
  .catch(error => console.log(error))
