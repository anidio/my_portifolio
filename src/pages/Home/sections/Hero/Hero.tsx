import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const Styledimage = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `10px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground></AnimatedBackground>
                                </Box>

                                <Box position="relative" textAlign="center">
                                    <Styledimage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contratText" variant="h1" textAlign="center">Isaías Roberto</Typography>
                            <Typography color="primary.contratText" variant="h2" textAlign="center" pd={2}>I'm a FullStack Developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={2} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <LinkedInIcon />
                                        <Typography>Linkedin</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <EmailIcon />
                                        <Typography>Contact Me</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <InstagramIcon />
                                        <Typography>social media +</Typography>
                                    </StyledButton>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero