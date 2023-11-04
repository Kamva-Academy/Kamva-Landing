import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { TopSiteBannerType } from 'types/General';
import useWidth from 'utils/useWidth';

type TopSiteBannerPropsType = {
  banner: TopSiteBannerType;
}

const TopSiteBanner: FC<TopSiteBannerPropsType> = ({ banner }) => {
  const width = useWidth();
  return (
    <Button disableRipple sx={{ width: '100%', height: 70, position: 'relative' }}>
      <Image layout='fill' objectFit='cover' style={{ userSelect: 'none', pointerEvents: 'none' }}
        src={(width === 'xs') ? banner.mobile_image : banner.desktop_image} alt="" />
    </Button >
  );
};
export default TopSiteBanner;
