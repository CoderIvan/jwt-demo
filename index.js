const base64url = require('./base64url')

console.log(
  base64url.jsonToString({ alg: 'HS256', typ: 'JWT' }), // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  base64url.jsonToString({ id: 0, mobile: '13798988787' }), // eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ
)

console.log(
  base64url.stringToJson('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'), // { alg: 'HS256', typ: 'JWT' }
  base64url.stringToJson('eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ'), // { id: 0, mobile: '13798988787' }
)

console.log(
  base64url.signature(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    'eyJpZCI6MCwibW9iaWxlIjoiMTM3OTg5ODg3ODcifQ',
    'ivan',
  ), // Hv_VQH5h6jl1f1F1-ZKyTh_baMeCLPP4q9zyOUOHhoI
)
