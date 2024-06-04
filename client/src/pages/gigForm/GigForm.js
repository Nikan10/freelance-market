import React, {useState} from "react"
import request from '../../utils/request.js'

import Overview from "../../components/gigFormSteps/Overview"
import Pricing from "../../components/gigFormSteps/Pricing.jsx"
import Description from "../../components/gigFormSteps/Description"
import Gallery from "../../components/gigFormSteps/Gallery"
import Publish from "../../components/gigFormSteps/Publish"

import { EditOutlined, HomeOutlined, PriceChangeOutlined }from '@mui/icons-material'
import { Container, Typography, Stepper, StepLabel, Step } from '@mui/material'
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import Cookies from "js-cookie"


const things = ['Overview', 'Pricing', 'Gallery', 'Description', 'Publish']

const GigForm = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const token = Cookies.get('token');
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})

    const navigate = useNavigate()

    const { isPending, error, data } = useQuery({
      queryKey: ["categries"],
      queryFn: () => {
        return (request.get('/categories').then((res) => {
          return res.data
        }))
      }
    })
    
    const handleNext = (data) => {
        setFormData({ ...formData, ...data})
        setStep(step + 1)
    }

    const handlePrev = () => {
        setStep(step - 1)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      const dataCollection = new FormData()
      
      dataCollection.append('data', JSON.stringify(formData))

      dataCollection.append('coverImage', formData.coverImage)

      formData.images.map((image) => (
        dataCollection.append('images', image)
      ))
      
      const response = await request.post(`users/${currentUser._id}/gigs/create`, dataCollection, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "authorization": token
        }
      })
      if(response) navigate('/')
    }
  console.log(formData)
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
          { step === 1 && <Overview onNext={handleNext} data={data} error={error} isPending={isPending} /> }
          { step === 2 && <Pricing onNext={handleNext} onPrev={handlePrev} data={data} error={error} isPending={isPending} formData={formData} /> }
          { step === 3 && <Gallery onNext={handleNext} onPrev={handlePrev} /> }
          { step === 4 && <Description onNext={handleNext} onPrev={handlePrev} /> }
          { (step === 5 || step === 6) && <Publish onNext={handleNext} onPrev={handlePrev} /> }
          <br/><br/>
        </form>
    </Container>
  )
}

export default GigForm