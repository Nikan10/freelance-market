import { Box } from '@mui/system'
import React, { useState } from 'react'
import AddTitle from '../../components/createProfileSteps/AddTitle'
import AddExperience from '../../components/createProfileSteps/AddExperience'
import AddEducation from '../../components/createProfileSteps/AddEducation'
import AddLanguage from '../../components/createProfileSteps/AddLanguage'
import PublishProfile from '../../components/createProfileSteps/PublishProfile'
import AddSkills from '../../components/createProfileSteps/AddSkills'

const CreateProfile = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const onPrev = () => {
    setStep(step - 1)
  }

  const onNext = (data) => {
    setFormData({ ...formData, ...data})
    setStep(step + 1)
  }

  console.log(formData)
  return (
    <Box sx={{height: "100vh"}}>
      {step === 1 && <AddTitle onNext={onNext} />}
      {step === 2 && <AddExperience onNext={onNext} onPrev={onPrev} />}
      {step === 3 && <AddEducation onNext={onNext} onPrev={onPrev} />}
      {step === 4 && <AddLanguage onNext={onNext} onPrev={onPrev} />}
      {step === 5 && <AddSkills onNext={onNext} onPrev={onPrev} />}
      {step === 6 && <PublishProfile onPrev={onPrev} />}
    </Box>
  )
}

export default CreateProfile