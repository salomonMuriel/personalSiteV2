import {
  createStyles,
  Container,
  Title,
  Text,
  Box,
  ActionIcon} from "@mantine/core";
import Salomon from "../assets/salomon.webp";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { motion, MotionConfig } from "framer-motion";
import Franco from "../assets/franco_cut.webp";
import Luca from "../assets/luca_cut.webp";
import React from "react";
import { useHover } from "@mantine/hooks";
import { IconBrandLinkedin } from "@tabler/icons";
import { IconBrandWhatsapp } from "@tabler/icons";
import { IconMail } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, #0b1b32, #172b4a);`,
    height: "100%"
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    height: "100%",
    padding: theme.spacing.lg
  },

  image: {
    marginTop: 'auto',
    marginBottom: 'auto',
    maxWidth: '40%',
    maxHeight: '100%',
    [theme.fn.smallerThan("sm")]: {
      display:'none',
    },
    borderColor: "#162946",
    borderWidth: "3px",
    borderRadius: '100%'
  },

  content: {
    [theme.fn.smallerThan("sm")]: {
      marginRight: 0,
      justifyContent: "center",
      padding: '10px'
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },

  title: {
    color: theme.white,
    fontSize: theme.fontSizes.xl*2,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
    "& span": {
      color: theme.white,
    },
  },

  subtitle: {
    color: "#F6F7F8",
    fontSize: theme.fontSizes.lg,
    fontWeight:500,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  description: {
    color: theme.white,
    maxWidth: 500,
    fontSize: theme.fontSizes.md,
    lineHeight: 0,
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      justifySelf: "end"
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
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
                    .typeString("Maker 💡")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Consultant 👨🏼‍💼")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("🔥Perrenque🔥")
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
              <Text mt={10}>
                I'm a serial tech entrepreneur with 4 companies and 2 exits
                under my belt.
              </Text>
              <Text mt={10}>
                I'm an leading data scientist who loves to create through data and innovation.
              </Text>
              <Text mt={10}>
                I'm the father of super-twins, Luca & Franco{" "}
                <span ref={ref}>👶👶</span>.
              </Text>
              <Box className={classes.buttonBox}>
                <motion.a href="https://www.linkedin.com/in/smuriel/" target="_blank" whileHover={{ scale: 1.2 }}>
                  <ActionIcon
                    size="xl"
                    color="blue"
                    variant="filled"
                    className={classes.button}
                  >
                    <IconBrandLinkedin size={34} />
                  </ActionIcon>
                </motion.a>
                {/* <motion.a href="https://github.com/salomonMuriel" target="_blank" whileHover={{ scale: 1.2 }}>
                  <ActionIcon
                    size="xl"
                    color="dark"
                    variant="filled"
                    className={classes.button}
                  >
                    <IconBrandGithub size={34} />
                  </ActionIcon>
                </motion.a> */}
                <motion.a href="https://wa.me/573132465100" target="_blank" whileHover={{ scale: 1.2 }}>
                  <ActionIcon
                    size="xl"
                    color="green"
                    variant="filled"
                    className={classes.button}
                  >
                    <IconBrandWhatsapp size={34} />
                  </ActionIcon>
                </motion.a>
                <motion.a href="mailto:salomon.muriel@gmail.com" target="_blank" whileHover={{ scale: 1.2 }}>
                  <ActionIcon
                    size="xl"
                    color="pink"
                    variant="filled"
                    className={classes.button}
                  >
                    <IconMail size={34} />
                  </ActionIcon>
                </motion.a>
              </Box>
            </Box>
          </div>
          <motion.img
            className={classes.image}
            src={Salomon}
            whileTap={{ rotate: 360 }}
            transition={{duration:1.5}}
             />
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
