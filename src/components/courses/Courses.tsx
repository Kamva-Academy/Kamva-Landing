import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import iconpic from "../../assets/View All.png"
import lighpic from "../../assets/lightbulb.png"

export default function Courses(){
    return(
        <Box>
            <Box>
                <Box >
                    <Box>
                        <Link href={""}><Button>
                            <Typography>مشاهده همه
                                </Typography>
                                <Image alt="" src={iconpic}></Image></Button></Link>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>دوره‌های فعلی</Typography>
                            </Box>
                        <Image alt="" src={lighpic}></Image>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}