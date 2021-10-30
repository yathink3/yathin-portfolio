import { Container, Grid, Typography } from '@mui/material';
import ReviewCard from './ReviewCard';

const SectionReview = () => {
  return (
    <Container maxWidth='md' sx={{ my: 15 }}>
      <Typography variant='h2' textAlign='center' sx={{ mb: 10 }}>
        Customer Review
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent='center' xs={12} sm={6} md={4}>
          <ReviewCard name={'Alex'} rating={5} body={'I never taste something like this before. Japanese mix Western cuisine. Some good, some weird taste to me. Overall the cooking tastes good.'} />
        </Grid>
        <Grid container item justifyContent='center' xs={12} sm={6} md={4}>
          <ReviewCard name={'Mona'} rating={4} body={'Sushi with gravy mushroom sauce, fried chicken with teriyaki sauce, watermelon with green tea ice cream. Cool! New fresh taste to me.'} />
        </Grid>
        <Grid container item justifyContent='center' xs={12} sm={6} md={4}>
          <ReviewCard name={'Shanen'} rating={4.5} body={'Wasabi with steak, huh? What a fusion! Taste a bit weird but acceptable. I reserve my last star until my next visit.'} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
