import { Container, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import css from "./styles/index.css"
const GitHubStats = () => {
  return (
    <Container m="auto" maxW="100%" p="5" w="full" h="full" bgColor={"white"}>
      <Grid
        w="100%"
        p={8}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gridGap={3}
        placeItems="center">
        <GridItem
          width={{ base: "full", md: "70%" }}
          colSpan={{ base: "1", md: "2" }}
          // border='1px solid red'
        >
          <GitHubCalendar
            username="Sagarbisht07"
            blockSize={15}
            blockMargin={4}
            fontSize={15}
            tooltipProps={{ "data-testid": "tooltip" }}
            title="GitHub Calendar"
          /><br />
        </GridItem>
        <GridItem
          rowSpan={{ base: "1", md: "2" }}>
          <Flex
		  gap={20}
		  className="github-stats-card"
		  width={"100%"}
		  >
            <Image
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sagarbisht07&layout=compact&theme=radical&hide_border=true"
              width="100%"
            />
            <Image
              id="github-streak-stats"
              mt="2"
              src="https://github-readme-streak-stats.herokuapp.com?user=Sagarbisht07&theme=radical&hide_border=true"
              width="85%"
            />
          </Flex>
        </GridItem><br />
        <GridItem width={{ base: "full", md: "400px", lg: "600px" }}>
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Sagarbisht07&show_icons=true&theme=radical&count_private=true&include_all_commits=true&hide=issues,contribs&hide_border=true&line_height=24"
            width="100%"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default GitHubStats;
