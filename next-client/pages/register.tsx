import '/app/globals.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { signup } from '@/utillities';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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
    if (!validateForm()) {
      return;
    }
    try {
      const response = await signup(email, fullName, password, confirmPassword);
      if (response.status === 200) {
        router.push('/login');
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        // Show error message to the user
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
      // Show error message to the user
    }
  };

  const handleLoginLinkClick = () => {
    router.push('/login');
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (fullName.trim() === '') {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-1/3">
        <form className="p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2">
              Full Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className={`w-full border border-gray-300 rounded px-3 py-2 ${errors.fullName && 'border-red-500'}`}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full border border-gray-300 rounded px-3 py-2 ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full border border-gray-300 rounded px-3 py-2 ${errors.password && 'border-red-500'}`}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`w-full border border-gray-300 rounded px-3 py-2 ${errors.confirmPassword && 'border-red-500'}`}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
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
