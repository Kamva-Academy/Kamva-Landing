import { Fragment } from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';

import ArticleCard from 'components/organisms/cards/ArticleCard';
import AppBar from 'components/organisms/AppBar';
import EventSkeletonCard from 'components/organisms/cards/SkeletonCard';
import { useGetArticlesQuery } from 'redux/features/articleSlice';

const Articles: React.FC = ({ }) => {

  const {
    data: articles = [],
    isLoading,
  } = useGetArticlesQuery({ pageNumber: 1 });

  return (
    <Fragment>
      <AppBar />
      <Container maxWidth='lg'>
        <Stack width={'100%'}>
          <Typography marginTop={4} textAlign={'center'} fontSize={{ xs: 30, md: 36 }} fontWeight={900} paddingBottom={4}>
            {'مقاله‌ها'}
          </Typography>
          <Grid container spacing={2}>
            {isLoading &&
              [1, 2, 3, 4, 5, 6, 7, 8].map(() =>
                <Grid item xs={12} sm={6} md={3}>
                  <EventSkeletonCard />
                </Grid>
              )
            }
            {articles.map((article: any) =>
              <Grid item xs={12} sm={6} md={3} key={article.id}>
                <ArticleCard id={article.id} name={article.name} description={article.description} coverPage={article.cover_page} />
              </Grid>
            )}
          </Grid>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Articles;