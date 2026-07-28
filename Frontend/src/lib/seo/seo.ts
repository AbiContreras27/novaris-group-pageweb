import type { Metadata } from "next";

interface SEOProps {
    title: string;
    description: string;
    path?: string;
    image?: string;
}

const SITE_NAME = "Novaris Group";

const BASE_URL = "https://novarisgroup.com";

const DEFAULT_IMAGE = "/og-image.png";

export function generateMetadata({
    title,
    description,
    path = "",
    image = DEFAULT_IMAGE,
}: SEOProps): Metadata {
    const url = `${BASE_URL}${path}`;

    return {
        title,

        description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,

            description,

            url,

            siteName: SITE_NAME,

            locale: "es_CO",

            type: "website",

            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            title,

            description,

            images: [image],
        },
    };
}