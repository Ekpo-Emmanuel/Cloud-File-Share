"use client"

import React from 'react'
import UploadForm from './_components/UploadForm'

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



/**
 * Uploads a file to Firebase storage.
 *
 * @param {File} file - The file to be uploaded.
 * @return {void}
 */
const Upload = () => {
  const firebaseConfig = {
    storageBucket: 'file-share-app-5b54a.appspot.com'
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  /**
   * Uploads a file to the server.
   *
   * @param {object} file - The file to be uploaded.
   * @return {void}
   */
  const uploadFIle = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, '/file-upload' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      console.log("successfully uploaded " + file.name);
    }, )

  }
  
  return (
    <div className='flex flex-col justify-center p-5 px-8 md:px-28'>
      {/* <h2 className='text-[20px] text-left m-5 ml-0'>Start <strong class='text-primary'>Uploading</strong> Files and <strong class='text-primary'>Share it</strong></h2> */}
      <h2 className='text-[20px] text-left m-5 ml-0'>Upload a File</h2>
      <UploadForm uploadBtnClick={(file) => uploadFIle(file)}/>
    </div>
  )
}

export default Upload