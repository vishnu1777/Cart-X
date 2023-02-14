import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
export const client = sanityClient({
  projectId: "7mlmbbix",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token:
    token ||
    "skBPyjqKKyarpKhvHyZHJtLcGM6jfSvRhKjKbJxDlOXcITY8k6HxKZ55RkcmmM00NoG5kh8y78ermRi9SEE6A9SzvAqt7T29TgDH7W8hz4a9uYz5CcJrCeGLSRVojgFSQmCYOnMKQqacwiT7CFkvk1bhwco9PLtYYkzZJaewy33lNLPU0GKk",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
