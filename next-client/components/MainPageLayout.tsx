"use client";

import React, { useEffect, useState } from 'react';
import JobPostingCard from './JobPostingCard';
import JobPostingDetails from './JobPostingDetails';
import { JobPostingProps } from '@/interface';
import EmptyState from './EmptyState';
// import { IJobPostingState } from '@/store/slices/jobPosting';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

interface MainPageLayoutProps {
    jobPostingList: JobPostingProps[];
    isDataEmpty: boolean;
}

interface CustomJSXElements {
    [key: string]: any;
}

declare global {
    namespace JSX {
        interface IntrinsicElements extends CustomJSXElements { }
    }
}

const MainPageLayout: React.FC<MainPageLayoutProps> = ({ jobPostingList, isDataEmpty }) => {
    const [selectedJobPosting, setSelectedJobPosting] = useState<JobPostingProps | null>(null);
    const [jobTypes, setJobTypes] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');


    const selectJobPosting = (jobPosting: JobPostingProps) => {
        setSelectedJobPosting(jobPosting);
    };

    const handleJobTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        if (checked) {
            setJobTypes((prevJobTypes) => [...prevJobTypes, value]);
        } else {
            setJobTypes((prevJobTypes) => prevJobTypes.filter((type) => type !== value));
        }
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredJobPostings = jobPostingList.filter((jobPosting) =>
        jobPosting.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const onSelectingJobPosting = (data: JobPostingProps) => {
        console.log(data, 'clicked data!!');
    }

    return (
        <div className="flex flex-col">
            <div className="flex">
                {/* Left Division: Job Filters */}
                <div className="w-1/5 border rounded p-4 fixed top-20 bottom-0 left-0 shadow-lg">
                    <div className="mb-4">
                        {/* Search Field */}
                        <div className="searchJobs">
                            <input
                                type="text"
                                placeholder="Search for a job"
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                            />
                        </div>

                        <div className="job-type mt-3 p-5">
                            <h3 className="text-md font-medium">Job Type</h3>
                            <label className="flex items-center space-x-2 mt-2">
                                <input
                                    type="checkbox"
                                    value="full-time"
                                    checked={jobTypes.includes('full-time')}
                                    onChange={handleJobTypeChange}
                                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Full time</span>
                            </label>
                            <label className="flex items-center space-x-2 mt-2">
                                <input
                                    type="checkbox"
                                    value="freelance"
                                    checked={jobTypes.includes('freelance')}
                                    onChange={handleJobTypeChange}
                                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Freelance</span>
                            </label>
                            <label className="flex items-center space-x-2 mt-2">
                                <input
                                    type="checkbox"
                                    value="internship"
                                    checked={jobTypes.includes('internship')}
                                    onChange={handleJobTypeChange}
                                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Internship</span>
                            </label>
                            <label className="flex items-center space-x-2 mt-2">
                                <input
                                    type="checkbox"
                                    value="volunteer"
                                    checked={jobTypes.includes('volunteer')}
                                    onChange={handleJobTypeChange}
                                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Volunteer</span>
                            </label>
                            <label className="flex items-center space-x-2 mt-2">
                                <input
                                    type="checkbox"
                                    value="remote"
                                    checked={jobTypes.includes('remote')}
                                    onChange={handleJobTypeChange}
                                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Remote</span>
                            </label>
                        </div>

                    </div>
                    {/* Other job filters */}
                </div>

                {/* Middle Division: Job Postings List */}
                <div className="w-1/2 p-4" style={{ marginLeft: '300px' }}>
                    {!isDataEmpty ? (
                        filteredJobPostings.map((jobPosting) => (
                            <JobPostingCard
                                key={jobPosting.id}
                                jobPosting={jobPosting}
                                onSelectingJobPosting={onSelectingJobPosting}
                            />
                        ))
                    ) : (
                        <EmptyState
                            title="No Items"
                            description="There no Job postings fetched......"
                        />
                    )}
                </div>

                {/* Right Division: Job Posting Details */}
                <div className="w-1/3 p-4 border">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/details.svg"
                            alt="Job Posting"
                            className="w-8 h-8 rounded-full"
                        />
                        <h2 className="text-xl font-bold border-b-2 p-2 border-blue-400">
                            Details
                        </h2>
                    </div>
                    <JobPostingDetails />
                    {selectedJobPosting && (
                        <div>
                            <h3>{selectedJobPosting.title}</h3>
                            <p>{selectedJobPosting.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPageLayout;
