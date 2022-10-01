import React from 'react'
import { useState, useContext, useEffect } from 'react';

export default function UseForgotPassword() {

  const [email, setEmail] = useState('');
  const [emailTyping, setEmailTyping] = useState(false)

  const handleTyping = () => {
    setEmailTyping(true)
  }
  const handleRemoveTyping = () => {
    setEmailTyping(false)
  }

  return (
    [{ email, setEmail, emailTyping, handleTyping, handleRemoveTyping }]
  )
}
