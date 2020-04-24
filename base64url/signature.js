const crypto = require('crypto')

function sha256(buffer, secret) {
  return crypto.createHmac('sha256', secret)
    .update(buffer)
    .digest()
}

function buferrToStringByBase64URL(buffer) {
  return buffer.toString('base64') // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ==
	  .replace(/=/g, '')
	  .replace(/\+/g, '-')
	  .replace(/\//g, '_') // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ
}

function signature(header, payload, secret) {
  return buferrToStringByBase64URL(sha256(`${header}.${payload}`, secret))
}

module.exports = signature
