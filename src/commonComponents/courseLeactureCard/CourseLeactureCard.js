import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CM } from './CourseLeactureCardStyle'
import moment from 'moment';
import { Edit } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';


export default function CourseLeactureCard({ data, onPress }) {
  return (
    <CM.MainCard >
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="140"
        image="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
        alt="green iguana"
      />
      <CM.MainCardContent>
        <CM.TitleTypography gutterBottom variant="h6" component="div">
          {data.lectureTitle}
        </CM.TitleTypography>
        <CM.CourseDiv>
          <CM.CourseTypography gutterBottom variant="subtitle2" component="span">
            Course id:&nbsp;
          </CM.CourseTypography>
          <Typography gutterBottom variant="body2" component="span" color="text.secondary">
            {data.coursesId}
          </Typography>
        </CM.CourseDiv>
        <CM.LectureDiv>
          <CM.CourseTypography gutterBottom variant="subtitle2" component="span">
            Lecture video:&nbsp;
          </CM.CourseTypography>
          <Typography gutterBottom variant="body2" component="span" color="text.secondary">
            {data.lectureVideo}
          </Typography>
        </CM.LectureDiv>
        <div>
            <CM.CreatedAtTypography gutterBottom variant="subtitle2" component="span">
              Created at:&nbsp;
            </CM.CreatedAtTypography>
            <CM.DateTypography variant="body2" component="span" color="text.secondary">
              {moment().format(data.createdAt)}
            </CM.DateTypography>
          </div>
        <CM.DateDiv>
            <IconButton aria-label="delete" onClick={() => onPress(data)}> <Edit sx={{ color: "#96A0B5" }} /> </IconButton>
        </CM.DateDiv>
      </CM.MainCardContent>
      {/* </CardActionArea> */}
    </CM.MainCard>
  );
}