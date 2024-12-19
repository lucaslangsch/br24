import { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, List, ListItem, ListItemText, Box, ListItemButton, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && ((event).key === 'Tab' || (event).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar color='primary'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <Link to="/empresas" onClick={toggleDrawer(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Empresas" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/contatos" onClick={toggleDrawer(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Contatos" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
