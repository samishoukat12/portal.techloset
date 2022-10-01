import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Checkbox, Container, IconButton, Select, Tooltip } from "@mui/material";
import { Divider, Paper, Toolbar } from "@mui/material";
import CardImage from "../../assets/profile.jpg";
import moment from "moment";
import UseCommonCard from "./UseCommonCard";
import FormModal from "../formModal/FormModal";
import { Edit } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import { CD } from './CommonCardStyle';

export default function CommonCard({
  title,
  data,
  formInputs,
  ctaFormHandler,
  ctaUpdateHandler,
}) {
  const { handleClickOpen, ctaEditButtonHandler } = UseCommonCard();
  console.log("data in common card", data);

  return (
    <>
      <Paper style={{ borderRadius: 10 }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>{title}</h2>
          <div>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
              handleClickOpen={handleClickOpen}
            >
              +Add
            </Button> */}

            <CD.AddButton
                        variant="contained"
                        // color="primary"
                        onClick={handleClickOpen}  
                        handleClickOpen={handleClickOpen}
                        startIcon={<AddIcon />}
                    >
                        Add
            </CD.AddButton>
          </div>
        </Toolbar>
        <Divider />

        <div>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center",}}>
            {data?.map((cardItem) => {
              return (
                <Card sx={{ width: 250, margin: 4, borderRadius: "10px" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={CardImage}
                    alt="Assignment"
                  />
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" component="div">
                        {cardItem.name}
                      </Typography>
                      <small>{moment(cardItem.createdAt).fromNow()}</small>
                    </div>
                    <Typography variant="body1" color="initial">
                      {cardItem.courseBatchesId}
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Tooltip title="Update" sx={{ marginTop: -3 }}>
                      <IconButton
                        aria-label="update"
                        size="small"
                        onClick={() => ctaEditButtonHandler(cardItem)}
                      >
                        <Edit sx={{ color: "#96A0B5" }} />
                      </IconButton>
                      
                    </Tooltip>
                 
                  </CardActions>
                </Card>
              );
            })}
            {/* Form Modal  */}
            <FormModal
              formInputs={formInputs}
              ctaFormHandler={ctaFormHandler}
              ctaUpdateHandler={ctaUpdateHandler}
            />
          </Box>
        </div>
      </Paper>
    </>
  );
}
