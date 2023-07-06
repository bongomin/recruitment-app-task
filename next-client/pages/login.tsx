import '/app/globals.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/utillities';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      router.push('/');
    } catch (error) {
      console.error(error);
      setErrors(['Login failed. Please try again.']);
    }
  };

  const handleRegisterLinkClick = () => {
    router.push('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-1/3">
        <form className="p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email {errors.includes('Email is required') && <span className="text-red-500">*</span>}
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
              Password {errors.includes('Password is required') && <span className="text-red-500">*</span>}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Log in
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-blue-500"
              onClick={handleRegisterLinkClick}
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
