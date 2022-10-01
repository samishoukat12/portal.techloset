import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { FooterStyle } from "./FooterStyle";

export default function Footer() {
  return (
    <Paper style={{ marginTop: 'calc(10% + 10px)', width: "100%", borderRadius:0, position: "relative", bottom: 0 }}component="footer" square variant="outlined">
      <Container maxWidth="lg">

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            padding: 1
          }}
        >
          <FooterStyle.footerContent variant="caption" color="initial" >
            COPYRIGHT © 2021 TECHLOSET. ALL RIGHTS RESERVED.
          </FooterStyle.footerContent>
        </Box>
      </Container>
    </Paper>
  );
}
