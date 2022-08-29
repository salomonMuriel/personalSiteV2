import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Box,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Salomon from "../assets/salomon.webp";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { motion, MotionConfig } from "framer-motion";
import Franco from "../assets/franco_cut.webp";
import Luca from "../assets/luca_cut.webp";
import React from "react";
import { useHover } from "@mantine/hooks";
import { IconBrandLinkedin } from "@tabler/icons";
import { IconBrandGithub } from "@tabler/icons";
import { IconBrandWhatsapp } from "@tabler/icons";
import { IconMail } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0), #11284b), url(${Salomon})`,
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
    height: "100%",
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
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
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

  subtitle: {
    color: "#F6F7F8",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: 34,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: 28,
      lineHeight: 1.15,
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
      justifySelf: "end",
      fontSize: 18,
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  container: {
    height: "100%",
  },
  franco: {
    position: "fixed",
    bottom: 0,
    right: "-30%",
    width: "30%",
  },
  luca: {
    position: "fixed",
    bottom: 0,
    left: "-20%",
    width: "20%",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.xl,
  },
  button: {
    margin: "1rem",
  },
}));

function stringSplitter(text: string): string[] {
  let splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(text);
}

export function Hero() {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  return (
    <div className={classes.root}>
      <Container size="md" className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Salomón Muriel</Title>
            <Text className={classes.subtitle}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .deleteAll()
                    .typeString("Serial Tech Entrepreneur 🚀")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Data Scientist 👨‍🔬")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Web Developer 👨‍💻")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Consultant 👨🏼‍💼")
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
            </Text>
            <Box className={classes.description}>
              <Text mt={30}>
                I'm a serial tech entrepreneur with 4 companies and 2 exits
                under my belt.
              </Text>
              <Text mt={30}>
                I'm a data scientist who believes that data and tech are the key for
                competitive companies.
              </Text>
              <Text mt={30}>
                I'm the father of super-twins, Luca & Franco{" "}
                <span ref={ref}>👶👶</span>.
              </Text>
            </Box>
            <Box className={classes.buttonBox}>
              <a href="https://www.linkedin.com/in/smuriel/" target="_blank">
                <ActionIcon
                  size="xl"
                  color="blue"
                  variant="filled"
                  className={classes.button}
                >
                  <IconBrandLinkedin size={34} />
                </ActionIcon>
              </a>
              <a href="https://github.com/salomonMuriel" target="_blank">
                <ActionIcon
                  size="xl"
                  color="dark"
                  variant="filled"
                  className={classes.button}
                >
                  <IconBrandGithub size={34} />
                </ActionIcon>
              </a>
              <a href="https://wa.me/573132465100" target="_blank">
                <ActionIcon
                  size="xl"
                  color="green"
                  variant="filled"
                  className={classes.button}
                >
                  <IconBrandWhatsapp size={34} />
                </ActionIcon>
              </a>
              <a href="mailto:salomon.muriel@gmail.com" target="_blank">
                <ActionIcon
                  size="xl"
                  color="pink"
                  variant="filled"
                  className={classes.button}
                >
                  <IconMail size={34} />
                </ActionIcon>
              </a>
            </Box>
          </div>
        </div>
      </Container>
      <MotionConfig transition={{ duration: 0.6 }}>
        <motion.img
          src={Franco}
          className={classes.franco}
          animate={hovered ? { right: 0 } : { right: "-30%" }}
        ></motion.img>
        <motion.img
          src={Luca}
          className={classes.luca}
          animate={hovered ? { left: 0 } : { left: "-20%" }}
        ></motion.img>
      </MotionConfig>
    </div>
  );
}
