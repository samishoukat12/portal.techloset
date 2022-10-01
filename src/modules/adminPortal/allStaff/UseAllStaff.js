import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_USER,
  // DELETE_USER,
  UPDATE_USER,
} from "../../../lib/mutation/AllMutations";
import {
  GET_USERS, GET_EDIT_DATA
} from "../../../lib/queries/AllQueries";
import FiltredData from '../../../constants/FiltredRoles'
import { openModal, updateFlag, editData, valTel, editId, userData, emailVal } from "../../../lib/reactivities/reactiveVarables";







export function UseAllStaff() {
  const useEditData = useReactiveVar(editData)
  const useEmailVal = useReactiveVar(emailVal)
  const useContact = useReactiveVar(valTel)
  const useEditId = useReactiveVar(editId)
  const useUserData = useReactiveVar(userData)
  console.log("Edit data in useAllStaff", useEditData);
  console.log("Contactin useAllStaff", useContact);
  console.log("edit id in useAllStaff", useEditId);


  function passwordGenerator(length) {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&()_-+=!@#$%&()_-+=!@#$%&()_-+=!@#$%&()_-+=";

    const password = [...Array(length)].reduce((accumulator, _element) => {
      const randomIndex = Math.floor(Math.random() * chars.length);
      return accumulator + chars[randomIndex];
    }, "");
    return password;
  }
  const pass = passwordGenerator(12)


  let {
    data,
    loading: GET_LOADING,
  } = useQuery(GET_USERS);
  const [{ userGroup }] = FiltredData()

  const formInputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },

    // {
    //   label: "Password",
    //   name: "password",
    //   type: "password",
    // },
    {
      label: "Cnic",
      name: "cnic",
      type: "text",

    },
    {
      label: "Address",
      name: "address",
      type: "text",
    },
    {
      label: "Contact",
      name: "contact",
      type: "contact",
    },
    {
      label: "Select User Group",
      name: "userGroup",
      type: "roleSelect",
      dropDownUserGroup: userGroup
    },
  ]


  //GET STAFF 



  const refacteredData = [];

  data?.useUserData?.map((item) => {
    if (userData.userGroup.userGroupRole === "TEACHER") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.userGroup.userGroupRole
      });
    }
  })

  data?.useUserData?.map((item) => {
    if (userData.userGroup.userGroupRole === "STUDENT") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.userGroup.userGroupRole,
        courseID: item.courseID,
        assignment: item.assignment,
        courseCategory: courseCategory.map((cour) => {
         cour.createdAt,
         cour.id,
         cour.imageURL,
         cour.updateAt
        }),
        enrollList: item.enrollList,
        courseQuiz: item.courseQuiz,
        attendance: item.attendance
      });
    }
  })

  data?.users?.map((item) => {
    if (item.userGroup.userGroupRole === "TEACHER") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.userGroup.userGroupRole
      });
    }


    if (item.userGroup.userGroupRole === "ADMIN") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.userGroup.userGroupRole
      });
    }


    console.log(item);
  });
  console.log("in useAllStaff", refacteredData);


  //ADD STAFF
  const AddUserInCache = (cache, { data }) => {
    const newUser = data.register
    const users = cache.readQuery({
      query: GET_USERS,
    })

    cache.writeQuery({
      query: GET_USERS,
      data: {
        users: [
          ...users.users,
          newUser
        ]
      }
    })
  };

  let [
    Register,
    {
      loading: ADD_LOADING
    }] = useMutation(ADD_USER, { update: AddUserInCache });
  const ctaFormHandler = async (event) => {

    event.preventDefault();
    if (!useEditData?.name) {
      ToastWarning('Name required')
    }
    else if (useEmailVal === "") {
      ToastWarning('Email required')
    }
    else if (!useContact) {
      ToastWarning('Contact required')
    }
    else if (!useEditData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!useEditData?.address) {
      ToastWarning('address required')
    }
    else if (!useEditData?.userGroup) {
      ToastWarning('User Group required')
    }

    else {
      try {

        await Register({
          variables: {
            data: {
              name: useEditData?.name,
              email: useEmailVal,
              password: pass,
              cnic: useEditData?.cnic,
              address: useEditData?.address,
              contact: useContact,
              userGroup: {
                connect: {
                  id: useEditData?.userGroup
                }
              },
              organizations: {
                connect: {
                  id: useUserData.id
                }
              },
            }
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            valTel("")
            ToastSuccess('Staff Added')
          },


          // update(cache, { data: { addItems } }) {

          //   const { tados } = cache.readQuery({

          //     query: GET_STAFF

          //   })

          //   cache.writeQuery({

          //     query: GET_STAFF,

          //     data: {

          //       tados: [

          //         data.CreateManyStaff,

          //         ...tados



          //       ]

          //     }

          //   })

          // }



          // update: (cache, { data: { addItem } }) => {

          //   const data = cache.readQuery({ query: GET_STAFF });

          //   console.log('sami',data);

          //   data.items = [...data.items, addItem];

          //   cache.writeQuery({ query: GET_STAFF }, data);

          // },



        });

        // const queryResult = cache.readQuery({

        //   query: GET_STAFF

        // });

        // console.log('sami', queryResult);

      } catch (error) {
        openModal(false)
        ToastError(error.message);
      }
    }
  };






  // DELETE STAFF

  // let [
  //   DeleteUser,
  //   {
  //     loading: DELETE_LOADING
  //   }] = useMutation(DELETE_USER);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteUser({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       refetchQueries: [{ query: GET_USERS }],
  //       onCompleted(data) {
  //         ToastSuccess('Staff Deleted')
  //       },

  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [
    UpdateUser,
    {
      loading: UPDATE_LOADING
    }] = useMutation(UPDATE_USER);
  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.name) {
      ToastWarning('Name required')
    }
    else if (!useEmailVal) {
      ToastWarning('Email required')
    }
    else if (!useContact) {
      ToastWarning('Contact Required')
    }
    else if (!useEditData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!useEditData?.address) {
      ToastWarning('address required')
    }
    else if (!useEditData?.userGroup) {
      ToastWarning('Role required')
    }
    else {
      try {
        await UpdateUser({
          variables: {
            where: {
              id: useEditId
            },

            data: {
              name: {
                set: useEditData?.name,
              },
              email: {
                set: useEmailVal,
              },
              password: {
                set: useEditData?.password,
              },
              cnic: {
                set: useEditData?.cnic,
              },
              address: {
                set: useEditData?.address,
              },
              contact: {
                set: useContact,
              },
              userGroup: {
                connect: {
                  id: useEditData?.userGroup
                }
              }
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            valTel("")
            ToastSuccess('Staff Updated')

          },

        })


      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return [
    {
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
      // ctaEditButtonHandler
    },
  ];
}