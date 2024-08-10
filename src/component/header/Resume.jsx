import {
  Box,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { resumeData } from "./resumeData";
import { Email, Phone } from "@mui/icons-material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LeftSideResume from "./LeftSideResume";

const StyledLink = styled(Link)(() => ({
  fontSize: "13px",
  "&:hover": {
    color: "#502bf3",
  },
}));
const FlexStart = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: "5px",
  alignItems: "center",
}));
const FlexSpaceBetween = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TypoFont = styled(Typography)(() => ({
  fontSize: "13px",
  color: "#595959",
}));
const CustomListItem = styled(ListItem)(() => ({
  fontSize: "13px",
  color: "#595959",
  padding: "0",
  listStyleType: "disc",
  marginLeft: "20px",
  lineHeight: "18px",
}));
const Resume = () => {
  return (
    <Box
      sx={{
        width:"100%",
        height:"100%",
        color: "#000",
        overflow: "auto",
        scrollbarColor: "#3848da",
        scrollbarWidth: "thin",
      }}
     
    >
      <Grid
        container
        fontFamily={'"Roboto", sans-serif'}
        id="resume"
      >
        <LeftSideResume />
        <Grid item xs={8} padding={"20px"} sx={{background:"#fff"}}>
          <Typography color={"primary"}>
            {resumeData.personalDetail.jobTitle}
          </Typography>
          <Box mt={1}>
            <FlexStart sx={{ gap: "10px" }}>
              <FlexStart>
                <Phone fontSize="18px" />{" "}
                <Typography fontSize={"14px"}>8840216454</Typography>
              </FlexStart>
              <FlexStart>
                <Email fontSize="18px" />{" "}
                <Typography>
                  <StyledLink href="#">vishalgangwar094@gamil.com</StyledLink>
                </Typography>
              </FlexStart>
            </FlexStart>
            <Box>
              <FlexStart>
                <LinkedInIcon fontSize="18px" />{" "}
                <Typography>
                  <StyledLink href={resumeData.personalDetail.linkedInProfile}>
                    {resumeData.personalDetail.linkedInProfile}
                  </StyledLink>
                </Typography>
              </FlexStart>
            </Box>
            <Box>
              <FlexStart>
                <AttachFileOutlinedIcon
                  fontSize="18px"
                  sx={{ rotate: "45deg" }}
                />{" "}
                <Typography>
                  <StyledLink href={resumeData.personalDetail.portfolioLink}>
                    {resumeData.personalDetail.portfolioLink}
                  </StyledLink>
                </Typography>
              </FlexStart>
            </Box>
            <Box>
              <FlexStart>
                <GitHubIcon fontSize="18px" />{" "}
                <Typography>
                  <StyledLink href={resumeData.personalDetail.githubLink}>
                    {resumeData.personalDetail.githubLink}
                  </StyledLink>
                </Typography>
              </FlexStart>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>SUMMARY</Typography>
            <Divider sx={{ margin: "5px 0" }} />
            <TypoFont variant="body2">
              {resumeData.summary.description}
            </TypoFont>
          </Box>
          <Box mt={2}>
            <Typography>EXPERIENCE</Typography>
            <Divider sx={{ margin: "5px 0" }} />
            <Box>
              {resumeData.experience.map((item) => (
                <Box key={item.companyStartingDate}>
                  <FlexSpaceBetween>
                    <Typography>{item.jobTitle}</Typography>
                    <Typography variant="body1" fontSize={"14px"}>
                      {item.companyStartingDate + "-" + item.companyEndingDate}
                    </Typography>
                  </FlexSpaceBetween>
                  <FlexSpaceBetween>
                    <Typography color={"primary"}>
                      {item.companyName}
                    </Typography>
                    <Typography variant="body1" fontSize={"14px"}>
                      {item.location}
                    </Typography>
                  </FlexSpaceBetween>
                  <List>
                    {item.description.map((item02) => (
                      <CustomListItem
                        key={item02}
                        sx={{ display: "list-item" }}
                      >
                        {item02}
                      </CustomListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>PROJECTS</Typography>
            <Divider sx={{ margin: "5px 0" }} />
            <Box>
              {resumeData.project.map((item) => (
                <Box key={item.projectName}>
                  <FlexSpaceBetween>
                    <Typography>{item.projectName}</Typography>
                    <Typography variant="body1" fontSize={"14px"}>
                      {item.projectStartDate + "-" + item.projectEndDate}
                    </Typography>
                  </FlexSpaceBetween>
                  <TypoFont variant="body2" sx={{ m: "10px 0" }}>
                    {item.description}
                  </TypoFont>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
