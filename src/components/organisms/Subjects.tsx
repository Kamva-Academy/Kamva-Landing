import { Box, Container, Grid, Typography } from "@mui/material";
import pic1 from "assets/computer board.png";
import pic2 from "assets/dna.png";
import pic3 from "assets/medical flask with blue liquid.png";
import pic4 from "assets/Student studying math.png";
import pic5 from "assets/engliesh-icon.png";
import SubjectCard from "components/molecules/SubjectCard";
import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';

const Subjects = () => {

  let subjects = [
    {
      picture: pic1,
      title: 'علوم کامپیوتر',
      color: '#99d3fb'
    },
    {
      picture: pic2,
      title: 'زیست',
      color: '#0EA51D'
    },
    {
      picture: pic3,
      title: 'شیمی',
      color: '#894FD8'
    },
    {
      picture: pic4,
      title: 'ریاضیات',
      color: '#FFD358'
    },
    {
      picture: pic5,
      title: 'زبان',
      color: '#ff3838'
    },
  ]
  // because of swiper bug: https://stackoverflow.com/questions/75450242/swiper-js-loop-when-slidesperview-is-bigger-than-half-of-the-amount-of-slides
  subjects = [...subjects, ...subjects];

  return (
    <Box sx={{
      background: '#FFEEBE',
      paddingTop: { xs: 8, md: 18 },
      clipPath: {
        xs: 'polygon(50% 14%, 100% 0, 100% 100%, 0 100%, 0% 50%, 0 0)',
        md: 'polygon(50% 22%, 100% 0, 100% 100%, 0 100%, 0% 50%, 0 0)'
      },
    }}>
      <Container maxWidth='lg'>
        <Grid
          container
          alignItems={'center'}
          justifyContent={"space-evenly"}
          width={'100%'}
          height={{ xs: 400, md: 450 }}>
          <Grid item xs={12} md={3}>
            <Typography
              textAlign={"center"}
              fontSize={{ xs: 28, md: 30 }}
              fontWeight={500}>
              {'در هر موضوعی...'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Swiper
              loop
              speed={600}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1 },
                450: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
              }}
              allowTouchMove={false}
              modules={[Virtual, Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              virtual>
              {subjects.map((subject, index) =>
                <SwiperSlide key={index} virtualIndex={index}>
                  <SubjectCard picture={subject.picture} title={subject.title} backgroundColor={subject.color} />
                </SwiperSlide>
              )}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Subjects;
