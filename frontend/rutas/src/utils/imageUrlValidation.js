const IMAGE_EXTENSION_PATTERN = /\.(?:jpe?g|png|webp|gif|avif|bmp|svg)$/i;

export function isValidImageUrl(value) {
  const trimmedValue = value.trim();
  if (!/^https?:\/\//i.test(trimmedValue)) return false;

  try {
    const url = new URL(trimmedValue);
    return (
      ["http:", "https:"].includes(url.protocol) &&
      IMAGE_EXTENSION_PATTERN.test(url.pathname)
    );
  } catch {
    return false;
  }
}