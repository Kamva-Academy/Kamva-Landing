import { Fragment } from "react";
import { Grid, Typography, Stack, Container } from "@mui/material";
import AppBar from "components/organisms/AppBar";
import ProgramCard from "components/organisms/cards/ProgramCard";
import { useGetProgramsQuery } from "redux/features/programSlice";
import EventSkeletonCard from "components/organisms/cards/SkeletonCard";
import { ProgramType } from "types/models";

const Programs: React.FC = ({ }) => {

  const {
    data: programs = [],
    isLoading,
  } = useGetProgramsQuery({ pageNumber: 1 });

  return (
    <Fragment>
      <AppBar />
      <Container maxWidth='lg'>
        <Stack width='100%'>
          <Typography marginTop={4} textAlign={'center'} fontSize={{ xs: 30, md: 36 }} fontWeight={900} paddingBottom={4}>
            {'دوره‌ها'}
          </Typography>
          <Grid container spacing={2}>
            {isLoading &&
              [1, 2, 3, 4, 5, 6].map(() =>
                <Grid item xs={12} sm={6} md={4}>
                  <EventSkeletonCard />
                </Grid>
              )
            }
            {programs.map((program: ProgramType) =>
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
