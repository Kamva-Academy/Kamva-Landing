import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../../store/action';
import { fetchData } from '../../components/apiService/doc';
import { useEffect, useState } from 'react';
import ArticleCard from 'components/organisms/cards/articleCard';
import { Grid } from '@mui/material';

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
    <div>
      <Grid container>

      {
       art.map(e=>{
        console.log(e)
        return(
          <Grid md={4}>
               <ArticleCard id={e.id} name={e.name} description={e.description}  cover_page={e.cover_page} />
          </Grid>
        )
          }
        )
       }
  
      </Grid>
    
    </div>
  );
};

export default MyComponent;