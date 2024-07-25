"use client"

import React from 'react'
import UploadForm from './_components/UploadForm'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../libs/firebase/config';


const Upload = () => {
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [downloadURL, setDownloadURL] = React.useState(null);

  const uploadFile = async (file) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      }, 
      (error) => {
        console.error('Error uploading file:', error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
          console.log('File uploaded successfully:', url);
        });
      }
    );
  };

  return (
    <div className='flex flex-col justify-center p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-left m-5 ml-0'>Upload a File</h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)}/>
    </div>
  )
}

export default Upload