import { useMutation, useQuery, useReactiveVar } from "@apollo/client"
import { useState, useContext } from "react"
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction"
import FiltredData from "../../../constants/FiltredRoles"
import {
  ADD_USER,
  // DELETE_USER,
  UPDATE_USER,
} from "../../../lib/mutation/AllMutations"
import { GET_COURSES, GET_USERS } from "../../../lib/queries/AllQueries"
import {
  openModal,
  updateFlag,
  editData,
  valTel,
  editId,
  userData,
  emailVal,
} from "../../../lib/reactivities/reactiveVarables"

export function UseAllStudents() {
  const useEmailVal = useReactiveVar(emailVal)
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  const useContact = useReactiveVar(valTel)
  const useUserData = useReactiveVar(userData)
  console.log("Edit data in students", useEditData)
  console.log("Contact in students", useUserData)
  const [{ userGroupStudent }] = FiltredData()


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
      // sx: {
      //   input : {
      //     "&:invalid":{
      //       border: "red solid 2px"
      //     },
      //     // "&:valid"
      //   }
      // }
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
      dropDownUserGroup: userGroupStudent,
    },
  ]

  //GET STAFF

  let { data, loading: GET_LOADING, error } = useQuery(GET_USERS)
  console.log("error", error)
  let refacteredData = []
  let courseIds = []
  // Getting Current Teacher's own courses
  if (useUserData.userGroup.userGroupRole === "TEACHER") {
    let { data } = useQuery(GET_COURSES)
    console.log("courseData", data.findManyCourses)
    courseIds = data?.findManyCourses
      ?.filter((data) => data.instructorId === useUserData.id)
      .map((data) => data.id)
    console.log("teacher courseIds", courseIds)
  }
  if (useUserData.userGroup.userGroupRole === "TEACHER") {
    data?.users?.filter((item) => {
      if (
        item.myCourse.some((innerItem) =>
          courseIds.includes(innerItem["coursesId"])
        )
      ) {
        console.log(item)
        refacteredData.push({
          id: item.id,
          name: item.name,
          email: item.email,
          cnic: item.cnic,
          address: item.address,
          contact: item.contact,
          role: item.userGroup.userGroupRole,
        })
      }
    })
  } else {
    data?.users?.map((item) => {
      if (item.userGroup?.userGroupRole === "STUDENT") {
        refacteredData.push({
          id: item.id,
          name: item.name,
          email: item.email,
          cnic: item.cnic,
          address: item.address,
          contact: item.contact,
          role: item.userGroup.userGroupRole,
        })
      }
    })
  }


  const exportTableData = {
    data: refacteredData.map((item) => {
      return {
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.role,
      }
    }),
    sheetname: "All Students",
    filename: "All-Students-table-Data"
  }

  //ADD Student
  const AddUserInCache = (cache, { data }) => {
    const newUser = data.register
    const users = cache.readQuery({
      query: GET_USERS,
    })

    cache.writeQuery({
      query: GET_USERS,
      data: {
        users: [...users.users, newUser],
      },
    })
  }

  let [Register, { loading: ADD_LOADING }] = useMutation(ADD_USER, {
    update: AddUserInCache,
  })

  const ctaFormHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.name) {
      ToastWarning("Name required")
    } else if (useEmailVal === "") {
      ToastWarning("Email required")
    } else if (useContact == "") {
      ToastWarning("Contact required")
    } else if (!useEditData?.cnic) {
      ToastWarning("cnic required")
    } else if (!useEditData?.address) {
      ToastWarning("address required")
    } else if (!useEditData?.userGroup) {
      ToastWarning("User Group required")
    } else {
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
                  id: useEditData.userGroup,
                },
              },
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            valTel("")

            ToastSuccess("Student Added")
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
        })
        // const queryResult = cache.readQuery({
        //   query: GET_STAFF
        // });
        // console.log('sami', queryResult);
      } catch (error) {
        openModal(false)
        ToastError(error.message)
      }
    }
  }

  //Update staff

  let [UpdateStudents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_USER)

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.name) {
      ToastWarning("Name required")
    } else if (!useEmailVal) {
      ToastWarning("Email required")
    } else if (!useContact) {
      ToastWarning("contact must be 11 characters")
    } else if (!useEditData?.cnic) {
      ToastWarning("cnic required")
    } else if (!useEditData?.address) {
      ToastWarning("address required")
    } else if (!useEditData?.userGroup) {
      ToastWarning("User Group required")
    } else {
      try {
        await UpdateStudents({
          variables: {
            where: {
              id: useEditId,
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
                  id: useEditData?.userGroup,
                },
              },
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            valTel("")
            ToastSuccess("Student Updated")
          },
        })
      } catch (error) {
        console.log(error.message)
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
      exportTableData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ]
}
