import Image from 'next/image'
import React from 'react'
import {FileText, X, FileImage, ShieldQuestion, FileArchive, FileCode } from 'lucide-react'

/**
 * Renders a file preview component.
 *
 * @param {Object} file - The file object to be previewed.
 * @param {function} removeFile - The function to remove the file.
 * @param {string} fileType - The type of the file.
 * @return {JSX.Element} The file preview component.
 */
function Filepreview({file, removeFile, fileType}) {
  let content ;

  if (fileType === 'pdf') {
    content = <FileText size={25} /> ;
  } else if (fileType === 'image') {
    content = <FileImage size={25} /> ;
  } else if (fileType === 'svg') {
    content = <FileImage size={25} /> ;
  } else if (fileType === 'zip') {
    content = <FileArchive size={25} /> ;
  } else if (fileType === 'code') {
    content = <FileCode size={25} /> ;
  } else {
    content = <ShieldQuestion size={25} /> ;
  }

  return (
    <div className='flex items-center justify-between rounded-md w-full p-2 mt-5 border-2 border-gray-200'>
      <div className='flex items-center gap-3'>
        {}
        {content}
        <div className='cursor-default text-left flex flex-col algin-items justify-center'>
          <h2 className='text-[15px]'>{file.name}</h2>
          <span className='text-[13px] text-gray-400 leading-0'>{file?.type} / {(file?.size / 1024 /1024).toFixed(2)}MB</span>
        </div>
      </div>

      <div className='cursor-pointer hover:text-indigo-600' onClick={() => removeFile()}>
        <X />
      </div>
    </div>
    )
}

export default Filepreview