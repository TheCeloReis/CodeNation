const fetch = require('node-fetch');
const sha1 = require('js-sha1');
const path = require('path');

fetch('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=98c352ac18b1d800cedb01f8c1a5ad218e5b59d3')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

fetch('https://httpbin.org/post', {
  method: 'post',
  body:    'form',
  headers: { "numero_casas": "4",
  "token": "98c352ac18b1d800cedb01f8c1a5ad218e5b59d3",
  "cifrado":
   "tewxmrk gshi jvsq xli mrxivrix mrxs tvshygxmsr gshi mw pmoi gliamrk kyq jsyrh mr xli wxviix. yrorsar",
  "decifrado": "",
  "resumo_criptografico": "faf16842f9510b9db510b9dcf3694286f2b0d053" },
})
.then(res => res.json())
.then(json => console.log(json));




  
  

