import React from 'react'
import useCourseDetail from './useCourseDetail'
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import { CD } from './CourseDetailStyle'
import { Box } from '@mui/material';
import CommonCard from '../../commonComponents/commonCard/CommonCard';
import FormModal from '../../commonComponents/formModal/FormModal';
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import CourseLeactureCard from '../../commonComponents/courseLeactureCard/CourseLeactureCard';
import CommonButton from '../../commonComponents/commonButton/CommonButton';


export default function CourseDetail() {
  const { courseData, GET_LOADING, GET_Leacture_LOADING, leacturesData,
    handleClickOpen,formInputs,ADD_LOADING, loader,ctaFormHandler,ctaUpdateHandler,
    UPDATE_LOADING,ctaEditButtonHandler} = useCourseDetail();
  const { width } = UseWindowDimensions();
  if (
    loader||
    ADD_LOADING||
    GET_LOADING ||
    GET_Leacture_LOADING||
    UPDATE_LOADING
  ) {
    return <CommonTableLoader />;
  }
  const AddButton = ({ handleClickOpen }) => {
    return (
        <>
            {width > 600 ? (
                <CD.AddButton
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={handleClickOpen}
                >
                    Add
                </CD.AddButton>
            ) : (
                <IconButton
                    color="inherit"
                    aria-label="search"
                    disableFocusRipple
                    disableRipple
                    onClick={handleClickOpen}
                >
                    <CD.AddIcon />
                </IconButton>
            )}
        </>
    );
};
  return (
    <>
      <CD.MainPageContainer>
        <CD.PriceDiv>
          <div>
            <CD.CourseTypo variant='h5'>
              {courseData.courseName}
            </CD.CourseTypo>
            <CD.CourseDesc>
              {courseData.courseDesc}
            </CD.CourseDesc>
            <Box sx={{ fontWeight: 'bold', padding: '8px' }} component="span">Price: &nbsp;</Box>
            <Box component="span" sx={{ fontSize: 14 }}>{courseData.coursePrice}</Box>
            <div style={{ padding: '8px' }}>
              <Box sx={{ fontWeight: 'bold' }} component="span">Created At: &nbsp;</Box>
              <Box component="span" sx={{ fontSize: 14 }}>{courseData.createdAt}</Box>
            </div>
          </div>
          <div>
            <img
              height="150"
              src="data:image/jpeg;base64,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"
              alt="Course_pic"
            />
          </div>
        </CD.PriceDiv>

        <CD.HeaderDiv>
          <CD.LectureDiv>
            <CD.TitleTypography gutterBottom variant="h6" component="div">
              Lectures
            </CD.TitleTypography>
            <AddButton handleClickOpen={handleClickOpen} />
          </CD.LectureDiv>
          <CD.FlexDiv>
            {
              leacturesData.length === 0 ? <CD.noData>No leacture found against this course. </CD.noData>
                :
                leacturesData.map((item, index) => {
                  return (
                    <>
                      <Box sx={{ paddingTop: '16px'}}>
                        <CourseLeactureCard onPress={(data) => ctaEditButtonHandler(data)} data={item} key={index} />
                      </Box>
                    </>
                  )
                })
            }
          </CD.FlexDiv>
        </CD.HeaderDiv>


        {/* Form Modal */}
         <FormModal
          formInputs={formInputs}
          ctaFormHandler={ctaFormHandler}
          ctaUpdateHandler={ctaUpdateHandler}
                // handleChange={handleChange}
                // onDateChange={onDateChange}
                // date={date}
        /> 


      </CD.MainPageContainer>
    </>
  )
}
