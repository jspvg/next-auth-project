'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerUser } from '@/services/auth';

const RegistrationForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const resetInputs = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(email, password);

      if (res && res.result) {
        resetInputs();
        router.push('/login');
      } else {
        setError(res.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-12 w-full px-32"
    >
      <input
        name="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email adress"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />
      <button
        type="submit"
        className="border rounded-lg px-6 py-2 bg-gray-100 hover:bg-gray-200 duration-300 uppercase text-sm"
      >
        Register
      </button>
      {error && <p className="text-red-500 font-bold text-center">{error}</p>}
    </form>
  );
};

export default RegistrationForm;
