import React from "react";
import { Box,  Stack,  useColorModeValue } from "@chakra-ui/react";
import ScrollContainer from "../../utils/ScrollContainer";

const ProjectItems = () => {
	return (
		<Box
			py={6}
			px={5}
			h='100%'
			bg={useColorModeValue("white", "#000000")}
			mt={10}
			boxShadow={useColorModeValue("lg", "dark-lg")}
			_hover={{
				transform: "translateY(-5px)",
				transition: "all 0.2s ease-out",
				boxShadow: "0 10px 50px -20px #b0c4de",
			}}>
			<Stack spacing={4} width={"100%"} direction={"column"}>
				<Stack
					p={2}
					alignItems={"center"}
					justifyContent={{
						base: "flex-start",
						md: "space-around",
					}}
					direction={{
						base: "column",
						md: "row",
					}}></Stack>

				<ScrollContainer />
			</Stack>
		</Box>
	);
};

export default  ProjectItems ;
