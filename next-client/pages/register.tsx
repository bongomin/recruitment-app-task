import '/app/globals.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { signup } from '@/utillities';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signup(email, fullName, password, confirmPassword);
      if (response.ok) {
        router.push('/login');
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        // Show error message to the user
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
    }
  };

  const handleLoginLinkClick = () => {
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-1/3">
        <form className="p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a
              href="#"
              className="text-blue-500"
              onClick={handleLoginLinkClick}
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
