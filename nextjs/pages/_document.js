import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>

      <Head>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css' type='text/css' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
