import { IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'
import PButton from '../../../commonComponents/Pbutton/Pbutton'
import { CP } from './ChangePasswordStyle'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UseChangePassword } from './UseChangePassword'

export default function ChangePassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [currentPassword, newPassword, confirmPassword, setCurrentPassword, setNewPassword, setConfirmPassword] = UseChangePassword()
  const togglePassword = () => {

    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <Stack spacing={2}>
        <CommonField Label='Current Password' currentPassword={currentPassword} setCurrentPassword={setCurrentPassword} Password='12345' passwordShown={passwordShown} />
        <CommonField Label='New Password' newPassword={newPassword} Password='12345' setNewPassword={setNewPassword} passwordShown={passwordShown} />
        <CommonField Label='Confirm Password' confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} Password='12345' passwordShown={passwordShown} />
      </Stack>
      <CP.ChangePasswordButton >
        <Stack direction='row' spacing={2}>
          <PButton title='Save Changes' />
          <IconButton onClick={togglePassword}>{passwordShown ? <VisibilityOff /> : <Visibility />}</IconButton>
        </Stack>
      </CP.ChangePasswordButton>
    </>
  )
}
