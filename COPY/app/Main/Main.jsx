"use client"

import { Stack } from "@mui/material"
import Sec1 from "./sec1"
import Sec2 from "./sec2"
import Sec3 from "./sec3"

export default function Main() {
  return (
    <Stack sx={{backgroundColor:"rgb(0,61,54)",zIndex:3,pt:"13rem"}}>
      <Sec1/>
      <Sec2/>
      <Sec3/>
    </Stack>
  )
}
