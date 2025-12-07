import React from 'react'
import { Link } from 'react-router-dom'
import ScoreCircle from './ScoreCircle'

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath }
}: {
  resume: Resume
}) => {
  return (
    <Link to={`/resume/${id}`} className="bg-white rounded-2xl shadow-md p-5 transition hover:shadow-xl resume-card animate-in fade-in duration-800">
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="!text-black font-bold break-words">
            {companyName ?? "Resume"}
          </h2>
          {jobTitle && (
            <h3 className="text-lg break-words text-gray-500">
              {jobTitle}
            </h3>
          )}
        </div>

        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      <div className="gradient-border animate-in fade-in duration-700">
        <div className="w-full h-full">
          <img
            src={imagePath}
            alt="resume preview"
            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
