import React from 'react'
import RegistrationForm from "./_components/RegistrationForm"

const Registration = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 object-cover py-12'>
      <h1 className='text-5xl'>Fill Out this form !</h1>
      <RegistrationForm />
    </div>
  )
}

export default Registration