import { CandlestickChartSharp } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React, { Suspense } from 'react'
import CommonEditField from '../../../commonComponents/commonField/CommonEditField'
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader'
import PButton from '../../../commonComponents/Pbutton/Pbutton'
import { Pd } from '../profileData/profileDataStyle'
import { UseEditProfile } from './UseEditProfile'
import { orgCheck, userData } from '../../../lib/reactivities/reactiveVarables'
import { useReactiveVar } from '@apollo/client'
export default function EditProfile() {

    const [{
        ctaUpdateHandler,
        name,
        email,
        address,
        contact,
        cnic,
        setName,
        setEmail,
        role,
        setAddress,
        setContact,
        state,
        // handleChange,
        UPDATE_LOADING
    }] = UseEditProfile()
    console.log('contact',contact);
    const useOrgCheck = useReactiveVar(orgCheck)
    const useUserData = useReactiveVar(userData)
    if (UPDATE_LOADING) {
        return <CommonTableLoader />
    }

    return (
        <>

            <Grid container spacing={2}>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12} >
                    <CommonEditField
                        Label='Name'
                        type='text'
                        placeholder={
                            // state?.orgLogin ?
                            useOrgCheck ?
                                useUserData?.name
                                :
                                useUserData?.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6} sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Email'
                        type='email'
                        placeholder={
                            // state?.orgLogin ?
                            useOrgCheck ?
                                useUserData?.email
                                :
                                useUserData.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </Grid>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Role'
                        value={role}
                        placeholder={
                            // state?.orgLogin ?
                            useOrgCheck ?
                                useUserData?.role
                                :
                                useUserData?.userGroup[0]?.userGroupRole}
                    />
                </Grid>
                <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    sx={{ marginLeft: 5 }}
                >
                    <CommonEditField
                        Label='Phone No'
                        type='tel'
                        placeholder={
                            // state?.orgLogin ?
                            useOrgCheck ?
                                useUserData?.contact
                                :
                                useUserData?.contact}
                        value={contact}
                        onChange={(e) => setContact(e)}
                    />
                </Grid>
                {/* <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Phone No'
                        type='number'
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.cnic
                            :
                            state?.user.cnic}
                        value={cnic}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </Grid> */}
                <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Address'
                        type='text'
                        placeholder={
                            // state?.orgLogin ?
                            useOrgCheck ?
                                useUserData?.address
                                :
                                useUserData?.address}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                {/* <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12} >
                    <CommonEditField
                        type='file'
                    />
                </Grid> */}
                <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}>
                    <Pd.ProDiv>
                        <PButton
                            title="save changes"
                            ctaHandler={ctaUpdateHandler}
                        />
                    </Pd.ProDiv>
                </Grid>
            </Grid>

        </>
    )
}
