import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/img-brand-logo.png'

const Navbar: NextPage = () => {
  const navigation = [
    { name: 'Paket Test Darah', href: '/paket-test-darah' },
    { name: 'Laboratorium', href: '/lab' },
    { name: 'Artikel', href: '/blog' },
  ]

  return (
    <>
      <div className="flex h-24 w-full sm:items-center sm:justify-between sm:space-x-14 sm:px-20">
        <Image
          src={Logo}
          alt="logo"
          layout="intrinsic"
          className="basis-3/5 bg-none"
        />

        <div className="basis 2/5 flex h-full items-center space-x-6">
          <div className="space-x-6 font-light">
            {navigation.map((navItem) => (
              <Link key={navItem.name} href={navItem.href}>
                {navItem.name}
              </Link>
            ))}
          </div>

          <div className="sm space-x-6">
            <button className='py-2 px-5 bg-blue-100 hover:bg-blue-300 text-blue-500 hover:text-blue-700 rounded-sm '>Masuk</button>
            <button className='py-2 px-5 bg-blue-600  hover:bg-blue-800 text-white font-semibold'>Daftar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
