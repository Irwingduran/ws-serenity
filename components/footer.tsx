import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
  <footer className="bg-[#77B5B2] py-8 px-4 text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            <Link href="/">  
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="mr-4 rounded-2xl"
              />
              <div>
                <h1 className="text-white text-xl font-semibold">Serenity Surgery Planner</h1>
                <p className="text-white text-sm">MEXICANS SPECIALISTS</p>
              </div>
            </div>
          </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/#about" className="text-sm">
                About
              </Link>
              <Link href="/#services" className="text-sm">
                Services
              </Link>
              <Link href="/#partners" className="text-sm">
              Partner Doctors
              </Link>
              <Link href="/#contact" className="text-sm">
                Contact
              </Link>
            </nav>
            <p className="text-sm mt-4 md:mt-0">© 2025 Delta by <a href="https://marketingmedicos.com.mx/" className='hover:text-yellow-200'>Imagen Medica</a>. All rights reserved.</p>
          </div>
        </footer>
  )
}

export default Footer