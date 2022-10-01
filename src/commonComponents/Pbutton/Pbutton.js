import React from 'react'
import { FM } from './PButtonStyle'

export default function PButton({ title, iconEnd, iconStart, icon, ctaHandler, sx }) {
    return (
        <FM.FormButton style={{ color: '#1E86FF' }} variant="outlined" startIcon={iconStart ? iconStart : ''} endIcon={iconEnd ? iconEnd : ''} onClick={ctaHandler} sx={sx}>
            {
                    title ? title : icon
            }
        </FM.FormButton >
    )
}