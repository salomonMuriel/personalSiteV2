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
import Finco from '../../assets/finco.png'

const useStyles = createStyles((theme) => ({

    imageDiv: {
        width: '25%',
        height: "auto",
        display: 'flex'
    },
    image: {
        borderRadius: '10px',
        width: '100%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    companyGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "linear-gradient(#1c437e, rgba(255,255,255,0) 90%)",
        padding: '1.5rem',
        borderRadius: '10px',
        marginTop: theme.spacing.md
    },
    companyData: {
        width: "60%",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center"
    },
    companyName: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        fontSize: 44,
        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
            fontSize: 30,
            lineHeight: 1.15,
        },
        "& span": {
            color: theme.white,
        },
    },
    companyText: {
        color: theme.white
    },
    companySubText: {
        color: theme.white,
    },
    badgeHolder: {
        display: 'inline'
    },
    badge: {
        margin: '3px'
    }
}));

type CompanyProps = {
    img: string,
    name: string,
    subText: string,
    badges: string[],
    description: string
}


export function Company(props: CompanyProps) {
    const { classes } = useStyles();

    function badgeColor(label: string) {
        let color = ''
        switch (label) {
            case 'Proptech':
                color = 'cyan'
                break;
            case 'Big Data':
                color = 'blue'
                break;
            case 'B2C':
                color = 'indigo'
                break;
            case 'Sold 💸':
                color = 'green'
                break;
            case 'Liquidated 💀':
                color = 'dark'
                break;
            default:
                color = ''
        }

        return <Badge color={color} className={classes.badge} key={`${label}-badge`}>{label}</Badge>
    }

    return (
        <Box className={classes.companyGroup}>
            <div className={classes.imageDiv}>
                <img src={props.img} className={classes.image} />
            </div>
            <Box className={classes.companyData}>
                <Title order={3} className={classes.companyName}>{props.name}</Title>
                <Text className={classes.companySubText} size='sm'>{props.subText}</Text>
                <Box className={classes.badgeHolder}>
                    {props.badges.map((label)=>badgeColor(label))}
                </Box>
                <Space h={20}></Space>
                <Text className={classes.companyText} size='lg'>
                    {props.description}
                </Text>
            </Box>
        </Box>
    );
}

