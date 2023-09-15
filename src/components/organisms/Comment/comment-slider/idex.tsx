import { Box, Typography } from "@mui/material";
import Image from "next/image";
import appMusic from "../../../../assets/Apple Music Lyrics.png"

const SliderCard = () => {
    return ( 
        <Box>
                <Box sx={{width:"22rem" , height:"35rem", borderRadius:"1.25rem" , border:"5px solid #00376F" , background:"#FFF"}}>
                    <Box sx={{width:"14rem" , height:"13rem" , borderRadius:"13.9rem"}}></Box>
                    <Typography>
                    آرین سالمی
                    </Typography>
                    <Typography>
                    دانش‌آموز
                    </Typography>
                    <Box>
                        <Image alt="" src={appMusic} />
                    </Box>
                    <Typography>
                    به نظر من دوره خیلی خوبی بود و خیلی چیز‌ها یاد گرفتم.
                    </Typography>
                </Box>
        </Box>
     );
}
 
export default SliderCard;