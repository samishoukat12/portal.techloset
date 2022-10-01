import React from 'react'
import { UseCourses } from '../useCourses';
import { openModal, updateFlag, editData, editId } from '../../../lib/reactivities/reactiveVarables';
import { useReactiveVar } from '@apollo/client';

export default function useCourseCard() {
    const useEditData = useReactiveVar(editData)
    const [{ formInputs }] = UseCourses()
    const ctaEditButtonHandler = (data) => {
        console.log("id in course card editButtonHandler", data.id);
        const test = useEditData

        editId(data.id)
        openModal(true)
        updateFlag(true)
        formInputs.map((item) => {
            test[item.name] = data[item.name];
        });
        editData(test)
    }
    return (
        { ctaEditButtonHandler }
    )
}
