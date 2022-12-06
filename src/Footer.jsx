import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          target="_blank"
          href="https://github.com/kotynskm"
          label="GitHub"
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction
          target="_blank"
          href="https://www.linkedin.com/in/kkotynski/"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <BottomNavigationAction
          target="_blank"
          href="mailto:k.kotynski@gmail.com"
          label="Email"
          icon={<EmailIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
