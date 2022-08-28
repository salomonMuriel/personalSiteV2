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
import Beriblock from '../../assets/beriblock.png'
import PrestaGente from '../../assets/prestagenteImage.png'
import ElPalomo from '../../assets/elpalomoImage.png'

import { Company } from "./Company";

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: "#11284b",
        height: 'auto'
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        fontSize: 48,
        marginBottom: theme.spacing.xl * 3,
        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
            fontSize: 34,
            lineHeight: 1.15,
        },
        "& span": {
            color: theme.white,
        },
    },

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
        borderRadius: '10px'
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


export function Companies() {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Container size='lg'>
                <Title order={2} className={classes.title}>My Companies</Title>
                <Company
                    name='Finco.co'
                    badges={['Proptech', 'SaaS', 'Big Data', 'AI/ML', 'B2C', 'Funded', 'Sold 💸']}
                    img={Finco}
                    description="Large-scale scrapper & Automated Valuation Model for the Real Estate market in Latin America. Sold in 2022 to RED Atlas (USA)."
                    subText="CEO & Co-Founder, Dec 2019 - June 2022"
                />
                <Company
                    name='Beriblock.com'
                    badges={['Fintech', 'Legaltech', 'Blockchain', 'B2B', 'Funded', 'Liquidated 💀']}
                    img={Beriblock}
                    description="Blockchain-based document authentication and signature platform, focused on promissory notes authentication."
                    subText="CEO & Co-Founder, Sep 2018 - Dec 2019. Shareholder, Jan 2020 - Feb 2022"
                />
                <Company
                    name='PrestaGente.com'
                    badges={['Fintech', 'Blockchain', 'B2B2C', 'Funded', 'Sold 💸']}
                    img={PrestaGente}
                    description="Blockchain-powered online payroll loans for the Colombian market. Sold in 2019 to Taurus Capital."
                    subText="CEO & Co-Founder, Jun 2017 - Sep 2019"
                />
                <Company
                    name='ElPalomo.co'
                    badges={['SaaS', 'B2C', 'Bootstrapped', 'Liquidated 💀']}
                    img={ElPalomo}
                    description="Online flower subscription service. My first attempt at entrepreneurship. Great learning experience and magnificent case-study on how to go bust in 6 months."
                    subText="CEO & Founder, Dec 2016 - Jun 2017"
                />
            </Container>
        </div>
    );
}


{/* <Title order={3} className={classes.companyName}>Finco.co</Title>
<Text className={classes.companySubText} size='sm'>CEO, Dec 2019 - June 2022</Text>
<Box className={classes.badgeHolder}>
    <Badge color='cyan' className={classes.badge}>Proptech</Badge>
    <Badge color='blue' className={classes.badge}>Big Data</Badge>
    <Badge color='indigo' className={classes.badge}>B2C</Badge>
    <Badge color='darkgreen' className={classes.badge}>Sold 💸</Badge>
</Box>
<Space h={20}></Space>
<Text className={classes.companyText} size='lg'>
    Large-scale scrapper & Automated Valuation Model for the Real Estate market in Latin America.

    Sold in 2022 to RED Atlas (USA).
</Text> */}