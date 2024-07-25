import React, { useState, useCallback } from "react";
import AlertMsg from "./AlertMsg";
import Filepreview from "./Filepreview";

const FILE_SIZE_LIMIT = 8000000; 
const FILE_TYPES = {
  pdf: ["pdf", "docx", "ppt", "pptx", "xls", "xlsx", "txt"],
  image: ["png", "jpg", "jpeg"],
  svg: ["svg", "webp", "webm"],
  zip: ["zip"],
  code: ["html", "htm", "css", "js", "ts", "py", "rb", "java", "c", "cpp", "go", "php", "swift", "kotlin", "dart"],
};

function UploadForm({ uploadBtnClick }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileType, setFileType] = useState(null);

  const getFileType = useCallback((extension) => {
    for (const [type, extensions] of Object.entries(FILE_TYPES)) {
      if (extensions.includes(extension)) return type;
    }
    return null;
  }, []);

  const onFileSelect = useCallback((event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > FILE_SIZE_LIMIT) {
      setError("Maximum file size is 8 MB");
      setFile(null);
      setFileType(null);
    } else {
      setError(null);
      const extension = selectedFile.name.split(".").pop().toLowerCase();
      const type = getFileType(extension);
      setFileType(type);
      setFile(selectedFile);
    }
  }, [getFileType]);

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-indigo-300"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-indigo-400 dark:text-indigo-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className="text-primary">drag</strong> and{" "}
              <strong className="text-indigo">drop</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF, FILE (max size: 8MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={onFileSelect}
          />
        </label>
      </div>
      {error && <AlertMsg msg={error} />}
      {file && (
        <Filepreview
          file={file}
          removeFile={() => setFile(null)}
          fileType={fileType}
        />
      )}
      <button
        onClick={() => uploadBtnClick(file)}
        disabled={!file}
        className="mt-5 m-auto inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 disabled:border-none disabled:opacity-50 disabled:pointer-events-none"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadForm;