import { Center } from '@chakra-ui/react'
import { MNGNote } from './MNGLayout'
import { MNGBOLD, MNGBody } from './MNGType'

export const MNGHeader = (props) => {
  return (
    <>
      <MNGBOLD textAlign="center" mt="mngr.88">
        DIVINE PARTNER
        <br/>~/~
        <br/>CONVERSATION
      </MNGBOLD>
      <MNGNote w="61.8%" mx="auto" my="mngr.88">
        Dearly beloved<br/>
        We are gathered here today<br/>
        To get through this thing called, "life"<br/>
      </MNGNote>
    </>
  )
}
