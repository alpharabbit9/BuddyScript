import { Loader2Icon } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>

        <Loader2Icon className='size-10 animate-spin'/>

    </div>
  )
}

export default PageLoader