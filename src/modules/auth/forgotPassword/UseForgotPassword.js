import React from 'react'
import { useState } from 'react';
import {toast} from 'react-toastify'
import { useMutation } from '@apollo/client';
import { FORGOT_PASS, ORG_FORGOT_PASS } from '../../../lib/mutation/LoginMutation'
import { ToastError } from '../../../commonComponents/commonFunction/CommonFunction';

export default function UseForgotPassword() {

  const [email, setEmail] = useState('');
  const [orgCheck, setOrgCheck] = useState(false);
  const [emailTyping, setEmailTyping] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleTyping = () => {
    setEmailTyping(true)
  }
  const handleRemoveTyping = () => {
    setEmailTyping(false)
  }

  let [creds, { loading: userForgot }] = useMutation(FORGOT_PASS)
  const handleForgot = async () => {
    try {
      await creds({
        variables: {
          email: email
        },
        onCompleted() {
          toast.success("Login Code Sent to Your Email")
        },
      })
    }
    catch (error) {
      ToastError(error.message)
    }
  }

  let [orgsCreds, { loading: orgForgot }] = useMutation(ORG_FORGOT_PASS)
  const handleOrgForgot = async () => {
    try {
      await orgsCreds({
        variables: {
          email: email
        },
        onCompleted() {
          toast.success("Login Code Sent to Your Organization Email")
        },
      })
    }
    catch (error) {
      ToastError(error.message)
    }
  }

  const handleSubmit = () => {
    if(!email) {
     return toast.warning("please provide an email address")
    }
    if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/.test(email)){
      return toast.warning("please provide valid email address")
    }
    if(!orgCheck) {
      return handleForgot()
    } else {
      return handleOrgForgot()
    }
  }

  return (
    [{ email, setEmail, orgCheck, setOrgCheck ,emailTyping, handleTyping, handleRemoveTyping, userForgot, orgForgot, handleSubmit }]
  )
}
