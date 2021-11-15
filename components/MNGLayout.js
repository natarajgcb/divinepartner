import Head from 'next/head'
import Link from 'next/link'
import {
  Container, Center, Text, Box, ListItem, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGFooter } from './MNGFooter'
import { MNGHeader } from './MNGHeader'
import MNGStarfield from './MNGStarfield'
import { MNGBody } from './MNGType'

export const MNGContainer = (props) => {
  return (
    <Container
      paddingTop="0"
      paddingBottom="mngr.27"
      px="mngr.27"
      {...props}
    />
  )
}

export const MNGNote = (props) => {
  return (
    <Box
      padding="mngr.27"
      borderStyle="solid"
      borderColor="mngr.dark"
      borderWidth="0 0 0 7px"
      backgroundColor="mngr.light"
      marginBottom="mngr.27"
      {...props}
    >
      <Text
        fontWeight="400"
        fontSize="mngr.body"
        lineHeight="mngr.body"
        color="mngr.dark"
      >
        {props.children}
      </Text>
    </Box>
  )
}

export const MNGNav = (props) => {
  return (
    <Center as="nav" {...props}>
      {props.children}
    </Center>
  )
}

export const MNGNavLink = (props) => {
  return (
    <Text fontSize="mngr.h3" {...props}>
      {props.children}
    </Text>
  )
}

export const MNGTopNavItem = (props) => {
  return (
    <ListItem fontSize="1.25rem" fontWeight="semibold">
      <ChakraLink as={Link}
        href={props.href}
        _hover={{ color: "mngr.link" }}
      ><a style={{ borderBottom: "none" }}>
        <Text as="span" fontSize="1.25rem">{props.hindiText}</Text>
        &nbsp;{props.engText}
      </a></ChakraLink>
    </ListItem>
  )
}

export const MNGNavItem = (props) => {
  return (
    <ListItem>
      <ChakraLink as={Link}
        href={props.href}
        _hover={{ color: "mngr.link" }}
      ><a style={{ borderBottom: "none" }}>
        <MNGBody {...props}>{props.label}</MNGBody>
      </a></ChakraLink>
    </ListItem>
  )
}

export const MNGPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
        <meta name="description" content={props.meta.description} />
        <meta property="og:title" content={props.og.title} />
        <meta property="og:description" content={props.og.description} />
        <meta property="og:image" content={props.og.image} />
      </Head>
      <MNGContainer>
        <MNGStarfield />
        <MNGHeader />
        {props.children}
        <MNGFooter />
      </MNGContainer>
    </>
  )
}
