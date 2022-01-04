import { Button, emphasize, Typography } from "@material-ui/core";
import React from "react";

export default function SNS() {
  
  return (
    <>
      <h2>What is AWS SNS?</h2>
      <Typography>
        AWS SNS is Amazon's <emphasize>Simple Notification Service</emphasize>, which facilitates messaging between the producer, (your program), and any subscribers. The subscribers can be both
        people, and other applications. With SNS, you can communicate to your other AWS services, as well as emailing, texting, and pushing to human clients.
      </Typography>

      <h2>When to use it?</h2>
      <Typography>
        SNS is best used when you need something to facilitate your messages whether between your own applications, like sending notifications to your other programs when a user
        places an order. You can use it as well when you need to send user notifications, such as texts or emails, or even mobile push notifications.
      </Typography>

      <h2>How to use it?</h2>
      <Typography>
        Amazon provides multiple SDKs which you can use, so you can program in the language that you prefer. A link to the website with the tutorials is below:
      </Typography>
      <br />
      <Button href="https://docs.aws.amazon.com/sns/latest/dg/sdk-general-information-section.html" variant="contained">AWS Website</Button>
    </>
  )
}