import React from 'react';
import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
// import { Provider } from "react-redux";
// import { store } from '../store/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("layout section!!")
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
      <div className="fixed top-0 z-10 w-full">
        <Navbar />
      </div>
      <div className='mt-20'>
        {children}
      </div>
      <div className="relative">
      <Footer />
      </div>
      {/* </Provider> */}
    </html>
  );
}
