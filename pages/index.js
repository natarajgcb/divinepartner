import { Center } from '@chakra-ui/react'
import { MNGPage } from '../components/MNGLayout'
import { MNGH3, MNGBody } from '../components/MNGType'
import { DPChatbaxu } from '../components/DPLayout'
import { GraphQLClient } from 'graphql-request'

// get static props from GraphCMS
export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckw032jru4a5001z4dtrr0067/master'
  );

  const { messages } = await graphcms.request(
    `
      {
        messages(stage: PUBLISHED, orderBy: updatedAt_ASC) {
          id
          updatedAt
          text
          author {
            name
          }
        }
      }
    `
  );

  return {
    props: {
      messages
    }
  };
}

export default function Home({ messages }) {
  // set head and seo params
  const head = {
    meta: {
      title: "Conversations with Divine Partner",
      description: "Dearly beloved - We are gathered here today - To get through this thing called, 'life'"
    },
    og: {
      title: "Conversations with Divine Partner",
      description: "Dearly beloved - We are gathered here today - To get through this thing called, 'life'",
      image: "/img/NatarajGFamilyPortrait.jpg"
    }
  };

  return (
    <MNGPage meta={head.meta} og={head.og}>

      <MNGH3 textAlign="center" mb="mngr.7">We Gonna Heal, Change, Build</MNGH3>
      <MNGBody textAlign="center" mb="mngr.11">Chawki Daar Music</MNGBody>
      <Center mb="mngr.88">
        <audio
          controls
          src="https://ipfs.io/ipfs/QmPnM2qiVjEwKQaLyQ5ZYYSM7v3X1nozK4v4uECcRQciEV?filename=ConversationsDivinePartner.wav"
          crossOrigin="anonymous"
        >
              Your browser does not support the
              <code>audio</code> element.
        </audio>
      </Center>

      {messages.map( message => (
        <DPChatbaxu
          key={message.id}
          queer={message.author.name}
          timestamp={message.updatedAt}
        >
          <MNGBody mb={0}>{message.text}</MNGBody>
        </DPChatbaxu>
      ))}

    </MNGPage>
  )
}
