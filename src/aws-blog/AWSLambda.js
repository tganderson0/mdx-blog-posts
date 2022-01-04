import { List, ListItem, ListItemText, Typography, Box, Button } from "@material-ui/core";
import React from "react";

export default function AWSLambda() {
  const supportedLanguages = [
    'Node.js',
    'Python',
    'Ruby',
    'Java',
    'Go',
    '.Net',
  ]
  return (
    <>
      <h2>What is AWS Lambda?</h2>
      <Typography>
        AWS Lambda allows you to create serverless, scalable backend services or applications. The code is organized into Lambda functions, which AWS will call automatically
        under the conditions that you give them. With AWS Lambda, you only pay for the time spent computing, so your projects are easily scalable! It allows you to focus on the code itself,
        without having to worry about the maintainence of the server, or performing manual scaling. AWS Lambda supports a number of programming languages as well, so you can pick the one that
        you are most comfortable with. Here are the languages: <br />
      </Typography>
      <List>
        {supportedLanguages.map(language => (
          <ListItem disablePadding>
            <ListItemText primary={language} />
          </ListItem>
        ))}
      </List>

      <h2>When to use it?</h2>
      <Typography>
        AWS Lambda is best used when you need to create a serverless, easily scalable (all you have to do is pay for the runtime, so it only costs more), backend applications or servers.
      </Typography>

      <h2>How to use it?</h2>
      <Typography>
        Amazon provides great documentation and examples of how to use their Lambda service, which is linked below!
      </Typography>
      <Button href="https://aws.amazon.com/lambda/getting-started/" variant="contained">AWS Website</Button>
    </>
  )
}