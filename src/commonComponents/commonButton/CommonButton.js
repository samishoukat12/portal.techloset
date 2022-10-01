import React from 'react'
import Button from '@mui/material/Button';

export default function CommonButton({name,color}) {
    return (
        <Button variant="contained" color={color || 'primary'}>{name || 'Button'}</Button>
    )
}