import React from "react";
import UseAssignment from "../../modules/studentPortal/assignment/UseAssignment";
import {
  openModal,
  updateFlag, editData, editId
} from "../../lib/reactivities/reactiveVarables";
export default function UseCommonCard() {
  const useEditData = editData()
  const [{ formInputs }] = UseAssignment();

  console.log("formInputs", formInputs);
  const handleClickOpen = () => {
    openModal(true)
  };
  const ctaEditButtonHandler = (data) => {
    console.log("data in editButtonHandler in common card", data);
    const test = useEditData;
    console.log("test data", test);
    editId(data.id)
    openModal(true);
    updateFlag(true);
    formInputs.map((item) => {
      test[item.name] = data[item.name];
    });
    editData(test)
  };
  return {
    handleClickOpen,
    ctaEditButtonHandler,
  };
}
