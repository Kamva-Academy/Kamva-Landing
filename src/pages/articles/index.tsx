import { Fragment } from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';

import ArticleCard from 'components/organisms/cards/ArticleCard';
import AppBar from 'components/organisms/AppBar';
import EventSkeletonCard from 'components/organisms/cards/SkeletonCard';
import { useGetArticlesQuery } from 'redux/features/articleSlice';


const Articles: React.FC = () => {

  const {
    data: articles = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetArticlesQuery(1);

  return (
    <Fragment>
      <AppBar />
      <Container maxWidth='lg' sx={{ paddingY: 4 }}>
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Typography fontSize={{ xs: 30, md: 36 }} fontWeight={900} paddingBottom={4}>
            {'مقاله‌ها'}
          </Typography>
          <Grid container spacing={2}>
            {articles.map((article: any) =>
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <EventSkeletonCard />
                {/* <ArticleCard id={article.id} name={article.name} description={article.description} coverPage={article.cover_page} /> */}
              </Grid>
            )}
          </Grid>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Articles;