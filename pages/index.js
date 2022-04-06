import Categories from '../components/Categories'

export default function Home() {
  return (
    <div className='container py-3'>
      {/* logo */}
      <div className='text-center'>
        <img src='/logo.svg' alt='logo' className='img-fluid' />
      </div>
      <Categories />
    </div>
  )
}
