import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import S3 from './S3';
import AWSLambda from './AWSLambda';
import APIgateway from './APIgateway';
import Route53 from './Route53';
import DynamoDB from './DynamoDB';
import SNS from './SNS';

const TabPanel = (props) => {
  return (
    <div>
      {props.value === props.index && (
        <Box pt={16}>
          {props.element}
        </Box>
      )}
    </div>
  )
}

export default function MainSelector() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="AWS S3" />
          <Tab label="AWS Lambda" />
          <Tab label="AWS API Gateway" />
          <Tab label="AWS Route 53" />
          <Tab label="AWS DynamoDB" />
          <Tab label="AWS SNS" />
        </Tabs>
      </Box>
      <br />
      <TabPanel value={value} index={0} element={S3} />
      <TabPanel value={value} index={1} element={AWSLambda} />
      <TabPanel value={value} index={2} element={APIgateway} />
      <TabPanel value={value} index={3} element={Route53} />
      <TabPanel value={value} index={4} element={DynamoDB} />
      <TabPanel value={value} index={5} element={SNS} />
    </ Box>
  );
}