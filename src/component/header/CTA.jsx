import React, { useState } from "react";
import Resume from "./Resume";
import { Modal, Box, Button } from "@mui/material";
import resume from "../../Images/resume.pdf";
import { Close, Download } from "@mui/icons-material";

const CTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="cta">
        <button className="btn" onClick={() => setOpen(true)}>
          Resume Preview & Download
        </button>
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            height: 800,
            bgcolor: "background.paper",
            borderRadius: "10px",
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Close
              onClick={() => setOpen(false)}
              sx={{
                color: "#000",
                margin: "10px 0 0 15px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            />
            <Button
              startIcon={<Download />}
              href={resume}
              download
              sx={{
                "&:hover": {
                  color: "#4a38ec",
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
          <Resume />
        </Box>
      </Modal>
    </>
  );
};

export default CTA;
