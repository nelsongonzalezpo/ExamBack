//Endpoints
const express = require('express')

const moment = require('moment')
const CryptoJS = require('crypto-js');

const data_router = express.Router();
const Data = require('../Models/data');
var QRCode = require('qrcode');

//Get all shit from db
data_router.get('/getQR', (req, res) => {
  Data.find({})
    .then(data => res.send(convertirQR(data)))
    .catch((error) => console.log(error));


})

function auth(v1, v2) { 
  let resultado = false
  if (v1 == v2) resultado = true
  return resultado
}

function decrypt(val) { 
  var decryptedBytes = CryptoJS.AES.decrypt(val, "test");
  var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
}

console.log(decrypt('U2FsdGVkX1+k3F02qs797jdpchsd07rIs+46wfcqJms='))

//get base64
data_router.post('/auth', async (req, res) => {
  Data.findOne({ email: req.body.email }, (error, docs) => {
    let p1 = req.body.password
    let p2 = docs.password
    let newVal = decrypt(p1)
    let resultado = auth(p2, newVal)
    if (resultado) res.send(docs)
    else res.send("Credenciales Invalidas")
  })

})


//get base64
data_router.post('/specificQR', async (req, res) => {
  Data.findOne({ emai: req.body.emai }, (error, docs) => {
    let base64 = convertirQR(docs)

    base64.then((value) => {
      //replace the useless
      var strImage = value.replace(/^data:image\/[a-z]+;base64,/, "");
      res.send({ fullUrl: value, url: strImage })         // expected output: 123
    });

  })

})


//Returns base64 from
function convertirQR(data) {

  let base64 = QRCode.toDataURL(JSON.stringify(data))
    .then(url => {
      return url
    })
    .catch(err => {
      console.error(err)
    })

  return base64

}

//Remove "years ago" w regex
function getAge(date) {

  const age = moment().diff(date, 'years');
  let edad = moment(date, "DD-MM-YYYY").fromNow();

  return edad;

}

function getPounds(weight) {

  return weight * 2.2

}


module.exports = data_router;

