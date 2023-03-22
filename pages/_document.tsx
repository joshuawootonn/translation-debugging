import { Document, PreviewModeScript } from "@makeswift/runtime/next";

import { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=JetBrains+Mono:wght@400;500&family=Spline+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <PreviewModeScript
            isPreview={this.props.__NEXT_DATA__.isPreview}
            appOrigin={process.env.MAKESWIFT_APP_ORIGIN}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
