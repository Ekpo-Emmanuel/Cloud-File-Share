import React from 'react'
import AlertMsg from './AlertMsg'
import Filepreview from './Filepreview'

/**
 * Handles the event when a file is selected.
 *
 * @param {object} event - The event object that contains information about the file selection.
 * @return {undefined} This function does not return a value.
 */
function UploadForm({uploadBtnClick}) {
  const [file, setFile] = React.useState();
  const [error, setError] = React.useState();
  const [fileType, setFileType] = React.useState();

  /**
   * Handles the event when a file is selected.
   *
   * @param {object} event - The event object that contains information about the file selection.
   * @return {undefined} This function does not return a value.
   */
  const onFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    
    if(selectedFile && selectedFile.size > 8000000) {
        setError('Maximum file size is 8 MB');
    }
    else {
      setError(null);
      const getFileExtension = selectedFile.name.split('.');
      const fileExtension = getFileExtension.length > 1 ? getFileExtension[getFileExtension.length - 1].toLowerCase() : '';

      switch (fileExtension) {
          case 'pdf':
          case 'docx':
          case 'ppt':
          case 'pptx':
          case 'xls':
          case 'xlsx':
          case 'txt':
            setFileType('pdf');
            break;
          case 'png':
          case 'jpg':
          case 'jpeg':
            setFileType('image');
            break;
          case 'svg':
          case 'webp':
          case 'webm':
            setFileType('svg');
            break;
          case 'zip':
              setFileType('zip');
          break;
          case 'html':
          case 'htm':
          case 'css':
          case 'js':
          case 'ts':
          case 'ts':
          case 'py':
          case 'rb':
          case 'java':
          case 'c':
          case 'cpp':
          case 'go':
          case 'php':
          case 'swift':
          case 'kotlin':
          case 'dart':
              setFileType('code');
          break;
          default:
            setFileType(null);
            break;
        }

      setFile(event.target.files[0]);
      // console.log(selectedFile.name);
    }
  };
  return (
    <div>
        <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 hover:border-indigo-300 ">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-indigo-400 dark:text-indigo-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or <strong className='text-primary'>drag</strong> and <strong  className='text-indigo'>drop</strong></p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF, FILE (max size: 2mb) </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={(e) => onFileSelect(e)}/>
            </label>
        </div> 
        {error ? <AlertMsg msg={error} /> : null}
        {file ? <Filepreview file={file} removeFile={() => setFile(null)} fileType={fileType} /> : null}
        <button onClick={() => uploadBtnClick(file)} disabled={!file} class="mt-5 m-auto inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo
        -500  disabled:border-none disabled:opacity-50 disabled:pointer-events-none" >Upload </button>
    </div>
  )
}

export default UploadForm