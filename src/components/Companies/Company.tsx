import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Box,
  Image,
  Space,
  Badge,
  Indicator,
} from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const useStyles = createStyles((theme) => ({
  imageDiv: {
    width: "80%",
    height: "auto",
    display: "flex",
    gridColumn: "1 / 1",
    gridRow: "1/last-line",
    padding: theme.spacing.sm,
    background: theme.white,
    borderRadius: "10px",
    [theme.fn.smallerThan("sm")]: {
      gridRow: "1/2",
    },
  },
  image: {
    borderRadius: "10px",
    width: "100%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  companyGroup: {
    display: "grid",
    flexDirection: "row",
    justifyContent: "space-between",
    background: `linear-gradient(to bottom, #1C437E, #3A6CB8);`,
    // borderRadius: "10px",
    padding: "1.5rem",
    // background: '#11284b',
    // border: 'solid 2px #20A4F3',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "1fr 0.5fr 1fr",
    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 0.5fr auto",
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -20,
      borderBottom: "solid 2px #20A4F3",
      borderRight: "solid 2px #20A4F3",
      top: "10px",
      left: "10px",
      transition: 'top 0.4s ease, left 0.4s ease'
    },
    "&:hover::after": {
      top: "5px",
      left: "5px",
    },
  },
  companyData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  companyName: {
    color: theme.white,
    fontSize: theme.fontSizes.xl*1.8,
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: 30,
    },
    "& span": {
      color: theme.white,
    },
  },
  companyText: {
    color: theme.white,
    [theme.fn.smallerThan("sm")]: {
      gridColumn: "1/3",
    },
  },
  companySubText: {
    color: theme.white,
  },
  badgeHolder: {
    gridColumn: "2/3",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      gridColumn: "1/3",
    },
  },
  badge: {
    margin: "3px",
  },
}));

type CompanyProps = {
  img: string;
  name: string;
  subText: string;
  badges: string[];
  description: string;
};

const variants = {
  outside: {
    translateX: "100%",
    opacity: 0,
  },
  inside: {
    translateX: 0,
    opacity: 1,
  }
};

export function Company(props: CompanyProps) {
  const { classes } = useStyles();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px 0px 0px",
    amount: "some",
    once: true,
  });
  function badgeColor(label: string) {
    let color = "";
    switch (label) {
      case "Proptech":
        color = "cyan";
        break;
      case "Fintech":
        color = "red";
        break;
      case "Legaltech":
        color = "orange";
        break;
      case "Big Data":
        color = "blue";
        break;
      case "B2C":
        color = "indigo";
        break;
      case "Funded":
        color = "green";
        break;
      case "Bootstrapped":
        color = "pink";
        break;
      case "Sold 💸":
        color = "green";
        break;
      case "Liquidated 💀":
        color = "dark";
        break;
      case "Blockchain":
        color = "teal";
        break;
      default:
        color = "grape";
    }

    return (
      <Badge color={color} className={classes.badge} key={`${label}-badge`}>
        {label}
      </Badge>
    );
  }

  console.log(isInView, props.name);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? "inside" : "outside"}
      transition={{ duration: "1.5" }}
    >
      <Box className={classes.companyGroup}>
        <div className={classes.imageDiv}>
          <img src={props.img} className={classes.image} />
        </div>
        <Box className={classes.companyData}>
          <Title order={3} className={classes.companyName}>
            {props.name}
          </Title>
          <Text className={classes.companySubText} size="sm">
            {props.subText}
          </Text>
        </Box>
        <Box className={classes.badgeHolder}>
          {props.badges.map((label) => badgeColor(label))}
        </Box>
        <Text className={classes.companyText} size="lg">
          {props.description}
        </Text>
      </Box>
    </motion.div>
  );
}
