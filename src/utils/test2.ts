// export const generateImage = async () => {
//   const url = "https://api.monsterapi.ai/v1/generate/img2img";
//   const API_Key = ""; // Add your API key here
//   const payload = {
//     // init_image_url: "https://<url to file>",
//     init_image_url: 'http://localhost:3000/public/uploads/1709730189380IMG_5182_copy.png',
//     prompt: "a fantasy wonderland"
//   };

//   const headers = {
//     accept: "application/json",
//     "content-type": "application/json",
//     authorization: `Bearer ${API_Key}`
//   };

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     // Handle the response data as needed
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
