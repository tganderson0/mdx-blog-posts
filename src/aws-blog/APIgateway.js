import { Typography, Button } from "@material-ui/core";
import React from "react";

export default function APIgateway() {
  
  return (
    <>
      <h2>What is AWS API Gateway?</h2>
      <Typography>
        AWS API Gateway is a way to create REST, HTTP, and Websocket APIs, which are easily scalable. You can create APIs that you can use either for youself, or create publicly available ones.
        With API Gateway, you are able to connect to your other AWS services, like your S3 or Lambda services. With the API Gateway, you only have to pay when your API is being used, which makes
        it easily scalable.
      </Typography>

      <h2>When to use it?</h2>
      <Typography>
        AWS API Gateway is best used anywhere you would create a traditional API, when you need it to be easily scalable.
      </Typography>

      <h2>How to use it?</h2>
      <Typography>
        With AWS API Gateway, you are able to create 3 kinds of APIs. The API Gateway requires you to create at least 1 AWS Lambda, so you should
        go through that tutorial if you have not already before continuing. After that, a tutorial can be found here:
      </Typography>

      <br />
      <Button variant="contained" href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html">AWS Website</Button>
      <br />
    </>
  )
}