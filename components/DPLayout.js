import {
  Flex, Box, Spacer
} from '@chakra-ui/react'
import { MNGBody, MNGFootP } from './MNGType'
var dayjs = require('dayjs')

export const DPByline = (props) => {
  // format: "3:09 pm • Sunday • 14 Nov 2021"
  const dateformat = "h:mm a • dddd • D MMM YYYY";
  let datedisplay = dayjs(props.timestamp).format(dateformat);
  return (
    <MNGFootP mt="mngr.4" px={1} color="mngr.dim" {...props}>
      {datedisplay}
    </MNGFootP>
  )
}

export const DPChatbaxu = (props) => {
  const isRani = props.side == "Maharani" ? true : false;
  const bgcolor = isRani ? "mngr.green" : "mngr.dark";
  return (
    <Flex>
      {!isRani && <Spacer />}
      <Box w="61.8%"
        marginBottom="mngr.27"
      >
        <Box
          padding="mngr.27"
          borderRadius="5px"
          backgroundColor={ isRani ? "mngr.green" : "mngr.dark" }
        >
          {props.children}
        </Box>
        <DPByline timestamp={props.timestamp} textAlign={isRani ? undefined : "right"} />
      </Box>
      {isRani && <Spacer />}
    </Flex>
  )
}
