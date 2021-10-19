import BackToTop from '@components/BackToTop';
import HideOnScroll from '@components/HideOnScroll';
import MuiNextLink from '@components/MuiNextLink';
import Navbar from '@components/Navbar';
import SideDrawer from '@components/SideDrawer';
import Home from '@mui/icons-material/Home';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about us`, path: `/about-us` },
  { title: `menu`, path: `/menu` },
  { title: `catering`, path: `/catering` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <Container maxWidth='lg' sx={{ display: `flex`, justifyContent: `space-between` }}>
              <IconButton edge='start' aria-label='home'>
                <MuiNextLink activeClassName='active' href='/'>
                  <Home sx={{ color: theme => theme.palette.common.white }} fontSize='large' />
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id='back-to-top-anchor' />
      <BackToTop>
        <Fab color='secondary' size='large' aria-label='back to top'>
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
