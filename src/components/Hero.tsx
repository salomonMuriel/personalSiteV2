import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Salomon from "../assets/salomon.webp";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundImage: `linear-gradient(240deg, rgba(255, 255, 255, 0), #062343), url(${Salomon})`,
    backgroundRepeat: "no-repeat",
    [theme.fn.smallerThan("sm")]: {
      backgroundSize: "auto 100%",
      backgroundPosition: "55%",
    },
    height: "100%",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
    height:'100%'
  },

  image: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  content: {
    [theme.fn.smallerThan("sm")]: {
      marginRight: 0,
      justifyContent: "space-around",
    },
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    height:'100%'
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: 48,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
    "& span": {
      color: theme.white,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,
    fontWeight: 500,
    fontSize: 20,
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      justifySelf: 'end',
      fontSize: 18,
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan("sm")]: {
      width: "100%"
    },
  },

  container: {
    height:'100%'
  }
}));

function stringSplitter(text: string): string[] {
  let splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(text);
}

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size="lg" className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              I am{" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<span style='color: white;'>Salomón Muriel</span>"
                    )
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("a Tech Entrepreneur 🚀")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("a Data Scientist 👨‍🔬")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("a Web Developer 👨‍💻")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("a Consultant 👨🏼‍💼")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                  //@ts-ignore
                  stringSplitter: stringSplitter,
                }}
              />
            </Title>
            <Box className={classes.description}>
              <Text  mt={30}>
                I'm a serial tech entrepreneur with 4 companies and 2 exits
                under my belt.
              </Text>
              <Text mt={30}>
                I'm a data scientist who believes that data is the key for
                competitive companies.
              </Text>
              <Text mt={30}>
                I'm the father of super-twins, Franco & Luca 👶👶.
              </Text>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
}
