import { parseAssetId } from "@sanity/asset-utils";
import { buildFileUrl } from "@sanity/asset-utils";
import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
});

export const UrlFor = (source: any) => {
    try {
        return ImageUrlBuilder({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        }).image(source)
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const VideoUrlFor = (source: any) => {
    try {
        const parsedAsset = parseAssetId(source.asset._ref);
        return buildFileUrl(parsedAsset, {
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}