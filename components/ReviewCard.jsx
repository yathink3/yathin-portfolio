import { Avatar, Card, CardContent, CardHeader, Rating, Typography } from '@mui/material';
import { blueGrey, orange, red } from '@mui/material/colors';

const colors = [red, blueGrey, orange];

const ReviewCard = ({ name, body, rating }) => {
  const color = colors[parseInt(Math.random() * 10) % colors.length][500];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label={`${name} profile letter`}>
            {name.slice(0, 2).toUpperCase()}
          </Avatar>
        }
        title={name}
      />
      <CardContent>
        <Rating value={rating} precision={0.5} readOnly />
        <Typography variant='body2' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
