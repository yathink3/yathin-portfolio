import MuiNextLink from '@components/MuiNextLink';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component='footer' sx={{ py: 5, bgcolor: 'primary.main' }}>
      <Stack direction='row' justifyContent='center' spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink sx={{ textDecoration: 'none', color: 'common.white' }} href='https://YourFacebookLink/' target='_blank' rel='noopener noreferrer'>
          <Facebook fontSize='large' />
        </MuiNextLink>
        <MuiNextLink sx={{ textDecoration: 'none', color: 'common.white' }} href='https://YourInstagramLink/' target='_blank' rel='noopener noreferrer'>
          <Instagram fontSize='large' />
        </MuiNextLink>
        <MuiNextLink sx={{ textDecoration: 'none', color: 'common.white' }} href='https://YourTwitterLink/' target='_blank' rel='noopener noreferrer'>
          <Twitter fontSize='large' />
        </MuiNextLink>
      </Stack>
      <Typography align='center' color='common.white'>
        © 1994 - {new Date().getFullYear()}, De West Sakura Restaurant
      </Typography>
    </Box>
  );
};

export default Footer;
