const withMakeswift = require("@makeswift/runtime/next/plugin")();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en-US", "en-FR", "fr-FR"],
        defaultLocale: "en-US",
    }
};

module.exports = withBundleAnalyzer(withMakeswift(nextConfig));
