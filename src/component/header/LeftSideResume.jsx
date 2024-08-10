import React from "react";
import { Box, Chip, Divider, Grid, styled, Typography } from "@mui/material";
import { resumeData } from "./resumeData";

export const TypoFont = styled(Typography)(() => ({
  fontSize: "13px",
  color: "#d9d9d9",
}));
const LeftSideResume = () => {
  return (
    <Grid
      item
      xs={4}
      sx={{ background: "#21405c", color: "#fff", padding: "20px" }}
    >
      <Box width={"100%"} height={"140px"}>
        <Typography variant="h4">{resumeData.personalDetail.name}</Typography>
      </Box>
      <Box>
        <Typography>ACHIEVEMENTS</Typography>
        <Divider color="#fff" sx={{ margin: "5px 0" }} />
        <Typography variant="body1" sx={{ margin: "10px 0 5px 0" }}>
          {resumeData.achievements.title}
        </Typography>
        <TypoFont variant="body2">
          {resumeData.achievements.description}
        </TypoFont>
      </Box>
      <Box mt={3}>
        <Typography>STRENGTHS</Typography>
        <Divider color="#fff" sx={{ margin: "5px 0" }} />
        {resumeData.strengths.map((item) => (
          <Box key={item.title}>
            <Typography variant="body1" sx={{ margin: "10px 0 5px 0" }}>
              {item.title}
            </Typography>
            <TypoFont>{item.description}</TypoFont>
          </Box>
        ))}
      </Box>
      <Box mt={3}>
        <Typography>SKILLS</Typography>
        <Divider color="#fff" sx={{ margin: "5px 0" }} />
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexWrap="wrap" // Added to wrap the content
          gap="5px"
        >
          {resumeData.skills.map((item) => (
            <Chip
              key={item.id}
              label={item.skillName}
              size="small"
              variant="filled" // Use variant to control the chip style
              sx={{
                color: "#fff", // Set text color
              }}
            />
          ))}
        </Box>
      </Box>
      <Box mt={3}>
        <Typography>EDUCATION</Typography>
        <Divider color="#fff" sx={{ margin: "5px 0" }} />
        <Typography variant="body1" sx={{ margin: "10px 0 5px 0" }}>
          {resumeData.education.degreeName}
        </Typography>
        <TypoFont
          variant="body2"
          sx={{ margin: "10px 0 5px 0", fontSize: "14px" }}
        >
          {resumeData.education.college}
        </TypoFont>
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <TypoFont variant="body2" sx={{ fontSize: "14px" }}>
            {resumeData.education.duration}
          </TypoFont>
          <TypoFont variant="body2" sx={{ fontSize: "14px" }}>
            {resumeData.education.location}
          </TypoFont>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeftSideResume;
