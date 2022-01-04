import { Button, Typography } from "@material-ui/core";
import React from "react";

export default function Route53() {
  
  return (
    <>
      <h2>What is AWS Route 53?</h2>
      <Typography>
        Route 53 is AWS' DNS service. Using Route 53, you can register for a domain name, route traffic to the correct web application you want, and monitor the availability of your service as well.
      </Typography>

      <h2>When to use it?</h2>
      <Typography>
        Route 53 should be used when you need a domain, with easy monitoring of it's status and availability.
      </Typography>

      <h2>How to use it?</h2>
      <Typography>
        To use Route 53, you mainly need to sign up for an AWS account, and go through the steps to own your domain. This link has the detailed steps: <br />
        <Button variant="contained" href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/setting-up-route-53.html">AWS Website</Button>
      </Typography>
    </>
  )
}