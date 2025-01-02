import React, {useState} from "react";
import Header from "./Components/Header";
import PdfViewer from "./Components/PdfViewer";
import ProposalList from "./Components/ProposalList";

const App = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const proposals = [
    {
      id: 1,
      name: "ABC Technology",
      submissionTime: "a day ago",
      pdfUrl: "/cv1.pdf",
    },
    {
      id: 2,
      name: "XYZ Offspring",
      submissionTime: "a day ago",
      pdfUrl: "/cv2.pdf",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex flex-col lg:flex-row ">
        <ProposalList proposals={proposals} onReviewClick={setSelectedPdf} />
        <PdfViewer pdfUrl={selectedPdf} />
      </main>
    </div>
  );
};

export default App;
