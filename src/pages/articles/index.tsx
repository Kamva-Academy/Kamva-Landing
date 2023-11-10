import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from 'store/action';
import { fetchData } from 'components/apiService/doc';
import { Fragment, useEffect, useState } from 'react';
import ArticleCard from 'components/organisms/cards/articleCard';
import { Grid, Typography } from '@mui/material';
import AppBar from 'components/organisms/AppBar';

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [art, setArt] = useState<any[]>([])

  useEffect(() => {
    const fetchAndSaveData = async () => {
      try {
        const result = await fetchData();
        dispatch(fetchDataAction(result));
        setArt(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAndSaveData()
  }, [])

  return (
    <Fragment>
      <AppBar />
      <div className='flex flex-col justify-center w-full items-center'>
        <Typography sx={{ fontSize: { md: 36, xs: 30 }, fontWeight: 900, paddingBlock: "4rem" }}>
          مقاله‌ها
        </Typography>
        <Grid container >
          {art.map(e =>
            <Grid md={4} padding={10} lg={3} sm={6} xs={12} >
              <ArticleCard id={e.id} name={e.name} description={e.description} cover_page={e.cover_page} />
            </Grid>
          )}
        </Grid>
      </div>
    </Fragment>
  );
};

export default MyComponent;