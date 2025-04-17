export const getFaviconUrl = (url) => {
  try {
    const urlObj = new URL(url);
    // Always return null for svgapi.com to use default icon
    if (urlObj.hostname === 'svgapi.com') {
      return null;
    }
    return `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`;
  } catch (error) {
    return null;
  }
}; 