import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Container, Grid, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {
  const [isSubmissionSuccessful, setSubmissionSuccessful] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formik.isValid) {
      console.log('Form is not valid. Please fill in all required fields.');
      return;
    }
  
    const formData = new FormData(event.target);
    formData.append("access_key", "9c3a6b0a-1e15-476f-b3a3-f0056ba2631a");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      console.log("Success", res);
      formik.resetForm();
      setSubmissionSuccessful(true);
    }
  };
  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      
    },
  });
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontFamily={'Poppins'}>
        Get in touch
      </Typography>
      <form onSubmit={onSubmit}>
      {isSubmissionSuccessful && (
          <Typography variant="body1" color="success" align="center" sx={{ mt: 2 }}>
            Thank you for your submission! We will get back to you soon.
          </Typography>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              placeholder="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: '40px',
                },
              }}
              sx={{
                '& input::placeholder': {
                  fontFamily: 'Poppins'
                },
                mt: 2
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              placeholder="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: '40px',
                },
              }}
              sx={{
                '& input::placeholder': {
                  fontFamily: 'Poppins'
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              placeholder="Message"
              variant="outlined"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              InputProps={{
                style: {
                  borderRadius: '10px',
                },
              }}
              sx={{
                '& textarea': {
                  resize: 'none',
                  fontFamily: 'Poppins',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='outlined'
              type='submit'
              sx={{
                textTransform: 'none',
                fontFamily: 'Poppins',
                fontSize: "16px",
                bgcolor: 'blue',
                border: 'none',
                mt: 2,
                color: 'white',
                borderRadius: "20px",
                '&:hover': {
                  bgcolor: 'blue',
                  border: 'none',
                },
              }}>
              Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
