// "use server"

// import fs from 'fs';

// import MonsterApiClient from "monsterapi";

// const monsterClient = new MonsterApiClient(process.env.NEXT_PUBLIC_MONSTER_API_KEY);

// // Read the file from the server

// export const tester = async () => {

//   const filePath = 'public/uploads/1709729336287IMG_5182_copy.png'; // Adjust the file path as needed
//   const fileData = fs.readFileSync(filePath);
//   const input = {
//     prompt: "A cute cat",
//     init_image_url: fileData
// };
//   const response = await monsterClient
//     .get_response("img2img", input)
//     .then((response) => {
//       // Handle the response
//       console.log("Responseeeeeoooo:", response);
//       return response;
//     })
//     .catch((error) => {
//       // Handle API errors or timeout
//       console.error("Error:", error);
//     });

//   return response;
// }

// // // Send the POST request
// // fetch(apiUrl, requestOptions)
// //     .then(response => {
// //         if (!response.ok) {
// //             throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         return response.json();
// //     })
// //     .then(data => {
// //         console.log('File upload successful:', data);
// //     })
// //     .catch(error => {
// //         console.error('Error uploading file:', error);
// //     });