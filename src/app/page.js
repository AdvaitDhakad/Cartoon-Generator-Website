"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { maxHeight, width } from "@mui/system";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { Card } from "@mui/material";
import { Prompt } from "next/font/google";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

export default function Home() {
  const [Prompt, setPrompt] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [viewgrid2, setviewgrid2] =useState(true);
  const [viewgrid3, setviewgrid3] =useState(false);
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmitPrompt = async () => {
    setLoading(true)
    const res = await fetch("/api/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Prompt }),
    });
    const images = await res.json();
    console.log(images);
    setImages(images);
    setLoading(false)  
  }

  const handleImageClick = async (image) => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    });
    const imageUrl = await res.json();
    console.log(imageUrl);
    setLoading(false);
  };
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center min-h-screen justify-center text-center">
        <Typography variant="h1" gutterBottom>
          Story Craft
        </Typography>
        <Button
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("main-pg").offsetTop - 70,
              behavior: "smooth",
            });
          }}
          color="primary"
          size="large"
          startIcon={
            <ExpandCircleDownOutlinedIcon style={{ fontSize: "4rem" }} />
          }
        ></Button>
      </div>
      <div id="main-pg" className="min-h-screen">
        <div>
          <Container>
            <div className="flex flex-col items-center justify-between">
              <Typography variant="h2" gutterBottom>
                Welcome to Story Craft
              </Typography>
            </div>
          </Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
               <div>
               <Container>
                <Typography variant="h4" gutterBottom>
                  What is Story Craft?
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Story Craft is a tool for writers to help them craft their
                  stories. It is a tool that helps the user to visualize the
                  characters and the world they are creating. It is a tool that
                  helps the user to organize their thoughts and ideas. It is a
                  tool that helps the user to create a story that is cohesive
                  and compelling.
                </Typography>
                </Container>
            </div>
            </Grid>
            <Grid item xs={6}>
            <div>
               <Container>
                <Typography variant="h4" gutterBottom>
                  How does it work?
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Story Craft takes your input and using Natural Language
                  Processing, it extracts the important information from your
                  input. It then uses this information to create a visual
                  representation of your story. This visual representation
                  includes a character map and a story map. The visual representation
                  is generated using a Generative Adversarial Network (GAN).
                </Typography>
                </Container>
            </div>
            </Grid>
          </Grid>
        </div>
        <div className="pt-10">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
            <Grid item xs={8} >
              <div className="ml-3" b>
              <Card>
                <Container >
              <Typography variant="h3">Enter your Prompt</Typography>
              <textarea name="story" className=" w-full pb-48 text-lg text-gray-900  bg-transparent dark:text-white" placeholder="Your story..."
              value={Prompt} onChange={(e) => setPrompt(e.target.value)} 
              required />
              <Button variant="contained" color="primary" size="large" onClick={handleSubmitPrompt}>
                Generate
              </Button>
              </Container>
              </Card>
              </div>
            </Grid>
            {viewgrid2 ? (
              <Grid item xs={3}>
                <Typography variant="h5">Choose your Base Image</Typography>
                <Grid container spacing={3}>
                  {Object.keys(images).map((key) => (
                    <Grid item xs={4} key={key}>
                      <button onClick={() => handleImageClick(images[key])}>
                        <img
                          src={images[key]}
                          alt={`Image ${key}`}
                          className="hover:opacity-75 transition-opacity duration-500"
                        />
                      </button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ) : <div></div>}
            <Grid item xs={9}>
              <div className="pl-7">
                <Typography variant="h3">Visual Representation</Typography>
                    <Grid container spacing={2}>
                      {Object.keys(imageUrl).map((key) => (
                        <Grid item xs={3} key={key}>
                          <img src={imageUrl[key]} alt={`Image ${key}`} />
                        </Grid>
                      ))}
                    </Grid>
                    {/* {Object.keys(imageUrl).map((key) => (
                      <Grid item xs={1} key={key}>
                        <img
                          src={imageUrl[key]}
                          alt={`Image ${key}`}
                        />
                      </Grid>
                    ))} */}
                </div>
            {viewgrid3 ? 
            <Grid item xs={3}>
              <Typography variant="h5">Story Genertated</Typography>
              <Item></Item>
            </Grid>: <div></div>}
          </Grid>
        </Grid>
        </div>
      </div>
    </main>
  );
}
