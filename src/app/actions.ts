'use server'

import type { GenerationResponse, TextPrompt } from '@/types';


export async function generateImage(prompts: TextPrompt[], imageFormData: FormData) {
  const engineId = 'stable-diffusion-v1-6'
  const apiHost = process.env.API_HOST ?? 'https://api.stability.ai'
  const apiKey = process.env.NEXT_STABILITY_API_KEY

  if (!apiKey) throw new Error('Missing Stability API key.')

  imageFormData.append('init_image_mode', 'IMAGE_STRENGTH')
  imageFormData.append('image_strength', '.4')
  imageFormData.append('cfg_scale', '17.5')
  imageFormData.append('samples', '1')
  imageFormData.append('steps', '30')

  console.log('Prompts:', prompts)

  prompts.forEach((prompt, index) => {
    imageFormData.append(`text_prompts[${index}][text]`, prompt.text)
    imageFormData.append(`text_prompts[${index}][weight]`, prompt.weight)
  })

  const response = await fetch(
    `${apiHost}/v1/generation/${engineId}/image-to-image`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: imageFormData,
    }
  )

  if (!response.ok) {
    throw new Error(
      await response.text()
    )
  }

  const responseJSON = (await response.json()) as GenerationResponse

  return responseJSON.artifacts[0].base64;
}