import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Stack, Typography } from '@mui/material';

import { fetchDataAction } from 'redux/action';
import { fetchData } from 'components/apiService/doc';
import ArticleCard from 'components/organisms/cards/ArticleCard';
import AppBar from 'components/organisms/AppBar';

const apiUrl = 'https://backend.kamva.academy/api/fsm/articles/?page=1';
const Articles: React.FC = () => {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    const fetchAndSaveData = async () => {
      try {
        const result = await fetchData(apiUrl);
        dispatch(fetchDataAction(result));
        setArticles(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAndSaveData()
  }, [])

  return (
    <Fragment>
      <AppBar />
      <Container maxWidth='lg' sx={{ paddingY: 4 }}>
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Typography fontSize={{ xs: 30, md: 36 }} fontWeight={900} paddingBottom={4}>
            {'مقاله‌ها'}
          </Typography>
          <Grid container spacing={2}>
            {articles.map(article =>
              <Grid item xs={12} sm={6} md={4} key={article.id}>
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