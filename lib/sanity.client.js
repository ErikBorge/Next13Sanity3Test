import { config } from "lib/sanity.api";
import { createClient } from "next-sanity";

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const sanityClient = token => {
  return config.projectId ? createClient({ ...config, token }) : null;
};
