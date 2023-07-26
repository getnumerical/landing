import React, { useState } from 'react'
import Head from 'next/head'
import GeneralLayout from '@/layout/layout'
import Image from 'next/future/image'
import Loader from '@/components/loader'
import PrivacyModal from '@/components/modal/modals/privacy'




const socials = [
  {
    name: "facebook",
    path: "https://www.facebook.com/",
    img: "/facebook.svg"
  },
  {
    name: "twitter",
    path: "https://www.twitter.com/",
    img: "/twitter.svg"
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/",
    img: "/linkedin.svg"
  },
  {
    name: "instagram",
    path: "https://www.instagram.com/Getnumerical",
    img: "/instagram.svg"
  }
]


const Index = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false)
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false);



  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 || !regex.test(email)) {
      setError(true);
    }
    if (email.length > 0 && regex.test(email)) {
      setIsLoading(true);
      const res = await fetch('/api/enlist', {
        method: 'POST',
        headers:{
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        })
      })
      if (res.status === 200){
        setSuccessMsg("Congratulations! Email added successfully")
      }
      if (res.status === 400) {
        setErrorMsg("Email already waitlisted")
      }
      if (res.status === 500) {
        setErrorMsg("Server error, Please try again later")
      }
      console.log('email submitted successfully', email, res);
      setIsLoading(false)
      setEmail('');
      setError(false);
    }
  };

  return (
    <>
      <Head>
        <title>Numerical - Event Management, Payments and Wearnet - Coming soon</title>
      </Head>
      <GeneralLayout 
      children={
      <div className='relative overflow-auto flex content-center items-center justify-center'>
        <div className='container relative mx-auto'>
          <div className='items-center'>
            <div className='mt-14 ml-auto mr-auto w-full px-4 text-center lg:w-8/12'>
              <h4 className='text-white'>Our application is</h4>
              <h1 className='text-7xl font-semibold 
              leading-tight bg-gradient-to-tr
              from-[#9bc2f8]
              to-[#0057FF]
               bg-clip-text 
               text-transparent'>
              Coming Soon...
              </h1>
              <p className='text-white my-6'>
              Be one of our first users by getting notified when we launch
              </p>
            </div>
            {

            }
            <p className='text-center text-sm text-teal-500'>{successMsg}</p>
            <p className='text-center text-sm text-red-500'>{errorMsg}</p>
            <div className='flex justify-center mt-2 px-4'>
            <div className='relative md:w-4/12'>
            <form noValidate>
          <p
            className='absolute py-2.5 text-lg left-3 text-[#0057FF]'
            >
            @ 
          </p>
                <input
                  className="pl-8 border border-r-0 caret-slate-100 text-white rounded-l p-3.5 bg-transparent text-sm w-full focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              </div>
                <button onClick={handleSubmit} className="md:px-12 px-4 whitespace-nowrap py-2.5 rounded-r bg-[#0057FF] text-[#FAFBFF]">{isLoading ? <Loader /> : "Notify me"}</button>
            </div>
                <div className='text-center'>
              {error && email.length <= 0 ? (
                <p className="text-red-500 py-2">Email Address is required</p>
              ) : error && !regex.test(email) ? (
                <p className="text-red-500 py-2">Please enter a valid email address</p>
              ) : (
                ''
              )}
                </div>
                <div className='flex justify-center space-x-4 my-4'>
                {socials.map((val) => (
                  <a key={val.name} href={val.path}>
                    <Image src={val.img} alt={val.name} width={30} height={30} />
                  </a>
                ))}
                </div>
                <div className='flex justify-center'>

                <button onClick={() => setOpenPrivacy(!openPrivacy)} className='py-4 text-white hover:text-gray-400'>Privacy Policy</button>
                </div>
          </div>
        </div>
      </div>
      } 
      />
      <PrivacyModal
  openModal={openPrivacy}
  setOpenModal={setOpenPrivacy}
      />
    </>
  )
}

export default Index
