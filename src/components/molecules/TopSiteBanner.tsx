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

  let imageSrc: string | null = null;

  if (width === 'xs' && banner.mobile_image) {
    imageSrc = banner.mobile_image;
  } else if (banner.desktop_image) {
    imageSrc = banner.desktop_image;
  }

  if (!imageSrc) {
    return null;
  }

  return (
    <Button disableRipple sx={{ width: '100%', height: 70, position: 'relative', padding: 0 }} onClick={() => window.location.href = banner.redirect_to}>
      <Image fill style={{ userSelect: 'none', pointerEvents: 'none', objectFit: 'cover' }} src={imageSrc} alt="" />
    </Button >
  );
};

export default TopSiteBanner;
