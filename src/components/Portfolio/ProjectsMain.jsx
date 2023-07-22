import { Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ProjectItems from './ProjectItems'
const ProjectsMain = () => {
  return (
		<Container
			m='0'
			id='projects'
			maxW='100%'
			p='5'
			w='full'
			h='full'
			bg={useColorModeValue("gray.100", "gray.900")}>
			<ProjectItems />
		</Container>
  );
}

export default ProjectsMain
