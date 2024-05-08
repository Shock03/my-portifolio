import { Button, Container, Grid, Typography, styled } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Avatar from "../../../../assets/images/avatar.jpg"

// COMPONENTE
const Hero = () => {
  // Estilizando uma div (tag-div).
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))

  // Estilizando a imagem de avatar (tag-img).
  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "400px",
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "50%"
  }))

  // JSX.
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">Breno Marques</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'm a Front-end Developer</Typography>

              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV</Button>
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <MailOutlineIcon />
                    Contact me</Button>
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