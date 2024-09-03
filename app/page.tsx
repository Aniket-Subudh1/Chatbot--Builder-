"use client"
import React, { useEffect, useState } from 'react'
import Hero from '@/utils/user/Hero'
import Chatbot from '@/utils/user/Chatbot'
import Booking from '@/utils/user/Booking'
import { useSearchParams } from 'next/navigation'
const page = () => {
  const searchParams = useSearchParams()
  const [showBooking,setShowBooking] = useState(false)
  useEffect(()=>{
  if(searchParams.get('id')!=null){
    setShowBooking(true)
  }
  },[])
  return (
    <div>
      {!showBooking&&<Hero/>}
      {showBooking&&<Booking/>}
      <div className='absolute bottom-0 right-0 '>
        {!showBooking&&<Chatbot/>}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </div>
    </div>
  )
}

export default page
