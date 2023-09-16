import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS + Materialize template</title>
      </Head>

      <h3>Hello World!</h3>

      <h4>This is a simple template for getting up and running with <Link href='https://archives.materializecss.com/0.100.2/' passHref><a>Materializecss</a></Link></h4>

      <p>Built on <Link  href='https://nodejs.org/en/' passHref><a>nodejs</a></Link> and <Link  href='https://nextjs.org/'><a>nextjs</a></Link></p>
      <p>404 error asset from <Link href='https://unsplash.com/'passHref><a>https://unsplash.com/</a></Link> by <Link  href='https://unsplash.com/@jack_1?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' passHref><a className='remi-attr' target='_blank' rel='noopener noreferrer' title='Download free do whatever you want high-resolution photos from Rémi Jacquaint'><span className='remi-span'><svg className='remi-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><title>unsplash-logo</title><path d='M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z'></path></svg></span><span className='remi-span2'>Rémi Jacquaint</span></a></Link></p>

      <div className='row'>
        <div className='col s3'><h5>Software</h5></div>
        <div className='col s2'><h5>Version</h5></div>
        <div className='col s5'><h5>Documentation</h5></div>
      </div>

      <div className='row'>
        <div className='col s3'>jQuery</div>
        <div className='col s2'>3.2.1</div>
        <div className='col s5'><Link href='https://api.jquery.com/' passHref><a>https://api.jquery.com/</a></Link></div>
      </div>

      <div className='row'>
        <div className='col s3'>Materializecss</div>
        <div className='col s2'>0.100.2</div>
        <div className='col s5'><Link href='https://archives.materializecss.com/0.100.2/' passHref><a>https://archives.materializecss.com/0.100.2/</a></Link></div>
      </div>

      <div className='row'>
        <div className='col s3'>Google Material Icons</div>
        <div className='col s2'>-</div>
        <div className='col s5'><Link href='https://google.github.io/material-design-icons/' passHref><a>https://google.github.io/material-design-icons/</a></Link></div>
      </div>

      <div className='divider' />

      <h4>Folder layout:</h4>

      <div className='row'>
        <div className='col s4'>
          <strong>folder</strong>
        </div>
        <div className='col s8'>
          <strong>description</strong>
        </div>
      </div>

      <div className='row valign-wrapper'>
        <div className='col s4'>
          <code className='grey lighten-2'>components</code>
        </div>
        <div className='col s8'>
          <p>Add functional react components that only <code>return()</code> generic fragments such as buttons, blocks of ul + li&apos;s, etc. that may or may not take props.</p>
        </div>
      </div>

      <div className='row valign-wrapper'>
        <div className='col s4'>
          <code className='grey lighten-2'>context</code>
        </div>
        <div className='col s8'>
          <p>Add functional react components that <code>return()</code> context for your app, such as Theming, Networking, Global State values, etc.  Be sure to export a context and provider.</p>
        </div>
      </div>

      <div className='row valign-wrapper'>
        <div className='col s4'>
          <code className='grey lighten-2'>layout</code>
        </div>
        <div className='col s8'>
          <p>Add generic layout for pages here.  Template uses one layout for entire app to include required external scripts and generic <code>{ '<meta>' }</code> info.</p>
        </div>
      </div>

      <div className='row valign-wrapper'>
        <div className='col s4'>
          <code className='grey lighten-2'>pages</code>
        </div>
        <div className='col s8'>
          <p>Add pages to route here.</p>
          <p><code>/</code> corresponds to <code>pages/index.js</code></p>
          <p><code>/location1</code> corresponds to <code>pages/location1/index.js</code></p>
          <p><code>/location1/location2/</code> corresponds to <code>pages/location1/location2/index.js</code></p>
          <p>Read more about routing in the <Link href='https://nextjs.org/docs/routing/introduction'>nextjs documentation</Link>.</p>
        </div>
      </div>

      <div className='row valign-wrapper'>
        <div className='col s4'>
          <code className='grey lighten-2'>public</code>
        </div>
        <div className='col s8'>
          <p>Add site assets here.  Media, images, static documents, favicon, etc.  All files referenced from <code>/</code> according to the folder structure within.</p>
        </div>
      </div>

      <div className='row valign-wrapper'>
        <div className='col s4'>
          <code className='grey lighten-2'>styles</code>
        </div>
        <div className='col s8'>
          <p>Place css files here.  Files are able to be imported in to components/pages as in <code>_app.js</code>.</p>
        </div>
      </div>
    </>
  )
}
