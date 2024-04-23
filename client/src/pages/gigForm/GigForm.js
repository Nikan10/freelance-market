import React, {useState} from "react"
import request from '../../utils/request.js'

import Overview from "../../components/gigFormSteps/Overview"
import Pricing from "../../components/gigFormSteps/Pricing.jsx"
import Description from "../../components/gigFormSteps/Description"
import Requirements from "../../components/gigFormSteps/Requirements"
import Gallery from "../../components/gigFormSteps/Gallery"
import Publish from "../../components/gigFormSteps/Publish"

import { EditOutlined, HomeOutlined, PriceChangeOutlined }from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab"
import { Container, Typography, Card, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent, Stack, Paper, Stepper, StepLabel, Step, StepIcon, StepButton, StepContent, StepConnector } from '@mui/material'

const things = ['Overview', 'Pricing', 'Gallery', 'Description', 'Publish']

const GigForm = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})

    const handleNext = (data) => {
        setFormData(formData)
        setFormData({ ...formData, ...data})
        setStep(step + 1)
    }
    const handlePrev = () => {
        setStep(step - 1)
    }

    const handleSubmit = async () => {
      const dataCollection = new FormData()
      formData.map((data, i) => (
        dataCollection.append(`${data.key}`, data)
      ))
      await request.post('/gigs/create', dataCollection, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })
    }
  return (
    <Container maxWidth="lg" sx={{marginTop: "8rem"}}>
      <Stepper activeStep={step} alternativeLabel sx={{margin: "8rem 0"}}>
        {things.map( (thing, i) => {
          if(i + 1 < step) {
            return (
              <Step>
                <StepLabel><Typography variant="body2" color="primary.dark" fontWeight={500}>{thing}</Typography></StepLabel>
              </Step>
            )
          } else if(step === i + 1) {
            return (
              <Step>
                <StepLabel StepIconComponent={() => <>{<EditOutlined sx={{padding: "2px", fontSize: "1.6rem", border: "2px solid", borderColor: "primary.main", borderRadius: "25px", color: "#fff", backgroundColor: "primary.main"}} />}</>}><Typography variant="body2" color="primary.dark" fontWeight={500}>{thing}</Typography></StepLabel>
              </Step>
            )
          }
          return (
            <Step>
              <StepLabel StepIconComponent={() => <>{<HomeOutlined sx={{padding: "2px", fontSize: "1.6rem", border: "2px solid", borderColor: "primary.dark", borderRadius: "25px", color: "primary.dark"}} />}</>}><Typography variant="body2" color="primary.dark" fontWeight={500}>{thing}</Typography></StepLabel>
            </Step>
          )
        })}
      </Stepper>
        <form onSubmit={handleSubmit}>
          { step === 1 && <Overview onNext={handleNext} /> }
          { step === 2 && <Pricing onNext={handleNext} /> }
          { step === 3 && <Gallery onNext={handleNext} /> }
          { step === 4 && <Description onNext={handleNext} /> }
          { step === 5 && <Publish onNext={handleNext} /> }
          <br/><br/>
          { step === 5 && <Button variant='contained' sx={{textTransform: 'capitalize'}} type='submit'>Submit</Button> }
        </form>
    </Container>
  )
}

export default GigForm