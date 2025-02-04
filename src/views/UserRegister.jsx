import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { colors } from "@mui/material";
import axios from "axios";

const defaultTheme = createTheme();

const UserRegister = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    axios
      .post("/api/v1/user/register", {
        first_name: formData.get("firstname"),
        last_name: formData.get("lastname"),
        email:formData.get("email"),
        password:formData.get("password"),
      })
      .then((resp) => {
        if (resp.data.success && resp.data.result) {
          window.location.href = "/login";
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((err) => console.error("Error from SignUp API: ", err));
  };

  const handleSocialLogin = (provider) => {
    alert(`Sign up with ${provider} is not implemented yet.`);
    // Integrate social login APIs (Google, GitHub, Facebook) here
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          //backgroundImage: `url('https://random-image-pepebigotes.vercel.app/api/random-image')`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Dark overlay
            backdropFilter: "blur(10px)", // Blur effect
            zIndex: 1,
          },
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            position: "relative",
            zIndex: 2, 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "white",
            p: 4,
            borderRadius: 4,
            boxShadow: 5,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "darkblue" }}
            >
              Register
            </Button>
          </Box>
          <Typography variant="body2" color={colors.grey[700]} sx={{ mt: 2 }}>
            Or sign up using
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={() => handleSocialLogin("Google")}
                sx={{
                  color: "red",
                  borderColor: "red",
                  textTransform: "none",
                  "&:hover": { borderColor: "darkred", color: "darkred" },
                }}
              >
                Google
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GitHubIcon />}
                onClick={() => handleSocialLogin("GitHub")}
                sx={{
                  color: "black",
                  borderColor: "black",
                  textTransform: "none",
                  "&:hover": { borderColor: "grey", color: "grey" },
                }}
              >
                GitHub
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FacebookIcon />}
                onClick={() => handleSocialLogin("Facebook")}
                sx={{
                  color: "blue",
                  borderColor: "blue",
                  textTransform: "none",
                  "&:hover": { borderColor: "darkblue", color: "darkblue" },
                }}
              >
                Facebook
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color={colors.grey[700]} sx={{ mt: 3 }}>
            Already have an account?{" "}
            <Link href="/" sx={{ textDecoration: "none", fontWeight: 500 }}>
              Login
            </Link>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UserRegister;
