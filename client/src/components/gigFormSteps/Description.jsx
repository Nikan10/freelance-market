import React, { useState } from "react";

import {
  Container,
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Box,
  TextField,
  Dialog,
  DialogContent,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Add, DeleteOutline } from "@mui/icons-material";

const Description = ({ onNext, onPrev }) => {
  const [summery, setSummery] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleQuestionChange = (index) => {
    return (event) => {
      const newQuestion = [...questions];
      newQuestion[index] = event.target.value;
      setQuestions(newQuestion);
      console.log(questions)
    };
  };

  const handleAnswerChange = (index) => {
    return (event) => {
      const newAnswer = [...answers];
      newAnswer[index] = event.target.value;
      setAnswers(newAnswer);
      console.log(answers)
    };
  };

  const handleAddQuestion = () => {
    if(questions.length < 3) {
      setQuestions([...questions, '']);
      setAnswers([...answers, '']);
    }
  };
  const handleRemoveQuestion = (index) => {
    const questionsCopy = [...questions];
    questionsCopy.splice(index, 1);
    setQuestions(questionsCopy);
    
    const answersCopy = [...answers];
    answersCopy.splice(index, 1);
    setAnswers(answersCopy);
  };

  const returnData = (e) => {
    e.preventDefault();
    if (!summery) return;
    const faqs = questions.map((question, i) => (
      {
        question: questions[i],
        answer: answers[i]
      }
    ))
    console.log(faqs)
    onNext({ summery, faqs });
    window.scrollTo(0, 0);
  };
  return (
    <Box>
      <Typography variant="h4">Gig description</Typography> <br />
      <Stack>
        <Typography variant="h6" fontWeight={500}>
          Gig summery
        </Typography>
        <Typography color="gray" variant="body2">
          Briefly explain what sets you and your gig apart.
        </Typography>{" "}
        <br />
        <TextField
          fullWidth
          multiline
          rows={4}
          size="small"
          name="summery"
          sx={{ marginBottom: "1.2rem" }}
          onChange={(e) => setSummery(e.target.value)}
        />
      </Stack>
      <br />
      <Stack>
        <Typography variant="h6" fontWeight={500}>
          Frequently asked questions (optional)
        </Typography>
        <Typography color="gray" variant="body2">
          Write answers to common questions your client ask. Add up to 5
          questions.
        </Typography>
        <br />
        <FormControl>
          <FormGroup>
            {questions.map((faq, i) => (
              <Stack key={i} width="38rem" sx={{margin: "1.2rem 0", alignItems: "flex-end", padding: "1rem", backgroundColor: "light.light", borderRadius: "6px"}}>
                <IconButton sx={{width: "fit-content"}} onClick={() => handleRemoveQuestion(i)}>
                    <DeleteOutline />
                </IconButton>
                <TextField
                  fullWidth
                  size="small"
                  label={`Question ${i + 1}`}
                  variant="outlined"
                  onChange={handleQuestionChange(i)}
                />
                <br/>
                <TextField
                  fullWidth
                  size="small"
                  label="Answer"
                  variant="outlined"
                  onChange={handleAnswerChange(i)}
                  multiline
                  rows={4}
                />
              </Stack>
            ))}
          </FormGroup>
        </FormControl>
        {/* <Stack spacing={2}>
          {faqs.map((faq) => (
            <Stack spacing={2} maxWidth="32rem">
              <TextField size="small" name="question" placeholder="question" />
              <TextField
                multiline
                rows={3}
                size="small"
                name="answer"
                placeholder="answer for your question ..."
              />
            </Stack>
          ))}
          
        </Stack>*/}
        <Button
          startIcon={<Add />}
          sx={{ width: "10rem" }}
          onClick={handleAddQuestion}
        >
          Add a question
        </Button>
      </Stack>
      <br />
      <br />
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={onPrev}
          sx={{ textTransform: "capitalize" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={returnData}
          sx={{ textTransform: "capitalize" }}
        >
          Save & Continue
        </Button>
      </Stack>
    </Box>
  );
};

export default Description;
