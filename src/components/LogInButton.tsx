'use client'
import React from 'react';
import { signIn } from "next-auth/react"

const LogInButton = ({ }) => {
  return <button onClick={() => signIn('google')}>Sign In</button>;
};

export default LogInButton;