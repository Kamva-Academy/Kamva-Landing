import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "../../store/action";
import { fetchData } from "../../components/apiService/doc";
import { Fragment, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import TopSiteBanner from "components/molecules/TopSiteBanner";
import AppBar from "components/organisms/AppBar";
import EventCard from "components/organisms/cards/Event";
import EventSkeletonCard from "components/organisms/cards/EventSkeletonCard";

const apiUrl = "https://backend.kamva.academy/api/fsm/event/";

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);
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
      <div className="flex flex-col justify-center w-full items-center">
        <Typography
          sx={{
            fontSize: { md: "36px", xs: "30px" },
            fontWeight: "900",
            fontFamily: "iranyekan",
            paddingBlock: "4rem",
            textAlign: "center",
          }}
        >
          دوره‌ها
        </Typography>
        <div className="  w-11/12 ">
          <Grid container padding={6}>
            {programs.map((e) => {
              console.log(e);
              return (
                <Grid md={4} padding={"10px"} lg={4} sm={6} xs={12}>
                  <EventCard event={e} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default MyComponent;
