import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import FiltredRoles from "../../../constants/FiltredRoles";
import {
  ADD_ENROLMMENT_APPROVAL,
  // DELETE_ENROLMMENT_APPROVAL,
  UPDATE_SINGLE_ENROLLMENT,
} from "../../../lib/mutation/AllMutations";
import { GET_COURSES, GET_ENROLLMENT } from "../../../lib/queries/AllQueries";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";








export function UseEnrollmentApproval() {
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  console.log("Edit data in approval", useEditData);
  const [{ student }] = FiltredRoles()
  const { data: Courses } = useQuery(GET_COURSES)
  const formInputs = [

    {
      label: "Payment Method",
      name: "paymentMethod",
      type: "text",
    },
    {
      label: "Amount",
      name: "amount",
      type: "number",
    },
    {
      label: "Transaction Id",
      name: "transactionId",
      type: "text",
    },
    {
      label: "User",
      name: "userId",
      type: "selectUser",
      dropDown: student
    },
    {
      label: "Courses",
      name: "coursesId",
      type: "selectCourse",
      dropDown: Courses
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      dropDownContent: ["PENDING", "APPROVED", "REJECT"],
    },
  ]






  //GET STAFF 

  let { data, loading: GET_LOADING, error } = useQuery(GET_ENROLLMENT);
  console.log("error", error);
  const refacteredData = [];
  data?.enrollmentApprovals?.map((item) => {

    refacteredData.push({
      id: item.id,
      userId: item.userId,
      coursesId: item.coursesId,
      status: item.status,
      paymentMethod: item.paymentMethod,
      amount: item.amount,
      transactionId: item.transactionId,
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD Enrollment Approval
  const AddEnrollmentApprovalInCache = (cache, { data }) => {
    const newApproval = data.createEnrollmentApproval
    const approvals = cache.readQuery({
      query: GET_ENROLLMENT,
    })

    cache.writeQuery({
      query: GET_ENROLLMENT,
      data: {
        enrollmentApprovals: [
          ...approvals.enrollmentApprovals,
          newApproval
        ]
      }
    })
  };

  let [CreateEnrollmentApproval, { loading: ADD_LOADING }] = useMutation(ADD_ENROLMMENT_APPROVAL, {
    update: AddEnrollmentApprovalInCache
  });
  const ctaFormHandler = async (event) => {

    event.preventDefault();
    if (!useEditData?.userId) {
      ToastWarning('User Id required')
    }
    else if (!useEditData?.coursesId) {
      ToastWarning('Courses Id required')
    }
    else if (!useEditData?.paymentMethod) {
      ToastWarning('Payment method required')
    }
    else if (!useEditData?.amount) {
      ToastWarning('Amount required')
    }
    else if (!useEditData?.transactionId) {
      ToastWarning('Transaction Id required')
    }
    else if (!useEditData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateEnrollmentApproval({
          variables: {
            data: {
              user: {
                connect: {
                  id: useEditData?.userId
                }
              },
              courses: {
                connect: {
                  id: useEditData?.coursesId
                }
              },
              status: useEditData?.status,
              paymentMethod: useEditData?.paymentMethod,
              amount: useEditData?.amount,
              transactionId: useEditData?.transactionId,

            },
          },
          onCompleted(data, cache) {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Enrollment Added')

          },
        });
      } catch (error) {
        openModal(false)
        setLoader(false);
        ToastError(error.message);

      }
    }
  };





  // DELETE STAFF

  // let [DeleteEnrollmentApproval, { loading: DELETE_LOADING }] = useMutation(DELETE_ENROLMMENT_APPROVAL);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteEnrollmentApproval({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('Enrollment Deleted')
  //       },
  //       refetchQueries: [{ query: GET_ENROLLMENT }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [UpdateEnrollmentApproval, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_ENROLLMENT);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.userId) {
      ToastWarning('user required')
    }
    else if (!useEditData?.coursesId) {
      ToastWarning('courses required')
    }
    else if (!useEditData?.paymentMethod) {
      ToastWarning('Payment method required')
    }
    else if (!useEditData?.amount) {
      ToastWarning('Amount required')
    }
    else if (!useEditData?.transactionId) {
      ToastWarning('Transaction Id required')
    }
    else if (!useEditData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateEnrollmentApproval({
          variables: {
            where: {
              id: useEditId
            },
            data: {
              user: {
                connect: {
                  id: useEditData?.userId
                }
              },
              courses: {
                connect: {
                  id: useEditData?.coursesId
                }
              },
              status: {
                set: useEditData?.status,
              },
              paymentMethod: {
                set: useEditData?.paymentMethod,
              },
              amount: {
                set: useEditData?.amount,
              },
              transactionId: {
                set: useEditData?.transactionId,
              }
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Enrollment Updated')
          },
        })

      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ];
}
