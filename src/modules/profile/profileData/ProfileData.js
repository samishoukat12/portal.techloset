import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader'
import { userData } from '../../../lib/reactivities/reactiveVarables'
import { useReactiveVar } from '@apollo/client'
export default function ProfileData() {
  const useUserData = useReactiveVar(userData)
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 2000);

  return (
    <>
      {
        loading ?
          <><CommonTableLoader /></>
          :
          <Grid container
            spacing={2}>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12} >
              <CommonField
                Name={useUserData.name
                  // state?.orgLogin ?
                  // state?.user?.organizationLogin.name
                  // :
                  // state?.user.name
                }
                Label='Name'
              />
            </Grid>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <CommonField
                Email={useUserData.email}
                Label='Email'
              />
            </Grid>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}>
              <CommonField
                Role={useUserData.role}
                Label='Role'
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
              <CommonField
                Label='Phone No'
                PhoneNo={useUserData.contact}
              />
            </Grid>
            <Grid item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <CommonField
                Address={useUserData.address}
                Label='Address'
              />
            </Grid>
          </Grid>

      }

    </>
  )
}
