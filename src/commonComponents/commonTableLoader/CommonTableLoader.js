import React from 'react'
import { MagicSpinner } from 'react-spinners-kit'
import { CommonStyleLoader } from './CommonStyleLoader'
export default function CommonTableLoader() {
    return (
        <CommonStyleLoader.LoaderContainer>
            <MagicSpinner color="#0D4cb5" height={100} width={100} />
        </CommonStyleLoader.LoaderContainer>
    )
}
