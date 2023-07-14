
'use client'

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MainLayout from '@/components/MainPageLayout';
import { fetchAllJobPostings } from '@/utillities'
export default async function Home() {

  const jobPostingList = await fetchAllJobPostings()

  // check if the data is empty
  const isDataEmpty = !Array.isArray(jobPostingList) || jobPostingList.length < 1
    || !jobPostingList;

  return (
    <main className="flex min-h-screen flex-col">
      {/* pass jobPostingList as a prop */}
      <MainLayout
        jobPostingList={jobPostingList}
      />
    </main>
  );
};
