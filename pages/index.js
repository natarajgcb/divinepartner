import { MNGPage } from '../components/MNGLayout'
import { MNGBody } from '../components/MNGType'
import { DPChatbaxa, DPChatbaxi, DPChatbaxu } from '../components/DPLayout'
import { GraphQLClient } from 'graphql-request';

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

      {messages.map( message => (
        <DPChatbaxu
          key={message.id}
          side={message.author.name}
          timestamp={message.updatedAt}
        >
          <MNGBody mb={0}>{message.text}</MNGBody>
        </DPChatbaxu>
      ))}

    </MNGPage>
  )
}
