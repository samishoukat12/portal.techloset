import { Stack } from '@mui/material'
import React from 'react'
import { CF } from './CommonFieldStyle'
import PhoneInput from 'react-phone-input-2'

export default function CommonField({ Name, Label, Email, Address, Role, Password, PhoneNo, passwordShown, currentPassword, newPassword, confirmPassword, setCurrentPassword, setNewPassword, setConfirmPassword }) {

    return (
        <>
            <Stack spacing={0}>
                {/* <CF.ProfileFieldLabel >
                    // {Label}
                </CF.ProfileFieldLabel> */}
                {
                    Password ?
                        <>
                            {
                                currentPassword ?
                                    <CF.TextInput label={Label} type={passwordShown ? "text" : "password"} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required
                                    />
                                    :
                                    ''
                            }
                        </>
                        :
                        PhoneNo ?
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={PhoneNo}
                                country='pk'
                                inputProps={{ "country": "pk", "enableAreaCodes": true }}
                                countryCodeEditable={false}
                                // onChange={(e)=>setPhoneNo(e.target.value)}
                                inputStyle={{
                                    width: "100%",
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            :
                            Address ?
                                <CF.TextInput 
                                    defaultValue={Address}
                                    multiline
                                    rows={1}
                                    InputLabelProps={{ shrink: true }}
                                    margin="dense"
                                    // variant="standard"
                                    id='file'
                                    fullWidth
                                    label={Label}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true
                                    }} />
                                :
                                PhoneNo ?
                                    <PhoneInput
                                        placeholder="Enter CNIC"
                                        value={Cnic}
                                        country='pk'
                                        inputProps={{ "country": "pk", "enableAreaCodes": true }}
                                        countryCodeEditable={false}
                                        // onChange={(e)=>setPhoneNo(e.target.value)}
                                        inputStyle={{
                                            width: "100%",
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    :
                                <CF.TextInput
                                    InputLabelProps={{ shrink: true }}
                                    margin="dense"
                                    variant="standard"
                                    id='file'
                                    fullWidth
                                    label={Label}
                                    defaultValue={Name ? Name : Address ? Address : Email ? Email : Role ? Role : PhoneNo ? PhoneNo : ''}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true
                                    }}
                                />

                }

            </Stack>
        </>
    )
}
