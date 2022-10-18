import './App.css';
import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SplashScreen from './commonComponents/splash/SplashScreen'
import { ToastContainer } from 'react-toastify';
import { useMutation, useReactiveVar } from '@apollo/client';
import { ACTIVE_USER } from './lib/mutation/AllMutations';
import { ToastInfo, ToastSuccess } from './commonComponents/commonFunction/CommonFunction'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { checkAuth, userData, orgCheck, tabsPersmission } from "./lib/reactivities/reactiveVarables"

function App() {
  const useCheckAuth = useReactiveVar(checkAuth)
  const useOrgCheck = useReactiveVar(orgCheck)
  const useUserData = useReactiveVar(userData)
  const useTabsPermission = useReactiveVar(tabsPersmission)
  console.log("TAbs permission", useTabsPermission);
  const history = createBrowserHistory({ window });
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 5000);


  let [
    GetActiveUser,
    { loading: USER_Loading }
  ] = useMutation(ACTIVE_USER)
  const tokenId = localStorage.getItem('token')

  const user = async () => {

    try {
      await GetActiveUser({
        variables: {
          token: tokenId
        },
        onCompleted(login) {
          userData(login.getActiveUser)
          checkAuth(true)
          // const str = login.getActiveUser?.name
          // const str2 = str.charAt(0).toUpperCase() + str.slice(1)
          // ToastSuccess(`Welcome at ${str2}`)
          console.log("redirect", login);
          login.getActiveUser?.userGroup.map((item) => {
            // if (item.userGroupRole === "ORGANIZATIONKEY"){
            tabsPersmission(item.tabsPermission?.navigationResults)

            // }

          })
          // var nameStr = login.getActiveUser?.name
          // var activeUser = nameStr.charAt(0).toUpperCase() + nameStr.slice(1)
          // ToastSuccess(`Welcome at ${activeUser}`)
          // console.log("redirect", login);
        }
      })
    } catch (error) {
      console.log(error.message);
      localStorage.clear()
      userData(null)
      checkAuth(false)
      ToastInfo('Session Expired')
    }
  }
  React.useEffect(() => {
    const token = async () => {
      if (tokenId) {
        user()
      }

    }
    token()
  }, [])
  return (
    <div className='App'>
      {
        loading || USER_Loading ?
          <SplashScreen />
          :
          <HistoryRouter history={history}>
            {/* <Router> */}
            <ScrollToTop />
            <Navigation />
            {/* </Router> */}
          </HistoryRouter>
      }

      {/* <SampleDataFetch /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
