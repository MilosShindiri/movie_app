const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

export const ImageSizes = {
  W92: "w92",
  W154: "w154",
  W185: "w185",
  W300: "w300",
  W342: "w342",
  W500: "w500",
  W780: "w780",
  Original: "original",
} as const;

export type ImageSize = (typeof ImageSizes)[keyof typeof ImageSizes];

export const getImageUrl = (
  path: string,
  size: ImageSize = ImageSizes.W300
): string => {
  if (!path) return "";
  return `${BASE_IMAGE_URL}/${size}${path}`;
};
