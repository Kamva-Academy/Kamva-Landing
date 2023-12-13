import { Fragment } from "react";
import { Grid, Typography, Stack, Container } from "@mui/material";
import AppBar from "components/organisms/AppBar";
import ProgramCard from "components/organisms/cards/ProgramCard";
import { useGetProgramsQuery } from "redux/features/programSlice";
// import EventSkeletonCard from "components/organisms/cards/EventSkeletonCard";

const Programs: React.FC = () => {

  const {
    data: programs = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetProgramsQuery(1);

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
