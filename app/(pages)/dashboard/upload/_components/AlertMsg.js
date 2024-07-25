import React from 'react'
import { FileWarning } from 'lucide-react';

function AlertMsg({msg}) {
  return (
    <div className='p-[15px] bg-red-500 mt-5 text-white rounded-md text-sm flex gap-5 items-center cursor-not-allowed'>
        <FileWarning />
        {msg}
    </div>
  )
}

export default AlertMsg