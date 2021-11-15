import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// Chakra UI defaults
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
})

const MNGTheme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: ["0.688rem", "0.813rem", "1rem", "1rem", "1rem"]
      },
      body: {
        lineHeight: "mngr.body",
        backgroundColor: "mngr.black",
        color: "mngr.light"
      },
      ul: {
        marginBottom: "mngr.27"
      },
      ol: {
        marginBottom: "mngr.27"
      },
      li: {
        marginBottom: "mngr.11"
      },
      a: {
        paddingBottom: "1px",
        borderBottom: "1px solid",
        borderBottomColor: "mngr.link",
        _hover: {
          color: "mngr.link",
          borderBottom: "none",
          textDecoration: "none"
        }
      }
    }
  },
  components: {
    Link: {
      variants: {
        noline: {
          paddingBottom: "0",
          borderBottom: "none",
          _hover: {
            color: "mngr.link",
            borderBottom: "none",
            textDecoration: "none"
          }
        }
      }
    },
    Text: {
      variants: {
        serifi: {
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          fontStyle: "italic"
        },
        smallcaps: {
          textTransform: "uppercase",
          fontSize: "0.69em",
          color: "mngr.dim"
        },
        subcap: {
          fontSize: "0.69em",
          color: "mngr.dim"
        }
      }
    }
  },
  fontSizes: {
    mngr: {
      title: "2.625rem",
      h1: "2.063rem",
      h2: "1.625rem",
      h3: "1.25rem",
      body: "1rem",
      foot: "0.813rem"
    }
  },
  lineHeights: {
    mngr: {
      title: "1.548",
      h1: "1.576",
      h2: "1.577",
      h3: "1.65",
      body: "1.688",
      foot: "1.769"
    }
  },
  space: {
    mngr: {
      "88": "5.5rem",
      "44": "2.75rem",
      "27": "1.688rem",
      "17": "1.063rem",
      "11": "0.688rem",
      "7": "0.438rem",
      "4": "0.25rem"
    }
  },
  colors: {
    mngr: {
      light: "#F8CDF9",
      dark: "#300931",
      dim: "#8F6690",
      text: "#B895B9",
      link: "#9F08A2",
      accent: "#1E1D35",
      button: "#6E0A70",
      button_h: "#510653",
      black: "#11101A",
      gold: "rgba(252,255,0,0.5)",
      green: "#183009"
    }
  }
})

export default MNGTheme
