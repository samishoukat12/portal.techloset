import { useMutation } from '@apollo/client';
import React from 'react'
import { ADD_ORGANIZATION } from '../../../lib/mutation/AllMutations';
import { useState, useContext } from "react";
import { ToastError, ToastSuccess, ToastWarning } from '../../../commonComponents/commonFunction/CommonFunction';
import { GET_USER_GROUP } from '../../../lib/queries/AllQueries';
import FiltredData from '../../../constants/FiltredRoles';
import { openModal, updateFlag } from "../../../lib/reactivities/reactiveVarables";


export function UseCreateOrganization() {
    let [CreateOrganization, { loading: ADD_LOADING }] = useMutation(ADD_ORGANIZATION);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [userGroup, setUserGroup] = useState('')
    console.log("userGroup", userGroup, role)
    const [{ userGroupOrganization }] = FiltredData()
    const handleChangePhone = (phone) => {
        setContact(phone)
    }
    const ctaHandler = async (e) => {
        e.preventDefault();
        if (userGroup === '' || role === '' || name === '' || email === '' || password === '' || address === '' || contact === '') {
            ToastWarning("Please fill All fields")
        }
        else {
            try {
                await CreateOrganization({
                    variables: {

                        data: {
                            name: name,
                            email: email,
                            role: role,
                            password: password,
                            address: address,
                            contact: contact,
                            userGroup: {
                                connect: [
                                    {
                                        id: userGroup
                                    }
                                ]
                            }
                        },
                    },
                    onCompleted(data, cache) {
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('Organization Added')
                        setName('')
                        setEmail('')
                        setRole('')
                        setPassword('')
                        setAddress('')
                        setContact('')
                        setUserGroup('')


                    },
                    refetchQueries: [{ query: GET_USER_GROUP }],
                })
            }
            catch (e) {
                ToastError(e.message)
                console.error(e.message)
            }
        }
    }

    return [{ state, name, setName, email, setEmail, role, setRole, password, setPassword, handleChangePhone, address, setAddress, contact, setContact, userGroup, setUserGroup, userGroupOrganization, ctaHandler, ADD_LOADING }]
}
