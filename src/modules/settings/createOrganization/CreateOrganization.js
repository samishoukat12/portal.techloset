import React from "react";
import { FM } from "./CreateOrganizationStyle";
import { Grid, MenuItem } from "@mui/material";
// import { UseCreateOrganization } from "./UseCreateOrganization";
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import PhoneInput from "react-phone-input-2";
import { UseAllOrganization } from "./UseAllOrganization";
import NewTable from "../../../commonComponents/newTable/NewTable";

export default function CreateOrganization() {
  // const [{
  //   state,
  //   name,
  //   setName,
  //   email,
  //   setEmail,
  //   role,
  //   setRole,
  //   password,
  //   setPassword,
  //   address,
  //   handleChangePhone,
  //   setAddress,
  //   contact,
  //   setContact,
  //   userGroup,
  //   setUserGroup,
  //   userGroupOrganization,
  //   ctaHandler,
  //   ADD_LOADING
  // }] = UseCreateOrganization()
  // const obj = ["ORGANIZATIONKEY", "OWNER"]
  // if (ADD_LOADING) {
  //   return <CommonTableLoader />
  // }
  const [
    {
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      exportTableData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
      // ctaEditButtonHandler
    },
  ] = UseAllOrganization();
  if (
    GET_LOADING ||
    // DELETE_LOADING ||
    UPDATE_LOADING ||
    ADD_LOADING
  ) {
    return <CommonTableLoader />;
  }
  return (
    <div>
      <NewTable
        title={"All Organization"}
        tableHeadings={[
          {
            id: "name",
            Label: "Name",
          },
          {
            id: "email",
            Label: "Email",
          },
          // {
          //   id: "cnic",
          //   Label: "CNIC",
          // },
          {
            id: "contact",
            Label: "Contact",
          },
          {
            id: "address",
            Label: "Address",
          },
          {
            id: "role",
            Label: "Role",
          },
          {
            id: "action",
            Label: "Action",
            marginLeft: 14,
          },
        ]}
        // ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[
          {
            key: "name",

          },
          {
            key: "email",
            type:'email'
          },
          // {
          //   key: "cnic",
          // },
          {
            key: "contact",
          },
          {
            key: "address",
          },
          {
            key: "role",
          },
          {
            type: "crud",
          },
        ]}
        formInputs={formInputs}
        filterdata={{
          key: "role",
          filterTag: ["All", "ADMIN", "TEACHER"],
        }}
        data={refacteredData}
        exportTable={exportTableData}
        ctaFormHandler={ctaFormHandler}
        // ctaDeleteHandler={ctaDeleteHandler}
        ctaUpdateHandler={ctaUpdateHandler}
      />
    </div>
    // <div style={{ backgroundColor: "white", minHeight: "100vh", minWidth: "100%", padding: "20px", borderRadius: "20px" }}>

    //   {/* {
    //     state.user.id === "62deef57d7afa35edb69f58c" ? */}
    //       <>
    //         <Grid container spacing={2}>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
    //             <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"Name"}
    //               name={"Name"}
    //               value={name}
    //               onChange={(e) => setName(e.target.value)}
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //               variant="standard"
    //             />
    //           </Grid>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
    //             <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"Email"}
    //               name={"Email"}
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //               variant="standard"
    //             />
    //           </Grid>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
    //             <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"Password"}
    //               name={"Password"}
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //               variant="standard"
    //             />
    //           </Grid>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
    //             <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"Address"}
    //               name={"Address"}
    //               value={address}
    //               onChange={(e) => setAddress(e.target.value)}
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //               variant="standard"
    //             />
    //           </Grid>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12} style={{ marginTop: 18 }}>
    //             <PhoneInput
    //               placeholder="Enter phone number"
    //               value={contact}
    //               onChange={phone => handleChangePhone(phone)}
    //               country='pk'
    //               // country="pk"
    //               inputProps={{ "country": "pk", "enableAreaCodes": true }}
    //               countryCodeEditable={false}
    //               inputStyle={{
    //                 width: "100%"
    //               }}
    //             />

    //             {/* <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"Contact"}
    //               name={"Contact"}
    //               value={contact}
    //               onChange={(e) => setContact(e.target.value)}
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //               variant="standard"
    //             /> */}
    //           </Grid>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12} style={{ marginTop: 10 }}>
    //             <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"Role"}
    //               name={"Role"}
    //               value={role}
    //               onChange={(e) => setRole(e.target.value)}
    //               select
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //             >
    //               {
    //                 obj?.map((option, i) => (
    //                   <MenuItem key={option} value={option}>
    //                     <div>{option}</div>
    //                   </MenuItem>
    //                 ))}
    //             </FM.TextInput>
    //           </Grid>
    //           <Grid item xl={6} lg={6} md={12} sm={12} xs={12} style={{ marginTop: 10 }}>
    //             <FM.TextInput
    //               InputLabelProps={{ shrink: true }}
    //               label={"User Group"}
    //               name={"User Group"}
    //               value={userGroup}
    //               select
    //               onChange={(e) => setUserGroup(e.target.value)}
    //               InputProps={{ disableUnderline: true }}
    //               margin="dense"
    //               id="file"
    //               required
    //               fullWidth
    //             >
    //               {
    //                 userGroupOrganization?.map((option, i) => (
    //                   <MenuItem key={option.id} value={option.id}>
    //                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
    //                       <div>{option.userName}</div>
    //                       <div style={{ fontSize: '10px', color: "gray", float: "right" }}>
    //                         {option.userGroupRole}
    //                       </div>
    //                     </div>
    //                   </MenuItem>
    //                 ))}
    //             </FM.TextInput>
    //           </Grid>

    //         </Grid>
    //         <br />
    //         <FM.FormButton style={{ color: '#1E86FF' }} variant="outlined" onClick={ctaHandler}>
    //           Create Organization
    //         </FM.FormButton>
    //       </>
    // {/* :
    // "you dont have permission to create other organization"} */}

    // </div >
  );
}
