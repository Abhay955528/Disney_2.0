import React from "react"
import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

export default function DrawerComponent({ open, onClose , PaperProps  }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}
       PaperProps={{
        sx: { backgroundColor: "#0F1014",color: "white"}}}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {["Home", "About", "Contact"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}