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
    <Button disableRipple sx={{ width: '100%', height: 70, position: 'relative' }} onClick={() => window.location.href = banner.redirect_to}>
      <Image fill style={{ userSelect: 'none', pointerEvents: 'none' }}
        src={(width === 'xs') ? banner.mobile_image : banner.desktop_image} alt="" />
    </Button >
  );
};
export default TopSiteBanner;
