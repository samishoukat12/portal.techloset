import { Stack } from '@mui/material'
import React from 'react'
import { CF } from './CommonFieldStyle'
import PhoneInput from 'react-phone-input-2'


export default function CommonEditField({ type, Label, value, onChange, placeholder }) {
    return (

        <Stack spacing={2}>
            {/* <CF.ProfileFieldLabel >
                {Label}
            </CF.ProfileFieldLabel> */}
            {/* <CF.ProfileField type={type} value={value} placeholder={placeholder} onChange={onChange} /> */}

            {
                type === "tel" ?
                    <PhoneInput
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        country='pk'
                        inputProps={{ "country": "pk", "enableAreaCodes": true }}
                        // countryCodeEditable={false}
                        inputStyle={{
                            width: "100%",
                        }}
                    />

                    :
                    Label === "Address" ?
                        <CF.TextInput
                            multiline
                            rows={1}
                            value={value}
                            label={Label}
                            placeholder={placeholder}
                            type={type}
                            onChange={onChange}
                            InputLabelProps={{ shrink: true }}
                            margin="dense"
                            id='file'
                            fullWidth
                            InputProps={{
                                disableUnderline: true
                            }} />
                        :

                        <CF.TextInput
                            value={value}
                            label={Label}
                            placeholder={placeholder}
                            type={type}
                            onChange={onChange}
                            InputLabelProps={{ shrink: true }}
                            margin="dense"
                            variant="standard"
                            id='file'
                            fullWidth
                            InputProps={{
                                disableUnderline: true
                            }} />

            }

        </Stack>
    )
}
