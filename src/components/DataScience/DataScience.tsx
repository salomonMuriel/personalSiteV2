import {
    createStyles,
    Container,
    Title,
    Skeleton,
    Grid,
    Card,
    Image,
    Badge,
    Group,
    Text
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.white,
        height: '400px',
    },
    title: {
        color: '#11284b',
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
    card: {
        backgroundColor: theme.white,
        height: '240px',
    },
}));


export function DataScience() {
    const { classes } = useStyles();

    const child = (
        <Card radius="md" withBorder className={classes.card}>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>
        </Card>
    )

    return (
        <div className={classes.root}>
            <Container size={"xl"}>
                <Title order={2} className={classes.title}>Data Science Projects</Title>
                <Grid>
                    <Grid.Col xs={4}>{child}</Grid.Col>
                    <Grid.Col xs={8}>{child}</Grid.Col>
                    <Grid.Col xs={8}>{child}</Grid.Col>
                    <Grid.Col xs={4}>{child}</Grid.Col>
                    <Grid.Col xs={3}>{child}</Grid.Col>
                    <Grid.Col xs={3}>{child}</Grid.Col>
                    <Grid.Col xs={6}>{child}</Grid.Col>
                </Grid>
            </Container>
        </div>
    )
}
