// interface GenerationResponse {
//   artifacts: Array<{
//     base64: string
//     seed: number
//     finishReason: string
//   }>
// }

// let basepath = "http://localhost:3000"

// export async function uploadImage(image) {
//   const res = await fetch(
//     "http://localhost:3000/api/image-upload", {
//       method: 'POST',
//       body: image,
//     }
//   )

//   if (res.ok) {
//     const data = await res.json()
//     return data.data
//   }
// }