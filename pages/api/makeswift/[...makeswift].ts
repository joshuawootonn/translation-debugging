import { MakeswiftApiHandler } from "@makeswift/runtime/next";

export default MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY!, {
  getFonts: () => [
    {
      family: "var(--font-aloevera)",
      variants: [
        {
          weight: "400",
          style: "normal",
          src: "/Aloevera.otf",
        },
      ],
    },
  ],
  appOrigin: process.env.MAKESWIFT_APP_ORIGIN,
});
