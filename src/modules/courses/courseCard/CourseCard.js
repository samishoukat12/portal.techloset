import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Close, Delete, Edit } from '@mui/icons-material'
import { Divider, IconButton, Paper, Toolbar, Tooltip } from '@mui/material';
import useCourseCard from './useCourseCard';
import FormModal from '../../../commonComponents/formModal/FormModal';
import moment from 'moment';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { CD } from '../../courseDetail/CourseDetailStyle';


export default function CourseCard({ data, title, formInputs, ctaFormHandler, ctaUpdateHandler, handleClickOpen }) {
    const { ctaEditButtonHandler } = useCourseCard()
    return (
        <Paper sx={{ borderRadius: 10, }}>
            <Toolbar
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>{title}</h2>
                <div>
                    <CD.AddButton
                        variant="contained"
                        // color="primary"
                        onClick={handleClickOpen}  
                        startIcon={<AddIcon />}
                    >
                        Add
                    </CD.AddButton>
                </div>
            </Toolbar>
            <Divider />
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", padding: 2, marginTop: 3}}>
                {
                    data?.map((item) => {
                        return (
                            <Card sx={{ width: 270, margin: 2, borderRadius: 2, boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px" }}>
                                <Link to={`/course-detail/${item.id}`} style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://robohash.org/random.png"
                                        alt="Course_pic"
                                    />
                                    <CardContent >
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                            <Typography gutterBottom variant="h7" fontWeight={700} component="div">
                                                {item.courseName}
                                            </Typography>
                                            <Typography variant='caption'>{moment(item.createdAt).fromNow()}</Typography>
                                        </Box>

                                        <Typography variant="body2" color="text.secondary">
                                            {item.courseDesc}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.coursePrice}
                                        </Typography>
                                    </CardContent>
                                </Link>
                                <CardActions>
                                    <Tooltip title="Update" sx={{ marginTop: -3 }}>
                                        <IconButton
                                            aria-label="update"
                                            size="small"
                                            onClick={() =>
                                                ctaEditButtonHandler(item)
                                            }
                                        >
                                            <Edit sx={{ color: '#96A0B5' }} />
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Box>
            <FormModal
                formInputs={formInputs}
                ctaFormHandler={ctaFormHandler}
                ctaUpdateHandler={ctaUpdateHandler}
            />
        </Paper >
    )
}