import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../../store/action';
import { fetchData } from '../../components/apiService/doc';
import { Fragment, useEffect, useState } from 'react';
import ArticleCard from 'components/organisms/cards/articleCard';
import { Grid, Typography } from '@mui/material';
import TopSiteBanner from 'components/molecules/TopSiteBanner';
import AppBar from 'components/organisms/AppBar';

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);
  const [art , setArt ] = useState([])
  useEffect(()=>{
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
  },[])
  return (
    <Fragment>
      <AppBar />
      <div className='flex flex-col justify-center w-full items-center'>
        <Typography sx={{fontSize:{md:"36px" , xs:"30px"} , fontWeight:"900" , fontFamily: "iranyekan", paddingBlock:"4rem"}}>
          مقاله‌ها
        </Typography>
      <div className='  w-11/12 '>
      <Grid container >

{
 art.map(e=>{
  console.log(e)
  return(
    <Grid md={4} padding={"10px"} lg={3} sm={6} xs={12} >
         <ArticleCard id={e.id} name={e.name} description={e.description}  cover_page={e.cover_page} />
    </Grid>
  )
    }
  )
 }

</Grid>
      </div>
      </div>
    
    
    </Fragment>
  );
};

export default MyComponent;