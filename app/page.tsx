"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import db from './lib/db';
import './login.css';

export default function Login() {
  const router = useRouter();
  const [newAccount, setNewAccount] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  async function makeAccount() {

  }

  async function loginAccount(event: any) {
    event.preventDefault();
    try {
      const authData = await db.collection('users').authWithPassword(
        email,
        password,
      );
    } catch (error) {
      console.log(error);
    }

    if (db.authStore.isValid) {
      router.push('/dashboard');
    }

    setEmail('');
    setPassword('');
  }

  if (newAccount) {
    return (
      <div className="login">
        <div className="login-box">
          <h1 className="login-title">Create Account</h1>
          <form className="login-form" onSubmit={makeAccount}>
            <h2>Username</h2>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <h2>Name</h2>
            <input 
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <h2>Email</h2>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <h2>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <h2>Confirm password</h2>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
            />
            <button
              className="primary-button"
            >
              Create
            </button>
          </form>
          <div className="login-bottom">
            <button 
              className="login-no-account"
              onClick={() => setNewAccount(!newAccount)}
            >
              Have an account?
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="login">
        <div className="login-box">
          <h1>Login</h1>
          <form className="login-form" onSubmit={loginAccount}>
            <h2>Email</h2>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <h2>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button className="primary-button">
              Login
            </button>
          </form>
          <div className="login-bottom">
            <button 
              className="login-no-account"
              onClick={() => setNewAccount(!newAccount)}
            >
              Don't have an account?
            </button>
          </div>
        </div>
      </div>
    )
  }
}
