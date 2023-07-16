import '/app/globals.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/utillities';

interface LoginResponse {
  token: string;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response: LoginResponse = await login(email, password);
      if (response.token) {
        router.push('/');
      } else {
        setErrors(['Login failed. Please try again.']);
      }
    } catch (error) {
      console.error(error);
      setErrors(['Login failed. Please try again.']);
      setErrorMsg('Failed to login. Please try again.');
    }
  };

  const handleRegisterLinkClick = () => {
    router.push('/register');
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: string[] = [];

    if (email.trim() === '') {
      newErrors.push('Email is required');
      isValid = false;
    }

    if (password.trim() === '') {
      newErrors.push('Password is required');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-1/3">
        <form className="p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            {errorMsg && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                <p className="text-red-500">
                  {errorMsg}
                </p>
              </div>
            )}
          </div>
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
              className={`w-full border border-gray-300 rounded px-3 py-2 ${errors.includes('Email is required') && 'border-red-500'}`}
            />
            {errors.includes('Email is required') && <p className="text-red-500">Email is required</p>}
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
              className={`w-full border border-gray-300 rounded px-3 py-2 ${errors.includes('Password is required') && 'border-red-500'}`}
            />
            {errors.includes('Password is required') && <p className="text-red-500">Password is required</p>}
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
