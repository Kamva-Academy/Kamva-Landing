import {
  Box,
  IconButton,
  Drawer,
  Stack,
  AppBar as MUIAppBar,
  Container,
  Toolbar,
  List,
  ListItem,
} from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import Brand from 'components/atoms/Brand';
import AppBarButton from 'components/atoms/AppBarButton'
import LoginButton from "components/atoms/LoginButton";
import { useState } from "react";

function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const items = [
    { href: '', title: 'دوره‌ها' },
    { href: '', title: 'دانستنی‌ها' },
    { href: '', title: 'درباره ما' },
  ];

  return (
    <MUIAppBar position='relative' color='transparent' sx={{ boxShadow: 'none' }}>
      <Toolbar disableGutters>
        <Container maxWidth='xl'>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box sx={{ display: { xs: 'inline', sm: 'inline', md: 'none' } }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(!drawerOpen)}
                size="large">
                <MenuIcon />
              </IconButton>
            </Box>
            <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
              <Box sx={{ marginLeft: { md: 3 } }}>
                <Brand />
              </Box>
              <Stack direction="row" alignItems="center" justifyContent={'space-between'} spacing={3}
                sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
                {/* todo: this empty box is required due to MUI Stack bug */}
                <Box />
                {items.map((item, index) => (
                  <AppBarButton key={index} href={item.href} title={item.title} />
                ))}
              </Stack>
            </Stack>
            <LoginButton />
          </Stack>
        </Container>
      </Toolbar>
      <Drawer
        anchor="top" open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}  >
              <AppBarButton href={item.href} title={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </MUIAppBar>
  )
}

export default AppBar;