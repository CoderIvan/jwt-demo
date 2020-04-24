function stringToJson(string) {
  return JSON.parse(string) // { id: 0, mobile: '13798988787' }
}

function bufferToString(buffer) {
  return buffer.toString('utf-8') // {"id":0,"mobile":"13798988787"}
}

function padString(input) {
  const segmentLength = 4
  const stringLength = input.length
  const diff = stringLength % segmentLength

  if (!diff) {
    return input
  }

  let position = stringLength
  let padLength = segmentLength - diff
  const paddedStringLength = stringLength + padLength
  const buffer = Buffer.alloc(paddedStringLength)

  buffer.write(input)

  // eslint-disable-next-line no-plusplus
  while (padLength--) {
    // eslint-disable-next-line no-plusplus
    buffer.write('=', position++)
  }

  return buffer.toString()
}

function stringToBuferrByBase64URL(string) {
  const string2 = padString(string.toString())
    .replace(/-/g, '+')
    .replace(/_/g, '/') // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ==

  return Buffer.from(string2, 'base64') // <Buffer 7b 22 69 64 22 3a 30 2c 22 6d 6f 62 69 6c 65 22 3a 22 31 33 37 39 38 39 38 38 37 38 37 22 7d>
}

function stringToJSONByBase64URL(string) {
  return stringToJson(bufferToString(stringToBuferrByBase64URL(string)))
}

module.exports = stringToJSONByBase64URL
