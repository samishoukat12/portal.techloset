import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useState, useContext, useEffect } from 'react';
import { LOGIN, ORG_LOGIN } from '../../../lib/mutation/LoginMutation';
import { ToastError, ToastSuccess } from '../../../commonComponents/commonFunction/CommonFunction';
import { GET_ALL_ORGANIZATION, GET_USERS } from '../../../lib/queries/AllQueries';
import { orgCheck, checkAuth, userData, tabsPersmission } from '../../../lib/reactivities/reactiveVarables';
import { Tune } from '@mui/icons-material';
export default function UseLogin() {

  const useOrgCheck = useReactiveVar(orgCheck)
  const useCheckAuth = useReactiveVar(checkAuth)
  const useUserData = useReactiveVar(userData)
  const [email, setEmail] = useState('');
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    emailTyping: false,
    passwordTyping: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const emailTyping = () => {
    setValues({ ...values, emailTyping: true });
  };
  const emaiTypingRemove = () => {
    setValues({ ...values, emailTyping: false });

  }
  const passwordTyping = () => {
    setValues({ ...values, passwordTyping: true });
  }
  const passwordTypingRemove = () => {
    setValues({ ...values, passwordTyping: false });
  };

  const handleClickShowPassword = () => {
    // setValues({
    //   ...values,
    //   showPassword: true,
    // });
    setShowPassword(!showPassword)
    console.log('Value of ShowPAssword', showPassword);
  };



  let [Login, { loading }] = useMutation(LOGIN)
  const loginHandler = async () => {
    console.log(email);
    console.log(values.password,);
    try {
      await Login({
        variables: {
          password: values.password,
          email: email,
        },
        onCompleted({ login }) {
          localStorage.setItem("token", login.token)
          var userNameStr = login.name
          var activeUserName = userNameStr.charAt(0).toUpperCase() + userNameStr.slice(1)
          checkAuth(true)
          userData(login)

          const str = login.name
          const str2 = str.charAt(0).toUpperCase() + str.slice(1)
          ToastSuccess(`Welcome at ${str2}`)
          if (login.userGroup?.userGroupRole === "STUDENT") {
            tabsPersmission(login.userGroup?.tabsPermission?.navigationResults)


          }
          else if (login.userGroup?.userGroupRole === "ADMIN") {
            tabsPersmission(login.userGroup?.tabsPermission?.navigationResults)


          }
          else if (login.userGroup?.userGroupRole === "TEACHER") {
            tabsPersmission(login.userGroup?.tabsPermission?.navigationResults)


          }
        },
      })
    }
    catch (error) {
      ToastError(error.message)
    }
  }


  let [OrganizationLogin, { loading: ORG_LOADING }] = useMutation(ORG_LOGIN)
  const organizationLoginHandler = async () => {

    try {
      await OrganizationLogin({
        variables: {
          password: values.password,
          email: email
        },
        onCompleted(login) {
          localStorage.setItem("token", login.organizationLogin.token)
          checkAuth(true)

          //Giving user data to userData reactive var
          userData(login.organizationLogin)

          const str = login.organizationLogin.name
          const str2 = str.charAt(0).toUpperCase() + str.slice(1)
          ToastSuccess(`Welcome at ${str2}`)
          login.organizationLogin?.userGroup.map((item) => {
            if (login.organizationLogin.role === "ORGANIZATIONKEY")
              tabsPersmission(item.tabsPermission?.navigationResults)

            // dispatch({
            //   type: "tabsPermission",
            //   payload: item.tabsPermission?.navigationResults
            // })

          })


          // const student = USER_DATA?.users?.map((role) => {
          //   if (role.userGroup.userGroupRole === 'STUDENT') {
          //     return role
          //   }
          // })



          // const teacher = USER_DATA?.users?.filter((role) => {
          //   if (role.userGroup.userGroupRole === 'TEACHER') {
          //     return role
          //   }
          // })



          // const admin = USER_DATA?.users?.filter((role) => {
          //   if (role.userGroup.userGroupRole === 'ADMIN') {
          //     return role
          //   }
          // })

          // const organizationDetails = ORG_DATA?.findManyOrganizations.map((item) => {
          //   if (item.role === "ORGANIZATIONKEY") {
          //     return item
          //   }

          // })

          // dispatch({
          //   type: "setUsersObj",
          //   payload: {
          //     students: student.length,
          //     teachers: teacher.length,
          //     admins: admin.length,
          //     organizationDetails: organizationDetails.length,
          //     ORG_DATA_LOGIN: ORG_DATA_LOGIN,
          //     USER_LOADING: USER_LOADING
          //   }
          // })

        },
      })
    } catch (error) {
      console.log(error);
      ToastError("Not Valid Member")
    }
  }
  const [orgLogin, setOrgLogin] = useState(true)

  const ctaOrgHandler = (e) => {
    setOrgLogin(!orgLogin)
    orgCheck(orgLogin)
  }

  return [{ values, handleChange, handleClickShowPassword, organizationLoginHandler, email, orgLogin, setEmail, loginHandler, loading, ORG_LOADING, ctaOrgHandler, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, showPassword }]
}