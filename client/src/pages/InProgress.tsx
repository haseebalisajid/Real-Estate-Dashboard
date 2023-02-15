import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/123532-coding.json";
import {Box,Typography} from "@pankod/refine-mui"

const InProgress = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Typography fontSize={25} fontWeight={700} color="#11142D" mb={2}>Working on it.</Typography>
      <Lottie style={{width:'40%',height:'40%'}} animationData={groovyWalkAnimation} loop={true} />
    </Box>
  )
}

export default InProgress