import { createStyles } from "@mantine/core";
import { motion, useScroll, useSpring } from "framer-motion";

const useStyles = createStyles((theme) => ({
  progressBar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
    background: "cyan",
    transformOrigin: "0%",
    zIndex:2000
  },
}));

export default function ProgressBar() {
  const { classes } = useStyles();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 })

  return (
    <motion.div
      className={classes.progressBar}
      style={{ scaleX: scaleX }}
    />
  );
}
