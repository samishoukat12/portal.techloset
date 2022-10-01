import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_SUCCESS_STORY,
  // DELETE_SINGLE_SUCCESS_STORY,
  UPDATE_SINGLE_SUCCESS,
} from "../../lib/mutation/AllMutations";
import { GET_SUCCESS_STORIES, GET_EDIT_DATA } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";


import FiltredRoles from '../../constants/FiltredRoles'
import { openModal, updateFlag, editData, editId } from "../../lib/reactivities/reactiveVarables";





export function UseSuccessStory() {
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  console.log("Edit data in useSuccessStories", useEditData);
  const [{ student }] = FiltredRoles()
  const formInputs = [
    {
      label: "City",
      name: "city",
      type: "text",
    },
    {
      label: "Freelancing Profile Url",
      name: "freelancingProfileUrl",
      type: "text",
    },
    {
      label: "Payment Proof",
      name: "paymentProof",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
    },
    {
      label: "Total Earned Amount",
      name: "totalEarnedAmount",
      type: "text",
    },
    {
      label: "Why Reject",
      name: "whyReject",
      type: "text",
    },
    {
      label: "Select User",
      name: "user",
      type: "selectUser",
      dropDown: student
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      dropDownContent: ["PUBLISH", "UNPUBLISH"],
    },

  ]






  //GET STAFF 

  let { data, loading: GET_LOADING, error } = useQuery(GET_SUCCESS_STORIES);
  console.log("error", error);
  const refacteredData = [];
  data?.findManySuccessStories?.map((item) => {
    refacteredData.push({
      id: item.id,
      city: item.city,
      freelancingProfileUrl: item.freelancingProfileUrl,
      paymentProof: item.paymentProof,
      description: item.description,
      status: item.status,
      totalEarnedAmount: item.totalEarnedAmount,
      whyReject: item.whyReject,
      // user: item.user
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD Success story
  const AddSuccesStoryInCache = (cache, { data }) => {
    const newStory = data.createSuccessStories
    const stories = cache.readQuery({
      query: GET_SUCCESS_STORIES,
    })

    cache.writeQuery({
      query: GET_SUCCESS_STORIES,
      data: {
        findManySuccessStories: [
          ...stories.findManySuccessStories,
          newStory
        ]
      }
    })
  };


  let [CreateSuccessStories, { loading: ADD_LOADING }] = useMutation(ADD_SUCCESS_STORY, {
    update: AddSuccesStoryInCache
  });
  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!useEditData?.city) {
      ToastWarning('City name required')
    }
    else if (!useEditData?.freelancingProfileUrl) {
      ToastWarning('Freelancing profile url required')
    }
    else if (!useEditData?.paymentProof) {
      ToastWarning('Payment proof required')
    }
    else if (!useEditData?.description) {
      ToastWarning('Description required')
    }
    else if (!useEditData?.totalEarnedAmount) {
      ToastWarning('Total earned amount required')
    }
    else if (!useEditData?.whyReject) {
      ToastWarning('Why reject required')
    }
    else if (!useEditData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateSuccessStories({
          variables: {
            data: {
              freelancingProfileUrl: useEditData?.freelancingProfileUrl,
              paymentProof: useEditData?.paymentProof,
              description: useEditData?.description,
              status: useEditData?.status,
              totalEarnedAmount: useEditData?.totalEarnedAmount,
              city: useEditData?.city,
              whyReject: useEditData?.whyReject,
              user: {
                connect: [
                  {
                    id: useEditData?.user
                  }
                ]
              }
            }

          },
          onCompleted(data, cache) {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Story Added')
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

  // let [DeleteSuccessStories, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_SUCCESS_STORY);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteSuccessStories({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('Story Deleted')
  //       },
  //       refetchQueries: [{ query: GET_SUCCESS_STORIES }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [UpdateSuccessStories, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_SUCCESS);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault();
    if (!useEditData?.city) {
      ToastWarning('City name required')
    }
    else if (!useEditData?.freelancingProfileUrl) {
      ToastWarning('Freelancing profile url required')
    }
    else if (!useEditData?.paymentProof) {
      ToastWarning('Payment proof required')
    }
    else if (!useEditData?.description) {
      ToastWarning('Description required')
    }
    else if (!useEditData?.totalEarnedAmount) {
      ToastWarning('Total earned amount required')
    }
    else if (!useEditData?.whyReject) {
      ToastWarning('Why reject required')
    }
    else if (!useEditData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateSuccessStories({
          variables: {
            where: {
              id: useEditId
            },
            data: {
              freelancingProfileUrl: {
                set: useEditData?.freelancingProfileUrl
              },
              paymentProof: {
                set: useEditData?.paymentProof
              },
              description: {
                set: useEditData?.description
              },
              status: {
                set: useEditData?.status
              },
              totalEarnedAmount: {
                set: useEditData?.totalEarnedAmount
              },
              city: {
                set: useEditData?.city
              },
              whyReject: {
                set: useEditData?.whyReject
              },
              user: {
                connect: [
                  {
                    id: useEditData?.user
                  }
                ]
              }
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Story Updated')
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
