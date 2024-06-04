// import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import AddTitle from "../../components/createProfileSteps/AddTitle";
import AddExperience from "../../components/createProfileSteps/AddExperience";
import AddEducation from "../../components/createProfileSteps/AddEducation";
import AddLanguage from "../../components/createProfileSteps/AddLanguage";
import PublishProfile from "../../components/createProfileSteps/PublishProfile";
import AddSkills from "../../components/createProfileSteps/AddSkills";
import { Box, Stack, Button, Dialog, Typography } from "@mui/material";
import request from "../../utils/request";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CreateProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const token = Cookies.get('token');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const navigate = useNavigate()

  const onPrev = () => {
    setStep(step - 1);
  };

  const onNext = (data) => {
    setFormData({ ...formData, ...data });
    if(step < 6) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSubmitButton(false)

    const dataCollection = new FormData();

    dataCollection.append('photo', formData.photo);
    console.log(formData.photo)
    dataCollection.append('data', JSON.stringify(formData));

    const response = await request.post(
      `users/${currentUser._id}/profile/create`,
      dataCollection,
      {
        headers: {
          "Content-Type": 'multipart/form-data',
          "authorization": token
        }
      }
    );
    // if (response) navigate("/");
  };
  console.log(formData);
  return (
    <Box sx={{ height: "100vh" }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {step === 1 && <AddTitle onNext={onNext} />}
        {step === 2 && <AddExperience onNext={onNext} onPrev={onPrev} />}
        {step === 3 && <AddEducation onNext={onNext} onPrev={onPrev} />}
        {step === 4 && <AddLanguage onNext={onNext} onPrev={onPrev} />}
        {step === 5 && <AddSkills onNext={onNext} onPrev={onPrev} />}
        {step === 6 && (
          <PublishProfile
            onNext={onNext}
            onPrev={onPrev}
            showSubmitButton={setShowSubmitButton}
          />
        )}
        {/* <Dialog
          open={showSubmitButton}
          onClose={() => setShowSubmitButton(false)}
        >
          <Stack
            sx={{
              padding: "2rem",
              alignItems: "center",
              justifyContent: "space-around",
              height: "22rem",
              minWidth: "22rem",
            }}
          >
            <Stack alignItems="center">
              <Typography variant="h4" gutterBottom>
                Well done!
              </Typography>
              <Typography variant="body2">
                You completed your profile
              </Typography>
            </Stack>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                "&:hover": { backgroundColor: "secondary.light" },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Dialog> */}
      </form>
    </Box>
  );
};

export default CreateProfile;
