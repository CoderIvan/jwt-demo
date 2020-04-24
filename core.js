const base64url = require('./base64url')

function encode(payload, secret) {
  const headerString = base64url.jsonToString({ alg: 'HS256', typ: 'JWT' })
  const payloadString = base64url.jsonToString(payload)

  const signatureString = base64url.signature(headerString, payloadString, secret)

  return `${headerString}.${payloadString}.${signatureString}`
}

function decode(jwtString, secret) {
  const [headerString, payloadString, signatureString] = jwtString.split('.')

  const header = base64url.stringToJson(headerString)
  const payload = base64url.stringToJson(payloadString)

  const calSignatureString = base64url.signature(headerString, payloadString, secret)

  return {
    header,
    payload,
    isVerified: signatureString === calSignatureString,
  }
}

module.exports = {
  encode,
  decode,
}
