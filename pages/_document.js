import Document, {Head, Main, NextScript} from "next/document"
import {ServerStyleSheet} from "styled-components"

class Html extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html lang="en-us">
        <Head>
          <meta httpEquiv="X-UA-Compatible" />
          <meta name="viewport" content="width=device-width" initial-scale="1.0" />
          <meta description="Front-end web developer in Seattle, WA" />
          <meta name="keywords" content="HTML, CSS, JavaScript, React, Web Development, Frontend" />
          <meta name="author" content="Mark Palfreeman" />
          <title>Mark Palfreeman</title>
          {styleTags}
          <link rel="stylesheet" type="text/css" href="/static/global.css" />
        </Head>
        <body>
          <div>{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Html
