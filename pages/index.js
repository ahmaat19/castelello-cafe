import Head from 'next/head'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/logo.svg' />
        <meta charSet='utf-8' />
        <title>Castello Cafe</title>
        <meta name='description' content='Castello Cafe Mogadishu Somalia' />
      </Head>
      <div className='container py-3'>
        {/* logo */}
        <div className='text-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/logo.svg' alt='logo' className='img-fluid' />
        </div>
        <Categories />
      </div>
    </>
  )
}
