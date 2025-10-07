import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper
} from '@mui/material';

const FormPreview = ({ steps, onSubmit }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const generateValidationSchema = (stepFields) => {
    let schema = {};
    
    stepFields.forEach(field => {
      let fieldSchema;
      
      switch (field.type) {
        case 'email':
          fieldSchema = Yup.string().email('Invalid email format');
          break;
        case 'number':
          fieldSchema = Yup.number().typeError('Must be a number');
          break;
        default:
          fieldSchema = Yup.string();
      }
      
      if (field.validation?.required) {
        fieldSchema = fieldSchema.required('This field is required');
      }
      
      schema[field.id] = fieldSchema;
    });
    
    return Yup.object().shape(schema);
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const currentStep = steps[activeStep];
  const validationSchema = generateValidationSchema(currentStep.fields);

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <Field name={field.id}>
            {({ field: formikField, meta }) => (
              <TextField
                {...formikField}
                fullWidth
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
                variant="outlined"
                margin="normal"
              />
            )}
          </Field>
        );
      
      case 'select':
        return (
          <Field name={field.id}>
            {({ field: formikField, meta }) => (
              <TextField
                {...formikField}
                fullWidth
                select
                label={field.label}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
                variant="outlined"
                margin="normal"
              >
                {field.options?.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </Field>
        );
      
      case 'checkbox':
        return (
          <Field name={field.id}>
            {({ field: formikField, meta }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...formikField}
                    checked={formikField.value || false}
                  />
                }
                label={field.label}
              />
            )}
          </Field>
        );
      
      default:
        return null;
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Form Preview
      </Typography>
      
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, touched }) => (
          <Form>
            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                {currentStep.title}
              </Typography>
              
              {currentStep.fields.map((field) => (
                <Box key={field.id} mb={2}>
                  {renderField(field)}
                </Box>
              ))}
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default FormPreview;