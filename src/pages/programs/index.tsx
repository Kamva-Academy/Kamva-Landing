import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "redux/action";
import { fetchData } from "components/apiService/doc";
import { Fragment, useEffect, useState } from "react";
import { Grid, Typography, Stack, Container } from "@mui/material";
import AppBar from "components/organisms/AppBar";
import ProgramCard from "components/organisms/cards/ProgramCard";
// import EventSkeletonCard from "components/organisms/cards/EventSkeletonCard";

const apiUrl = "https://backend.kamva.academy/api/fsm/event/";

const Programs: React.FC = () => {
  const dispatch = useDispatch();
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchAndSaveData = async () => {
      try {
        const result = await fetchData(apiUrl);
        dispatch(fetchDataAction(result));
        setPrograms(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAndSaveData();
  }, []);

  return (
    <Fragment>
      <AppBar />
      <Container maxWidth='lg'>
        <Stack width='100%'>
          <Typography
            sx={{
              fontSize: { md: "36px", xs: "30px" },
              fontWeight: "900",
              fontFamily: "iranyekan",
              paddingBlock: "4rem",
              textAlign: "center",
            }}>
            {'دوره‌ها'}
          </Typography>
          <Grid container spacing={2}>
            {programs.map((program) =>
              <Grid item xs={12} sm={6} md={4} >
                <ProgramCard event={program} />
              </Grid>
            )}
          </Grid>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Programs;
