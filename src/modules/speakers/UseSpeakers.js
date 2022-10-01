import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_SPEAKERS,
    // DELETE_SPEAKER,
    UPDATE_SPEAKER
} from "../../lib/mutation/AllMutations";
import { GET_SPEAKERS } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { openModal, updateFlag, editData, imageUrl, editId } from "../../lib/reactivities/reactiveVarables";







export default function UseSpeakers() {
    const useEditData = useReactiveVar(editData)
    const useImageUrl = useReactiveVar(imageUrl)
    const useEditId = useReactiveVar(editId)

    console.log("Edit data in speaker", useEditData);
    console.log("imageUrl in speaker", useImageUrl);

    const formInputs = [
        {
            label: "Speaker Name",
            name: "speakerName",
            type: "text",
        },
        {
            label: "Speaker Desc",
            name: "spkearDesc",
            type: "text",
        },
        {
            label: "Speaker Image",
            name: "spekaerImage",
            type: "upload",
        },

    ]






    //GET Speaker

    let { data, loading: GET_LOADING, error } = useQuery(GET_SPEAKERS);
    console.log("error", error);
    const refacteredData = [];
    data?.speakers?.map((item) => {
        refacteredData.push({
            id: item.id,
            speakerName: item.speakerName,
            spkearDesc: item.spkearDesc,
            spekaerImage: item.spekaerImage,
            createdAt: item.createdAt,
            updateAt: item.updateAt,
        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD Speakers
    const AddSpeakerInCache = (cache, { data }) => {
        const newSpeaker = data.createSpeaker
        const speakers = cache.readQuery({
            query: GET_SPEAKERS,
        })

        cache.writeQuery({
            query: GET_SPEAKERS,
            data: {
                speakers: [
                    ...speakers.speakers,
                    newSpeaker
                ]
            }
        })
    };

    let [CreateSpeaker, { loading: ADD_LOADING }] = useMutation(ADD_SPEAKERS, {
        update: AddSpeakerInCache
    });

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.speakerName) {
            ToastWarning('speakerName required')
        }
        else if (!useEditData?.spkearDesc) {
            ToastWarning('spkearDesc required')
        }
        else if (useImageUrl == "") {
            ToastWarning('Image required')
        }
        else {
            try {
                await CreateSpeaker({
                    variables: {
                        data: {
                            speakerName: useEditData?.speakerName,
                            spkearDesc: useEditData?.spkearDesc,
                            spekaerImage: useImageUrl
                        }
                    },
                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        imageUrl("")
                        ToastSuccess('Speaker Added')

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

    // let [DeleteSpeaker, { loading: DELETE_LOADING }] = useMutation(DELETE_SPEAKER);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteSpeaker({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Speaker Deleted')
    //             },
    //             refetchQueries: [{ query: GET_SPEAKERS }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };

    //Update staff


    let [UpdateSpeaker, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SPEAKER);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.speakerName) {
            ToastWarning('Speaker Name required')
        }
        else if (!useEditData?.spkearDesc) {
            ToastWarning('Speaker Desc required')
        }
        else if (useImageUrl == "") {
            ToastWarning('Image required')
        }
        else {
            try {
                await UpdateSpeaker({
                    variables: {
                        where: {
                            id: useEditId
                        },
                        data: {
                            speakerName: {
                                set: useEditData?.speakerName,
                            },
                            spkearDesc: {
                                set: useEditData?.spkearDesc,
                            },
                            spekaerImage: {
                                set: useImageUrl
                            }
                        },
                    },
                    onCompleted() {
                        openModal(false)
                        updateFlag(false)
                        editData("")
                        imageUrl("")
                        ToastSuccess('Speaker Updated')
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
