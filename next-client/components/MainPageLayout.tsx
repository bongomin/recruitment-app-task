"use client";

import React, { useEffect, useState } from 'react';
import JobPostingCard from './JobPostingCard';
import JobPostingDetails from './JobPostingDetails';
import { JobPostingProps } from '@/interface';
import { fetchAllJobPostings } from '@/utillities';
// import { IJobPostingState } from '@/store/slices/jobPosting';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

const MainPageLayout: React.FC = () => {
    const [selectedJobPosting, setSelectedJobPosting] = useState<JobPostingProps | null>(null);
    const [jobTypes, setJobTypes] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchJobPostionList = async () => {
        console.log('we are calling!!')
        await fetchAllJobPostings()
            .then(data => {
                console.log(data, 'response data');
            }).catch(error => console.log(error, 'server error'));

    }

    useEffect(() => {
        console.log('brother benard')
    }, []);

    // const { jobPostings }: IJobPostingState = useSelector((state: RootState) => state.jobPostingList)

    const jobPostings: JobPostingProps[] = [
        {
          id: 1,
          title: 'Frontend Developer',
          description: 'We are seeking a talented Frontend Developer to join our team. You will be responsible for creating beautiful and responsive user interfaces using modern web technologies.',
          location: 'United States',
          amount: 80000,
          datePosted: '2023-07-05',
          company: 'ABC Tech',
          imageBanner: 'frontend-developer-image.jpg',
        },
        {
          id: 2,
          title: 'UX Designer',
          description: 'We are looking for a creative UX Designer to design and shape unique, user-centric products and experiences. You will be involved in every aspect of the design process, from user research to prototyping and testing.',
          location: 'United Kingdom',
          amount: 60000,
          datePosted: '2023-07-04',
          company: 'XYZ Design',
          imageBanner: 'ux-designer-image.jpg',
        },
        {
          id: 3,
          title: 'Full Stack Developer',
          description: 'Join our team as a Full Stack Developer and contribute to the development of our innovative web applications. You will work with cutting-edge technologies to build robust and scalable solutions.',
          location: 'Canada',
          amount: 90000,
          datePosted: '2023-07-03',
          company: 'Tech Solutions Inc.',
          imageBanner: 'full-stack-developer-image.jpg',
        },
        {
          id: 4,
          title: 'Backend Engineer',
          description: 'We are hiring a skilled Backend Engineer to help us build and maintain efficient server-side applications. You will collaborate with cross-functional teams to develop high-quality software solutions.',
          location: 'Germany',
          amount: 75000,
          datePosted: '2023-07-02',
          company: 'TechCo GmbH',
          imageBanner: 'backend-engineer-image.jpg',
        },
        // Add more job postings here
      ];
      
    console.log('logged')

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

    const filteredJobPostings = jobPostings.filter((jobPosting) =>
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
                    {filteredJobPostings.map((jobPosting) => (
                        <JobPostingCard
                            key={jobPosting.id}
                            jobPosting={jobPosting}
                            onSelectingJobPosting={onSelectingJobPosting}
                        />
                    ))}
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
