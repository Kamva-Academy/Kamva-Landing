import { Box, Stack, Typography } from '@mui/material';
import React, { FC, useEffect  , useState} from 'react';
import { connect } from 'react-redux';

import { WidgetModes } from 'components/organisms/Widget';
import Widget from 'components/organisms/Widget';
import { useDispatch } from 'react-redux';

import { fetchDataAction } from 'store/action';
import { fetchData } from 'components/apiService/doc';
import ArticleCard from 'components/organisms/cards/ArticleCard';
import AppBar from 'components/organisms/AppBar';

const apiUrl = 'https://backend.kamva.academy/api/fsm/articles/?page=1';
import Layout from 'components/template/GeneralLayout';

type ArticlePropsType = {
  papers: any[];
  getArticle: any;
}

const Article: FC<ArticlePropsType> = ({ papers, getArticle }) => {
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
  
//   const article = papers[articleId];

//   useEffect(() => {
//     getArticle({ articleId });
//   }, []);
const article = articles;
console.log(article)
  return (
    <Layout>
      <Stack spacing={2} maxWidth='sm' sx={{ width: '100%', paddingBottom: 2 }}>
        <Typography
          align="center"
          component="h1"
          variant="h3"
          gutterBottom>
          {article?.name}
        </Typography>
        {article?.widgets.map((widget) => (
          <Box key={widget.id}>
            <Widget paperId={article.id} mode={WidgetModes.View} coveredWithPaper={false} widget={widget} />
          </Box>
        ))}
      </Stack>
    </Layout>
  );
};

// const mapStateToProps = (state) => ({
//   papers: state.paper.papers,
// });

// export default connect(mapStateToProps, {
//   getArticle: getArticleAction
// })(Article);