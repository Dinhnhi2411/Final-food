import React, { useState } from "react";
import { FCheckbox, FormProvider, FTextField } from "../components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import { Container } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Card, CardContent, IconButton, InputAdornment, Link, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useAuth from "../hooks/useAuth";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
  remember: true,
};
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmiting },
  } = methods;

  const onSubmit = async (data) => {
    const from = location.state?.from?.pathname || "/";
    let { email, password } = data;
    console.log("auth", auth);
    try {
      await auth.login({ email, password }, () => {
        navigate(from, { replace: true });
      });
    } catch (error) {
      reset();
      setError("responeError", error);
    }
   
  };

  return (
    <Container maxWidth="xs">
    <Card  position="relative">
      <CardContent>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.responeError && (
            <Alert severity="error"> {errors.responeError.message}</Alert>
          )}
          <Alert severity="info">
            Don't have account? {""}
            <Link variant="subtitle2" component={RouterLink} to="/register">
              Get start!
            </Link>
          </Alert>

          <FTextField name="email" label="Email address" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    egde="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FCheckbox name="remember" label="Remember me" />
          <Link component={RouterLink} variant="subtitle2" to="/">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmiting}
          
        >
          Login
        </LoadingButton>
         
        <Typography
        sx={{
          mt:3,
          mb:3,
          display: "flex",
          justifyContent:"center",
          // color:"primary.contrastText",
         
        }}
        >
          You can login with 
        </Typography>
        <Box sx=
        {{
          mt:1,
           display:"flex", 
           flexDirection:"row",
          }}
          >
        <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{
          mr:1,
          cursor: "pointer",
          borderRadius: 5,
          display:"flex",
          justifyContent:"center",
          backgroundColor :"success.light",
          flexDirection: 'row',
           "&:hover": {
            backgroundColor:"success.darker"
          }
        }} 
        >
      <GoogleIcon sx={{mt:1}} />
      <Typography sx={{fontSize:16, mt: 1, textTransform: "capitalize"}}>
        Gmail
      </Typography>
        </Button>

      <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{
          ml:1,
          cursor: "pointer",
          borderRadius: 5,
          display:"flex",
          justifyContent:"center",
          backgroundColor :"secondary.light",
          flexDirection: 'row',
          "&:hover": {
            backgroundColor:"secondary.darker"
          }
        }} 
        >
      <FacebookIcon sx={{mt:1}}/>
      <Typography sx={{fontSize:16, mt: 1, textTransform: "capitalize"}}>
        Facebook
      </Typography>
        </Button>

        
      </Box>
      </FormProvider>
      </CardContent>

    </Card>

    
    </Container>


  );

}

export default LoginPage;
