import React, { useContext, useState } from 'react'
import { ADD_USER_GROUP, UPDATE_USER_GROUP } from '../../../lib/mutation/AllMutations';
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { ToastError, ToastSuccess, ToastWarning } from '../../../commonComponents/commonFunction/CommonFunction';
import { GET_USER_GROUP } from '../../../lib/queries/AllQueries';
import { useNavigate } from 'react-router-dom';
import { openModal, updateFlag, userGroupData, editId } from '../../../lib/reactivities/reactiveVarables';

export function UseUserGroup() {




    const [userName, setUserName] = useState('')
    const [userGroupRole, setuserGroupRole] = useState('')
    const [email, setEmail] = useState('')
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()
    const useUserGroupData = useReactiveVar(userGroupData)
    const useEditId = useReactiveVar(editId)
    const allData = {
        "navigationResults": []
    };
    const handlingPermission = (item, pageIndex, permission) => {
        const findModule = allData.navigationResults.filter((i) => i.moduleName === item.moduleName);
        if (findModule.length === 1) {
            const checkPageexist = findModule[0]?.pages.find(
                (p) => p.pageName === item.pages[pageIndex].pageName
            );
            if (!checkPageexist) {
                findModule[0]?.pages.push(item.pages[pageIndex]);
            }
            findModule[0].pages[pageIndex][permission] =
                !findModule[0].pages[pageIndex][permission];
        } else {
            const test = {
                moduleName: "",
                moduleUrl: "",
                module_id: "",
                collapse: "",
                pages: [],
            };
            test.pages.push(item.pages[pageIndex]);
            test.moduleName = item.moduleName;
            test.moduleUrl = item.moduleUrl;
            test.module_id = item.module_id;
            test.collapse = item.collapse;
            test.pages[pageIndex][permission] = !item.pages[pageIndex][permission];
            allData.navigationResults.push(test);
        }
        console.log("allData", allData);
    };

    // Add User Group
    const AddUserGroupInCache = (cache, { data }) => {
        const newUserGroup = data.createUserGroup
        const userGroups = cache.readQuery({
            query: GET_USER_GROUP,
        })

        cache.writeQuery({
            query: GET_USER_GROUP,
            data: {
                userGroups: [
                    ...userGroups.userGroups,
                    newUserGroup
                ]
            }
        })
    };

    let [CreateUserGroup, { loading: ADD_LOADING }] = useMutation(ADD_USER_GROUP, {
        update: AddUserGroupInCache
    });
    const ctaHandler = async (event) => {

        // event.preventDefault();
        if (userName === '') {
            ToastWarning('User Name Required')
        }
        else if (userGroupRole === '') {
            ToastWarning('User Group Role Required')
        }
        else if (userGroupRole === "ORGANIZATIONKEY" || userGroupRole === "ADMIN" || userGroupRole === "TEACHER" || userGroupRole === "STUDENT") {

            try {
                await CreateUserGroup({
                    variables: {

                        data: {
                            userName: userName,
                            userGroupRole: userGroupRole,
                            tabsPermission: allData,
                            // Organizations: {
                            //     connect: {
                            //         id: state?.user?.organizationLogin?.id && state?.getActiveUser.id
                            //     }
                            // }
                        }

                    },


                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('UserGroup Added')
                        setuserGroupRole('')
                        setUserName('')

                    },
                });
            } catch (error) {
                openModal(false)
                ToastError(error.message);
                console.log(error.message)

            }
        } else {
            ToastError("Spelling mistake in role")
        }
    };

    let { data, loading: GET_LOADING, error } = useQuery(GET_USER_GROUP);


    // const refacteredData = [];

    // data?.userGroups?.map((item) => {
    //     refacteredData.push({
    //         id: item.id,
    //         name: item.userName,
    //         permissions: item?.tabsPermission?.navigationResults?.map((val) => {
    //             return val.pages

    //         }),
    //         tabs:item,
    //         updateAt: item.updateAt,
    //         createdAt: item.createdAt,
    //         role: item.userGroupRole,
    //     });
    // })
    // console.log("refacteredData111", refacteredData);

    //Update UserGroup
    let [
        UpdateUserGroup,
        {
            loading: UPDATE_LOADING
        }] = useMutation(UPDATE_USER_GROUP);

    const ctaUpdateHandler = async () => {
        if (useUserGroupData?.name === '') {
            ToastWarning('User Name Required')
        }
        else if (useUserGroupData?.role === '') {
            ToastWarning('User Group Role Required')
        }
        else if (useUserGroupData?.role === "ORGANIZATIONKEY" || useUserGroupData?.role === "ADMIN" || useUserGroupData?.role === "TEACHER" || useUserGroupData?.role === "STUDENT") {

            try {
                await UpdateUserGroup({
                    variables: {
                        where: {
                            id: useEditId
                        },
                        data: {
                            userName: {
                                set: useUserGroupData?.name
                            },
                            userGroupRole: {
                                set: useUserGroupData?.role
                            },
                            tabsPermission: allData
                            // tabsPermission: {
                            //     set: allData
                            // },
                            // Organizations: {
                            //     connect: {
                            //         id: state?.user?.organizationLogin?.id && state?.getActiveUser.id
                            //     }
                            // }
                        }

                    },


                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('UserGroup Updated')
                        setuserGroupRole('')
                        setUserName('')
                        userGroupData({})

                    },
                });
            } catch (error) {
                openModal(false)
                ToastError(error.message);
                console.log(error.message)

            }
        } else {
            ToastError("Spelling mistake in role")
        }
    };



    return [{ userName, userGroupRole, email, setEmail, setUserName, ctaHandler, setuserGroupRole, handlingPermission, ADD_LOADING, GET_LOADING, flag, ctaUpdateHandler }]
}
