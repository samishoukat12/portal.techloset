import React from 'react';
import { UseCourses } from './useCourses';
import Table from '../../commonComponents/table/Table';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../commonComponents/newTable/NewTable';
import CourseCard from './courseCard/CourseCard';
import { Box } from '@mui/material';
import PButton from '../../commonComponents/Pbutton/Pbutton';
export default function Course() {
  const [
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
      handleClickOpen
    },
  ] = UseCourses();
  if (
    GET_LOADING ||
    // DELETE_LOADING ||
    UPDATE_LOADING ||
    ADD_LOADING ||
    loader
  ) {
    return <CommonTableLoader />;
  }
  return (
        <CourseCard title="Courses" data={refacteredData} formInputs={formInputs} handleClickOpen={handleClickOpen} ctaFormHandler={ctaFormHandler} ctaUpdateHandler={ctaUpdateHandler}/>
      

    // {/*
    //   <>
    //  <NewTable
    //     title={'Courses'}
    //     tableHeadings={[
    //     {
    //         id: "courseName",
    //         Label: "Course Name"
    //     },
    //     {
    //         id: "description",
    //         Label: "Description"
    //     },
    //     {
    //         id: "introduction",
    //         Label: "Introduction"
    //     },
    //     {
    //         id: "instructorId",
    //         Label: "Instructor Id"
    //     },
    //     {
    //         id: "categoryId",
    //         Label: "Category Id"
    //     },
    //     {
    //       id: "price",
    //       Label: "Price"
    //     },
    //     {
    //       id: "status",
    //       Label: "Status"
    //     },
    //     {
    //         id: "action",
    //         Label: "Action"
    //     },
    //     ]}
    //     printedKeys={[
    //       {
    //         key: "courseName",
    //       },
    //       {
    //         key: "courseDesc",
    //       },
    //       {
    //         key: "courseIntro",
    //       },
    //       {
    //         key: "instructorId",
    //       },
    //       {
    //         key: "courseCategoryId",
    //       },
    //       {
    //         key: "coursePrice",
    //       },
    //       {
    //         key: "courseStatus",
    //       },
    //       {
    //         type: "crud",
    //       },
    //       // {
    //       //   key: "postUrl",
    //       //   type: "image",
    //       // },
    //       // {
    //       //   key: "postDesc",
    //       //   type: "editor",
    //       // },
    //     ]}
    //     formInputs={formInputs}
    //     // {[
    //       // {
    //       //   type: "editor",
    //       //   name: "editor",
    //       // },


    //       // {
    //       //   label: 'CategoryName',
    //       //   name: 'categoryName',
    //       //   type: 'text',
    //       // },
    //       // {
    //       //   label: 'createrName',
    //       //   name: 'createrName',
    //       //   type: 'text',
    //       // }
    //     // ]}
    //     filterdata={{
    //       key: "role",
    //       filterTag: ['All', 'PUBLISH', 'UNPUBLISH'],
    //     }}
    //     data={refacteredData}
    //     ctaFormHandler={ctaFormHandler}
    //     // ctaDeleteHandler={ctaDeleteHandler}
    //     ctaUpdateHandler={ctaUpdateHandler}

    // /> 
    // </>
    // */}


  );
}
