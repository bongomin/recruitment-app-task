
'use client'

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MainLayout from '@/components/MainPageLayout';
// import { fetchAllJobPostings } from '@/utillities'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <MainLayout/>
    </main>
  );
};
