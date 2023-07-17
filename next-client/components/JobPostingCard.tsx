import { JobPostingProps } from '@/interface';
import React, { useState } from 'react';

interface IJobPosting {
    jobPosting: JobPostingProps;
    onSelectingJobPosting: (data: JobPostingProps) => void;
}

const JobPostingCard: React.FC<IJobPosting> = ({
    jobPosting,
    onSelectingJobPosting
}) => {
    const [isSaved, setSaved] = useState(false);

    const handleApply = () => {
        // Handle apply logic
        console.log('Job applied!');
    };

    const handleSave = () => {
        // Handle save logic
        setSaved(true);
        console.log('Job saved!');
    };

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedCreatedAt: string = new Date(parseInt(jobPosting.created_at)).toLocaleDateString(undefined, options);

    return (
        <div className="border border-blue-300 shadow-sm rounded p-4 mb-4 hover:border-blue-300 hover:bg-blue-200 hover:shadow-lg">
            {/* Panel Header */}
            <div className="flex flex-col md:flex-row items-center mb-4 pb-4 shadow-bottom">
                <img
                    src="/fullstack-development.png"
                    alt="Job Image"
                    className="w-12 h-12 mr-4 object"
                />
                <div>
                    <h3 className="text-lg font-bold">{jobPosting.title}</h3>
                    <p className="text-sm">{jobPosting.title}</p>
                </div>
            </div>

            {/* Panel Body */}
            <div className="mb-4">
                <div className="flex items-center mb-2">
                    <img
                        src="/location.svg"
                        alt="Location Icon"
                        className="w-4 h-4 mr-2 object-contain"
                    />
                    <span>{jobPosting.location}</span>
                </div>
                <div className="flex items-center mb-2">
                    <img
                        src="/usd.svg"
                        alt="USD Icon"
                        className="w-4 h-4 mr-2 object-contain"
                    />
                    <span>{jobPosting.amount}</span>
                </div>
                <div className="flex items-center mb-2">
                    <img
                        src="/date.svg"
                        alt="Calendar Icon"
                        className="w-4 h-4 mr-2 object-contain"
                    />
                    <span>{formattedCreatedAt}</span>
                </div>
                <p>{jobPosting.description}</p>
            </div>

            {/* Panel Footer */}
            <div className="flex flex-col md:flex-row justify-between items-end">
                <div>{/* Additional content for the footer */}</div>
                <div className="flex mt-4 md:mt-0">
                    <button
                        className={`${isSaved
                                ? 'bg-gray-300'
                                : 'bg-white border-blue-300 hover:bg-blue-600 hover:text-white'
                            } text-blue-500 border hover:border-blue-500 rounded px-4 py-2 mr-2`}
                        onClick={handleSave}
                        disabled={isSaved}
                    >
                        {isSaved ? 'Saved' : 'Save'}
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                        onClick={handleApply}
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobPostingCard;
