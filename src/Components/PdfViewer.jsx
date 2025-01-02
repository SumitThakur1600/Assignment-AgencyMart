import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import React from "react";
import {Document, Page, pdfjs} from "react-pdf";
import autoprefixer from "autoprefixer";

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({pdfUrl}) => {
  return (
    <div className="flex-1 bg-white p-4 border-l border-gray-300 rounded-xl mr-5 ml-4">
      {pdfUrl ? (
        <div className="flex justify-center items-center h-full w-full rounded-2xl overflow-hidden">
          <Document file={pdfUrl}>
            <Page
              pageNumber={1}
              width={Math.min(window.innerWidth * 0.9, 500)} // Adjust the width of the PDF dynamically
            />
          </Document>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <p className="text-gray-600 text-center">
            No PDF selected. Please provide a valid URL.
          </p>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
