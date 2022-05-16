import Head from 'next/head'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>

      <main>{ children }</main>

      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'
        strategy='beforeInteractive'
      />
    </div>
  )
}
