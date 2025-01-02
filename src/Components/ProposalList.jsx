import React from "react";

const ProposalList = ({proposals, onReviewClick}) => {
  return (
    <div className="bg-black p-4 space-y-4 w-auto lg:w-[780px] xl:w-[800px]">
      <h2 className="text-2xl font-bold pl-2 text-[#6e9b9d]">Proposals</h2>

      {proposals.map((proposal) => (
        <div
          className="bg-white p-4 shadow rounded-xl flex items-center justify-between mb-8 flex-col lg:flex-row"
          key={proposal.id}
        >
          <h3 className="text-lg font-semibold text-[#6e9b9d] pb-2 ">
            {proposal.name}
          </h3>
          <p className="text-sm text-gray-600 pb-1">
            Submitted {proposal.submissionTime}
          </p>

          <button
            className="bg-[#6e9b9d] px-8 h-7 text-black font-bold rounded-2xl hover:bg-[#4e7678] transition mt-4 sm:mt-0 sm:w-auto w-full"
            onClick={() => onReviewClick(proposal.pdfUrl)}
          >
            Review
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProposalList;
