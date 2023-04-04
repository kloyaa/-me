import React from "react";
import { chakra, Heading, useToken } from "@chakra-ui/react";
import { Box, Flex, useColorModeValue, Link, Stack, Text, Badge, Button,  Icon, SimpleGrid } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";


function ServicesAndProjects() {
  const formatter = new Intl.NumberFormat(undefined, { currency: 'PHP', style: 'currency' })
 return <>
 <SimpleGrid columns={2} spacing={10} mx={'56'}>
   <Box
   p={'20'}
   boxShadow={'2xl'}>
      <Heading size={'2xl'} color={'gray.700'}>Student</Heading>
      <Heading
        size={'md'}
        fontWeight={'normal'}
        color={'gray.600'}
        mt={'2'}>Starts at {formatter.format(17_000)}</Heading>
      <Box my={'10'}>
      Student projects are focused on building software solutions that meet specific academic requirements or objectives. These projects can range from building simple websites or applications to developing complex software systems. The main goal of student projects is to help students learn new technologies and programming languages, while also demonstrating their ability to apply these skills to real-world scenarios.
      </Box>
      <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
        Email
      </Button>
    </Box>
    <Box p={'20'} boxShadow={'2xl'}>
      <Heading size={'2xl'} color={'gray.700'}>Personal</Heading>
      <Heading
        size={'md'}
        fontWeight={'normal'}
        color={'gray.600'}
        mt={'2'}>Starts at {formatter.format(50_000)}</Heading>
      <Box my={'10'}>
      Personal projects are typically self-directed and based on the developer's personal interests or goals. They can range from building personal websites or mobile applications to developing software tools or experimenting with new technologies. The main goal of personal projects is to help developers improve their skills, learn new technologies, and showcase their abilities to potential employers or clients.
      </Box>
      <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
        Email
      </Button>
    </Box>
    <Box p={'20'} boxShadow={'2xl'}>
      <Heading size={'2xl'} color={'gray.700'}>Business</Heading>
      <Heading
        size={'md'}
        fontWeight={'normal'}
        color={'gray.600'}
        mt={'2'}>Starts at {formatter.format(150_000)}</Heading>
      <Box my={'10'}>
      Business projects are focused on building software solutions that meet specific business requirements or objectives. These projects can range from building e-commerce websites or mobile applications to developing custom software tools or integrating third-party APIs. The main goal of business projects is to help businesses streamline their operations, improve efficiency, and increase revenue through the use of technology.
      </Box>
      <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
        Email
      </Button>
    </Box>
</SimpleGrid>


 </>
}

export default ServicesAndProjects
