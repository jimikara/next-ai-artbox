import sharp from 'sharp';

export const resizeImage = async (blob: Blob, width: number, height: number) => {
  const buffer = await sharp(await blob.arrayBuffer())
    .resize(width, height)
    .toBuffer();

  return buffer;
}