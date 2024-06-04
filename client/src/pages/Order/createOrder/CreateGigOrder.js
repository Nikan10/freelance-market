import React, { useState } from "react";

import OrderDetails from "../../../components/orderSteps/OrderDetails";
import { Container, Stack } from "@mui/system";
import { Breadcrumbs } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import request from "../../../utils/request";
import { useQuery } from "@tanstack/react-query";
import Payments from "../../../components/orderSteps/Payments";

const CreateGigOrder = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('')

  const handleNext = (order) => {
    setOrderId(order?._id)
    setStep(step + 1)
  }
  console.log(orderId)
  return (
    <Container sx={{ marginTop: "6rem" }}>
      
      {step === 1 && <OrderDetails onNext={handleNext} setOrderId={setOrderId} />}
      {step === 2 && <Payments orderId={orderId} />}
    </Container>
  );
};

export default CreateGigOrder;
