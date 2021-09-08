export const AppConfig = {
  site_name: "Starter",
  title: "Nextjs Starter",
  description: "Starter code for your Nextjs Boilerplate with Tailwind CSS",
  locale: "en",
};

export function getStrapiMedia(url: any) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${url}`;
}
