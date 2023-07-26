import { Fragment, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import AboutModal from '@/components/modal/modals/about'

const GeneralLayout = ({ children }) => {
const [open, setOpen] = useState(false)


  return (
    <>
    <div className='h-screen overflow-auto bg-[#141629]'>
    <div
          className='absolute h-full w-full bg-contain bg-center'
          style={{
            backgroundImage:
              "url('/patterns.svg')"
          }}>
          {/* <span
            id='overlay'
            className='absolute h-full w-full bg-black opacity-10'></span> */}
        </div>
<div className='sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white'>
            <div className='container mx-auto flex flex-1 justify-between pr-4 p-2'>
              <div className=''>
                <Link href='/' passHref>
                  <a>
                    <Image
                      className='cursor-pointer'
                      src="/logo.png"
                      alt=''
                      unoptimized
                      width={150}
                      height={150}
                    />
                  </a>
                </Link>
              </div>
              <div className='py-4'>
                <nav className='flex space-x-4 whitespace-nowrap'>
                  <p onClick={() => setOpen(!open)}
                    className='flex items-center text-sm font-medium text-[#141629] hover:cursor-pointer hover:underline'>
                    About us
                  </p>
                  <a href='mailto:contact@getnumerical.com'
                    className='hidden sm:block items-center text-sm font-medium text-[#141629] hover:cursor-pointer hover:underline'>
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* main body */}
          <main>
            <div className='py-2'>{children}</div>
          </main>
            <div className='bottom-0 absolute right-0 left-0'>
                  <Image className='text-center mx-auto' src="/numerical.webp" priority alt="numerical" width={600} height={700} />
            </div>
        </div>
        <AboutModal
        openModal={open}
        setOpenModal={setOpen}
        />
    </>
  )
}

export default GeneralLayout
