import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';

export type ArticleType = {
  id: number;
  name?: string;
  description?: string;
  coverPage?: string;
}

const ArticleCard: FC<ArticleType> = ({ id, name = '', description = '', coverPage = '' }) => {

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
      // maxWidth: 300,
    }}>
      <Box>
        <Stack
          direction="row"
          sx={{
            padding: "10px",
            background: '#eee',
            height: "40px",
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center'
          }}>
          {/* <Tooltip title='ویرایش' arrow>
              <IconButton component={Link} to={`/edit-article/${id}`} >
                <ModeEditTwoToneIcon />
              </IconButton>
            </Tooltip> */}
        </Stack>
        <CardMedia
          sx={{ height: 200 }}
          image={coverPage ? coverPage : `${process.env.PUBLIC_URL}/logo.png`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button
          variant="outlined"
          fullWidth
          color="primary">
          {'مشاهده'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;