'use server'

import fetch from 'node-fetch'
import FormData from 'form-data'
import fs from 'node:fs'
import path from "path";
import { writeFile } from "fs/promises";
import { getImageDataFromCache, saveImageDataToCache } from '@/utils/image'

export async function uploadImage(image) {
  const res = await fetch(
    "http://localhost:3000/api/image-upload", {
      method: 'POST',
      body: image,
    }
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
  res.status(200).json({ data })
}

export async function generateImage(prompts, filename) {
  const engineId = 'stable-diffusion-v1-6'
  const apiHost = process.env.API_HOST ?? 'https://api.stability.ai'
  const apiKey = process.env.NEXT_STABILITY_API_KEY
  // const filename = filepath.split('/').pop()

  console.log("Filename: ", filename)

  const im = await getImageDataFromCache(filename)
  // const image = fs.readFileSync(filepath)

  if (!apiKey) throw new Error('Missing Stability API key.')

  const formData = new FormData()

  // console.log("Image: ", image);
  console.log("im", im)
  // console.log9("FS image", fs.readFileSync(filepath))

  // formData.append('init_image', fs.readFileSync(filepath))
  formData.append('init_image', im)
  formData.append('init_image_mode', 'IMAGE_STRENGTH')
  formData.append('image_strength', .30)
  formData.append('cfg_scale', 17.5)
  formData.append('samples', 1)
  formData.append('steps', 30)

  prompts.forEach((prompt, index) => {
    formData.append(`text_prompts[${index}][text]`, prompt.text)
    formData.append(`text_prompts[${index}][weight]`, prompt.weight)
  })

  const response = await fetch(
    `${apiHost}/v1/generation/${engineId}/image-to-image`,
    {
      method: 'POST',
      headers: {
        ...formData.getHeaders(),
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    }
  )

  if (!response.ok) {
    throw new Error(`Non-200 response: ${await response.text()}`)
  }

  const responseJSON = (await response.json()) as GenerationResponse
  // const outputFilename = Date.now() + "_" + filename.replaceAll(" ", "_");
  const buffer = Buffer.from(responseJSON.artifacts[0].base64, 'base64')

  try {
    // await writeFile(
    //   path.join(process.cwd(), "public/output/" + outputFilename + ''),
    //   buffer
    // )
    await saveImageDataToCache(buffer, `output_${filename}`)
  } catch (error) {
    console.log("Error occured ", error);
  }

  return "/output/" + outputFilename
}