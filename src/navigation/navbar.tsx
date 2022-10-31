import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import "@fontsource/inter";

const pages = ['Product', 'Pricing', 'About us'];
const settings = ['Profile', 'Account', 'Result', 'Logout'];

function Navbar(loggedIn: boolean) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#ffff",
        boxShadow: "none"
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <img src={logo} width={45} height={45} alt="Logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 200,
              fontSize: '17px',
              color: '#4B5563',
              textDecoration: 'none',
            }}
          >
            Orkurík
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              ml: "10px",
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {pages.map((page) => (
              <Box
                sx={{
                  mx: "10px"
                }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#4B5563',
                    fontFamily: "Inter",
                    textTransform: "none",
                  }}
                  style={{
                    fontSize: "14px"
                  }}
                >
                  {page}
                </Button>
              </Box>
            ))}
          </Box>
          {loggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "small",
                        color: '#4B5563'
                      }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            ):(
            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  color: "#4B5563",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  textTransform: "none",
                  mr: "15px"
                }}
              >
                Login
              </Button>
              <Button
                sx={{
                  background: "#527643",
                  color: "#ffff",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  borderRadius: "50px",
                  textTransform: "none",
                  padding: "7px 14px"
                }}
              >
                Try for free
              </Button>
            </Box>
            )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
