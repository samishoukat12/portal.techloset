import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import FiltredData from "../../../constants/FiltredRoles";
import {
    ADD_EVENTS,
    // DELETE_SINGLE_EVENT,
    UPDATE_SINGLE_EVENT,
} from "../../../lib/mutation/AllMutations";
import { GET_EVENTS } from "../../../lib/queries/AllQueries";
import { openModal, updateFlag, editData, imageUrl, editId } from "../../../lib/reactivities/reactiveVarables";








export function UseEvents() {
    const useEditId = useReactiveVar(editId)
    const useEditData = useReactiveVar(editData)
    const useImageUrl = useReactiveVar(imageUrl)
    // console.log("Edit Data in events", useEditData);
    // console.log("Image Url in events", useImageUrl);
    const [date, setDate] = useState(new Date());
    const [{ speakerList }] = FiltredData()
    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }
    const formInputs = [
        {
            label: "Name",
            name: "eventName",
            type: "text",
        },
        {
            label: "Description",
            name: "eventDesc",
            type: "text",
        },
        {
            label: "Select speaker",
            name: "speakerId",
            type: "selectSpeaker",
            dropDown: speakerList
        },
        {
            label: "Status",
            name: "eventStatus",
            type: "select",
            dropDownContent: ["PAST", "UPCOMING"],
        },
        // {
        //     label: "Event Date",
        //     name: "eventDate",
        //     type: "calender",
        // },
        {
            label: "Image",
            name: "eventImage",
            type: "upload",
        },
    ]


    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_EVENTS);
    console.log("error", error);
    const refacteredData = [];
    data?.findManyEvents?.map((item) => {
        refacteredData.push({
            id: item.id,
            eventName: item.eventName,
            eventDesc: item.eventDesc,
            eventImage: item.eventImage,
            eventDate: item.eventDate,
            speakerId: item.speakerId,
            eventStatus: item.eventStatus,


        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF
    const AddEventInCache = (cache, { data }) => {
        const newEvent = data.createEvents
        console.log("data of new Event", newEvent);
        console.log("cache", cache);
        const events = cache.readQuery({
            query: GET_EVENTS,
        })
        console.log("Existing Events", events.findManyEvents);

        cache.writeQuery({
            query: GET_EVENTS,
            data: {
                findManyEvents: [
                    ...events.findManyEvents,
                    newEvent
                ]
            }
        })
    };

    let [CreateEvents, { loading: ADD_LOADING }] = useMutation(ADD_EVENTS, {
        update: AddEventInCache
    });


    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.eventName) {
            ToastWarning('Event name required')
        }
        else if (!useEditData?.eventDesc) {
            ToastWarning('Event description  required')
        }
        else if (!useEditData?.speakerId) {
            ToastWarning('Speaker Id required')
        }
        else if (useImageUrl === "") {
            ToastWarning('Image required')
        }
        else if (!useEditData?.eventStatus) {
            ToastWarning('Status required')
        }
        else {

            try {
                await CreateEvents({
                    variables: {

                        data: {
                            eventName: useEditData?.eventName,
                            eventDesc: useEditData?.eventDesc,
                            eventImage: useImageUrl,
                            eventDate: new Date(),
                            Speaker: {
                                connect: {
                                    id: useEditData?.speakerId
                                }
                            },
                            eventStatus: useEditData?.eventStatus
                        }
                    },
                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        imageUrl("")
                        ToastSuccess('Event Added')
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

    // let [DeleteEvents, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_EVENT);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteEvents({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Event Deleted')
    //             },
    //             refetchQueries: [{ query: GET_EVENTS }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateEvents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_EVENT);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.eventName) {
            ToastWarning('Event name required')
        }
        else if (!useEditData?.eventDesc) {
            ToastWarning('Event description  required')
        }
        else if (!useEditData?.speakerId) {
            ToastWarning('Speaker Id required')
        }
        else if (!useEditData?.eventStatus) {
            ToastWarning('Status required')
        }
        else {
            try {
                await UpdateEvents({
                    variables: {
                        where: {
                            id: useEditId
                        },

                        data: {
                            eventName: {
                                set: useEditData?.eventName
                            },
                            eventDesc: {
                                set: useEditData?.eventDesc
                            },
                            eventImage: {
                                set: useImageUrl,
                            },
                            eventDate: {
                                set: new Date()
                            },
                            Speaker: {
                                connect: {
                                    id: useEditData?.speakerId
                                }
                            },
                            eventStatus: {
                                set: useEditData?.eventStatus
                            }
                        }

                    },
                    onCompleted() {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        imageUrl("")
                        ToastSuccess('Event Updated')
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
            onDateChange,
            formInputs,
            date
        },
    ];
}
