import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../logo/Logo";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Avatar, Badge, Button, Divider } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function AppBarMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClickOpen = () => {
    setOpen(true);
    handleMenuClose();
  };

  const handleLogin = async () => {
    try {
      handleCloseNavMenu();
      await logout(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = async () => {
    try {
      handleCloseNavMenu();
      await logout(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error(error);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ my: 1.5, px: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {user?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {user?.email}
        </Typography>
      </Box>

      <Divider sx={{ borderStyle: "dashed" }} />

      <MenuItem
        onClick={handleMenuClose}
        to="/order"
        component={RouterLink}
        sx={{ mx: 1 }}
      >
        My Oder
      </MenuItem>
      {!user ? (
        <MenuItem sx={{ mx: 1 }} onClick={handleClickOpen}>
          Account Settings
        </MenuItem>
      ) : (
        <MenuItem
          onClick={handleMenuClose}
          to="/account"
          component={RouterLink}
          sx={{ mx: 1 }}
        >
          Account Settings
        </MenuItem>
      )}

      <Divider sx={{ borderStyle: "dashed" }} />

      {!user ? (
        <MenuItem onClick={handleLogin} sx={{ m: 1 }}>
          Login
        </MenuItem>
      ) : (
        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ mb: 3}}>
      <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,  ml:2 }}
          >
            <Logo />
          </IconButton>

          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              display: { xs: "none", md: "flex", sm: "block" },
              fontWeight: 800,
              fontFamily: "Comic Sans MS"
            }}
          >
            Mini Food
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              onClick={handleOpenNavMenu}
              arial-label="account user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              size="large"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Home Page</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Store</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              
            }}
          >
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Home Page
            </Button>
            <Button
              onClick={() => {
                navigate("/store");
              }}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Store
            
            </Button>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Contact
            </Button>
          </Box>
          <Toolbar>
            <Box>
              <Avatar
                onClick={handleProfileMenuOpen}
                src={user?.avatarUrl}
                alt={user?.name}
                sx={{ width: 32, height: 32 }}
              />
            </Box>
            {renderMenu}
          </Toolbar>
          <Box>
            {user ? (
              <IconButton
                onClick={() => console.log("onclick cart")}
                to="/cart"
                aria-label="Show cart"
                color="inherit"
              >
                <Badge color="primary">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            ) : (
              <IconButton
                onClick={() => console.log("onclick cart")}
                to="/cart"
                aria-label="Show cart"
                color="inherit"
              >
                <Badge color="primary">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarMenu;
