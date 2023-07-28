import React, {useState} from 'react'
import { useRouter } from 'next/router'
import useSWR from "swr"
import fetch from 'unfetch'
import dayjs from 'dayjs'
import Pagination from '@/components/pagination'
import Loader from '@/components/loader'
 
const PAGE_SIZE = 10
const Index = () => {

    const router = useRouter()
    const {slug} = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/waitlist?page=${currentPage}&limit=${PAGE_SIZE}`, fetcher)
    const totalPages = Math.ceil(data?.count / PAGE_SIZE)
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

if (slug !== 'getNumerical_watlist@'){
    return (
        <div className="text-center py-40">
        <h2 className="text-3xl mb-2 text-[#062A55]">
         Oopss... The page doesn't exist. 
        </h2>
        <a href='/'>
        <p className='text-gray-500 underline hover:text-[#062A55]'>proceed to waitlist</p>
        </a>
      </div>
    )
}


  return (
    <>
   <div className="flex flex-wrap justify-between px-4 md:px-6">
            <div className="mb-12 w-full lg:w-7/12">
              <h1 className="mb-2 mt-12 text-xl font-medium text-[#062A55]">
                Numerical Waitlist
              </h1>
    <div className="relative overflow-x-auto rounded-t-lg shadow-md">
      <table className="w-full table-auto whitespace-nowrap text-left text-sm">
        <thead className="bg-[#062A55] text-white">
          <tr>
            <th className="border border-slate-300 p-3">S/N</th>
            <th className="border border-slate-300 p-3">Date</th>
            <th className="border border-slate-300 p-3">Email</th>
          </tr>
        </thead>
        <tbody className="relative overflow-x-auto whitespace-nowrap rounded-t-lg bg-white text-sm shadow-md">
          {data?.waitlisted?.map((dat, index) => (
            <tr className="text-sm text-[#062A55]" key={dat.id}>
                <td className="border border-slate-300 px-4 py-3">
                  {currentPage === 1
                    ? index + 1
                    : (currentPage - 1) * PAGE_SIZE + (index + 1)}
                </td>
              <td className="border border-slate-300 p-3">
                {dayjs(dat.createdAt).format("ddd, MMM D, YYYY h:mm A")}
              </td>
              <td className="border border-slate-300 p-3">{dat.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
      {!data &&  
        <div className="py-24 flex justify-center">
                <Loader />
              </div>}
      {data?.length === 0 && (
        <p className="bg-white p-8 text-center text-sm font-medium text-gray-600">
          No Data Available
        </p>
      )}
    </div>
    {totalPages > 1 ? (
                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                ) : (
                  ""
                )}
    </div>
    </div>
  </>
  )
}

export default Index
