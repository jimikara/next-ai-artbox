import imageCache from './cache';

export function saveImageDataToCache(imageData, cacheKey) {
  console.log("Saving image to cache", cacheKey)
  imageCache.set(cacheKey, imageData);
  console.log("Cache stats", imageCache.getStats())

}

export function getImageDataFromCache(cacheKey) {
  console.log("Getting image from cache", imageCache.getStats())
  console.log("Getting image from cache", cacheKey)
  return imageCache.get(cacheKey);
}
