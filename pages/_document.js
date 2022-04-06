import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' href='/logo.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Castello Cafe</title>
        <meta name='description' content='Castello Cafe Mogadishu Somalia' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
