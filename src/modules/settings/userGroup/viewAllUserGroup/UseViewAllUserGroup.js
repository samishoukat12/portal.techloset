import React from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_GROUP } from '../../../../lib/queries/AllQueries';


export default function UseViewAllUserGroup() {


    let { data, loading: GET_LOADING, error } = useQuery(GET_USER_GROUP);

    console.log("error", error);
    const refacteredData = [];
    data?.userGroups?.forEach((item) => {
        refacteredData.push({
            name: item.userName,
            permissions: item.tabsPermission.navigationResults.map((val) => {
                return val.pages
              
            }),
            updateAt: item.updateAt,
            createdAt: item.createdAt,
            role: item.userGroupRole,
        });
    })
    console.log("refacteredData", refacteredData);

    const ctaEditButtonHandler=((name, role, permissions) => {
        console.log("Name in useViewAllUser", name)
        console.log("Role in useViewAllUser", role)
        console.log("permissions in useViewAllUser", permissions)
    })

  return [{refacteredData, GET_LOADING, ctaEditButtonHandler}]
}
