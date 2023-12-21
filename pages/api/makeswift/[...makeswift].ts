import { MakeswiftApiHandler } from "@makeswift/runtime/next";
import "../../../lib/makeswift/register-components";
import {runtime} from "../../../lib/makeswift/register-components";

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
  runtime,
  siteVersions: true
});
