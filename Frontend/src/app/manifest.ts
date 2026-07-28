import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Novaris Group",

        short_name: "Novaris",

        description:
            "Soluciones tecnológicas empresariales, desarrollo de software, infraestructura TI, redes, CCTV y ciberseguridad.",

        start_url: "/",

        display: "standalone",

        background_color: "#0E0E0E",

        theme_color: "#3E003F",

        orientation: "portrait",

        lang: "es",

        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}