function jsonToString(json) {
  return JSON.stringify(json) // {"id":0,"mobile":"13798988787"}
}

function stringToBuffer(string) {
  return Buffer.from(string, 'utf-8') // <Buffer 7b 22 69 64 22 3a 30 2c 22 6d 6f 62 69 6c 65 22 3a 22 31 33 37 39 38 39 38 38 37 38 37 22 7d>
}

function buferrToStringByBase64URL(buffer) {
  return buffer.toString('base64') // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ==
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_') // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ
}

function jsonToStringByBase64URL(json) {
  // eslint-disable-next-line max-len
  return buferrToStringByBase64URL(stringToBuffer(jsonToString(json))) // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ
}

module.exports = jsonToStringByBase64URL
