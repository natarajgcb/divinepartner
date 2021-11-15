import { Box, Heading, Text, Button, Image, Link as ChakraLink} from '@chakra-ui/react'
import Link from 'next/link'

export const MNGHindiTitle = (props) => {
  const textAlign = props.left ? "left" : "center";
  return (
    <Box w="100%" textAlign={textAlign}>
      <MNGTitle mt="mngr.44" mb="0">{props.hindiText}</MNGTitle>
      <MNGH2 mt="0">{props.engText}</MNGH2>
    </Box>
  )
}

export const MNGHindiHeading = (props) => {
  const textAlign = props.left ? "left" : "center";
  return (
    <Box w="100%" textAlign={textAlign}>
      <MNGH1 mt="mngr.11" mb="0" fontWeight="400">{props.hindiText}</MNGH1>
      <MNGH3 mt="0" fontWeight="400">{props.engText}</MNGH3>
    </Box>
  )
}

export const MNGLandLaunchpad = (props) => {
  return (
    <Box textAlign="center">
      <MNGBody mb={0}><em>Start here ...</em></MNGBody>
      <ChakraLink as={Link} href="/land">
        <Button bg="mngr.button" color="mngr.light" px={8} h={206} w={206} my="mngr.11"
          borderRadius="full" boxShadow="0 0 40px 6px rgba(48,9,49,0.69)"
          _hover={{ bg: "mngr.button_h" }}>
          <MNGHindiHeading hindiText="भूमि" engText="LAND" />
        </Button>
      </ChakraLink>
      <MNGBody>
        <em>... always start here.</em>
      </MNGBody>
    </Box>
  )
}

export const MNGHummingbirdSpacer = (props) => {
  return (
    <Image w="100%" src="/img/hummingbirdDivider.png" alt="Master Nataraj G Hummingbird Art" mx="auto" my="mngr.88" {...props} />
  )
}

export const MNGBOLD = (props) => {
  return (
    <Heading as="h1"
      fontWeight="900"
      fontSize="mngr.h1"
      lineHeight="1.618"
      marginBottom="mngr.27"
      bgGradient="linear(to-l, #D5E6FF,#C9B4A9,#8F9BDD)"
      bgClip="text"
      {...props}
    />
  )
}

export const MNGTitle = (props) => {
  return (
    <Heading as="h1"
      fontWeight="900"
      fontSize="mngr.title"
      lineHeight="mngr.title"
      marginBottom="mngr.27"
      {...props}
    />
  )
}

export const MNGH1 = (props) => {
  return (
    <Heading as="h1"
      fontWeight="600"
      fontSize="mngr.h1"
      lineHeight="mngr.h1"
      marginBottom="mngr.27"
      {...props}
    />
  )
}

export const MNGH2 = (props) => {
  return (
    <Heading as="h2"
      fontWeight="600"
      fontSize="mngr.h2"
      lineHeight="mngr.h2"
      marginTop="mngr.44"
      marginBottom="mngr.17"
      {...props}
    />
  )
}

export const MNGH3 = (props) => {
  return (
    <Heading as="h3"
      fontWeight="600"
      fontSize="mngr.h3"
      lineHeight="mngr.h3"
      marginTop="mngr.27"
      marginBottom="mngr.11"
      {...props}
    />
  )
}

export const MNGCalloutP = (props) => {
  return (
    <Text
      fontWeight="600"
      fontSize="mngr.h3"
      lineHeight="mngr.h3"
      marginTop="mngr.11"
      marginBottom="mngr.11"
      {...props}
    />
  )
}

export const MNGBody = (props) => {
  return (
    <Text
      fontWeight="400"
      fontSize="mngr.body"
      lineHeight="mngr.body"
      marginBottom="mngr.27"
      {...props}
    />
  )
}

export const MNGFootP = (props) => {
  return (
    <Text
      fontWeight="400"
      fontSize="mngr.foot"
      lineHeight="mngr.foot"
      marginBottom="mngr.17"
      {...props}
    />
  )
}
