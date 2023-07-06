"use client";

import React, { useState } from 'react';

function ApplicationModal() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [resumeName, setResumeName] = useState('');

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleCoverLetterChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCoverLetter(event.target.value);
    };

    const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setResumeName(file.name);
        }
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform form submission or further processing here
        console.log('Form submitted!');
    };

    return (
        <div className="overlay">
            <div className="modal">
                <h2 className="text-2xl font-bold mb-4">Application Modal</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                            Cover Letter
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="coverLetter"
                            rows={5}
                            placeholder="Cover Letter"
                            value={coverLetter}
                            onChange={handleCoverLetterChange}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                            Upload Resume
                        </label>
                        <input type="file" id="resume" accept=".pdf" onChange={handleResumeUpload} />
                    </div>
                    <div className="mb-4" id="resumeName">
                        {resumeName && <p>Uploaded Resume: {resumeName}</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ApplicationModal;
