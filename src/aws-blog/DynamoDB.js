import { Typography, Card, Box, CardContent, Container, Button } from "@material-ui/core";
import React from "react";

const CustomCard = (props) => {
  return (
    <Container maxWidth="sm">
      <Card raised>
        <CardContent>
          <Typography variant="h5">
            {props.title}
          </Typography>
          <Typography variant="body2">
            {props.message}
          </Typography>
        </CardContent>
      </Card>
    </Container>
    
  )
}

export default function DynamoDB() {
  
  return (
    <>
      <h2>What is AWS DynamoDB?</h2>
      <Typography>
        DynamoDB is Amazon's NoSQL database, which they manage and run as a distributed system. Similar to the previous AWS services, you can use it to easily scale up or down, automatically.
        This lets you worry more about what you are doing with the database, rather than the management of it. With DynamoDB, the database is broken up into a few basic concepts.
      </Typography>

      <br />
      <CustomCard title="Tables" message="The container for your 'items'. Very similar concept to how other databases work." />
      <br />
      <CustomCard title="Items" message="An item is an entry in the table, a specific 'row/record' in the database." />
      <br />
      <CustomCard title="Attributes" message="Items are made up of attributes, or the 'columns/fields' of the database." />
      <br />

      <h2>When should I use it?</h2>
      <Typography>
        DynamoDB is best used when you need an easily scalable database, with high availability. The database availability is managed by Amazon, so you can focus on
        your project itself.
      </Typography>

      <h2>How do I use it?</h2>
      <Typography>
        There are a few different ways to use the DynamoDB, but we will look specifically at using the API. I will link to where you can read more about the other options as well below!
      </Typography>
      <br />
      <Button variant="contained" href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AccessingDynamoDB.html">AWS Website</Button>

      <h3>Using the API</h3>
      
    </>
  )
}