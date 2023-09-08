import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

const AppBarDrawer = ({ items, setDrawerOpen, drawerOpen }) => {
  return (
    <Drawer
      anchor="top" open={drawerOpen}
      onClose={() => setDrawerOpen(false)}>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText sx={{ textAlign: 'right' }}>
                {item.title}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default AppBarDrawer;