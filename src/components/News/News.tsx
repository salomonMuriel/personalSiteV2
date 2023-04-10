import {
    createStyles,
    Container,
    Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.white,
        height: '400px',
        },
    title: {
        color: '#11284b',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        fontSize: 48,
        paddingTop: theme.spacing.xl * 2,
        marginBottom: theme.spacing.xl * 2,
        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
            fontSize: 34,
            lineHeight: 1.15,
        },
    },
}));


export function News() {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Title order={2} className={classes.title}>Data Science</Title>
            </Container>
        </div>
    )
}
