import { Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";

export default function FinalShop() {
  const steps = ["Datos de Envio", "Detalles de Pago"];

  const [activeSteps, setActiveSteps] = useState(0);
  function nextStep() {
    setActiveSteps((prevActiveStep) => prevActiveStep + 1);
  }
  function prevStep() {
    setActiveSteps((prevActiveStep) => prevActiveStep - 1);
  }

  const Forms = () => (activeSteps === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm prevStep={prevStep} />);
  return (
    <>
      <Paper>
        <Typography  mt={2} component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeSteps}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Forms />
      </Paper>
    </>
  );
}
