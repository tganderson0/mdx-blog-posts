import { Typography, Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableHead, Divider, Button } from "@material-ui/core";
import React from "react";

function createData(storageClass, designedFor, durability, availability, availabilityZones, minDuration, minObjectSize, considerations) {
  return { storageClass, designedFor, durability, availability, availabilityZones, minDuration, minObjectSize, considerations }
}

const rows = [
  createData('S3 Standard', 'Frequently accessed data (more than once a month) with millsecond access', '99.999999999%', '99.99%', '>= 3', 'None', 'None', 'None'),
  createData('S3 Standard-IA', 'Long-lived, infrequently accessed data (once a month) with millisecond access', '99.999999999%', '99.9%', '>= 3', '30 days', '128 KB', 'Per GB retrieval fees'),
  createData('S3 Intelligent-Tiering', 'Data with unknown, changing, or unpredictable access patterns', '99.999999999%', '99.9%', '>= 3', 'None', 'None', 'Monitoring and automation fees per object apply. No retrieval fees.'),
  createData('S3 One Zone-IA', 'Recreatable, infrequently accessed data (once a month) with millisecond access', '99.999999999%', '99.95%', '1', '30 days', '128 KB', 'Per GB retrieval fees apply. Not resilient to the loss of the Availability Zone'),
  createData('S3 Glacier Instant Retrieval', 'Long-lived, archive data accessed once a quarter with millisecond access', '99.999999999%', '99.9%', '>= 3', '90 days', '128 KB', 'Per GB retrieval fees apply'),
  createData('S3 Glacier Flexible Retrieval', 'Long-lived archive data accessed once a year with retrieval times of minutes to hours', '99.999999999%', '99.99% (after you restore objects)', '>= 3', '90 days', '40 KB', 'Per GB retrieval fees apply. You must first restore archived objects before you can access them.'),
  createData('S3 Glacier Deep Archive', 'Long-lived archive data accessed less than once a year with retrieval times of hours', '99.999999999%', '99.99% (after you restore objects)', '>= 3', '180 days', '40 KB', 'Per GB retrieval fees apply. You must first restore archived objects before you can access them'),
]

export default function S3(){

  return (
    <>
      <h2>What is AWS S3?</h2>
      <Typography>
      The S3 stands for Simple Storage Service, which as the name would suggest, lets you store and use data, hosted by Amazon. 
      S3 stores objects in what are called Buckets, which all the data for your website/app will be stored in. 
      Buckets have unique names across all AWS accounts, and you are limited to 100 buckets with your AWS account. You can think of a bucket almost like a domain name. 
      Amazon recommends that you choose a name that is relevant to you, because of this. After creating your bucket, you can add any files, or directories, that you would like to it.
      </Typography>

      <Typography>
      When using the stored objects, you can select a Storage Class for them, which determines how readily your data is available. While it would be convenient to always have your data milliseconds away, that is much more expensive, which is where these Storage Classes come into play. 
      By deciding how often your records will be used, you can save money. Here are the storage classes:
      </Typography>
      <br />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="S3 Storage Classes">
          <TableHead>
            <TableRow>
              <TableCell>Storage Class</TableCell>
              <TableCell>Designed For</TableCell>
              <TableCell>Durability</TableCell>
              <TableCell>Availability</TableCell>
              <TableCell>Availability Zones</TableCell>
              <TableCell>Minimum Storage Duration</TableCell>
              <TableCell>Minimum Billable Object Size</TableCell>
              <TableCell>Considerations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.storageClass}
                sx={{ '&:last-child td, &:last-child th': { border: 0}}}
              >
                <TableCell component='th' scope="row">
                  {row.storageClass}
                </TableCell>
                <TableCell align="left">{row.designedFor}</TableCell>
                <TableCell align="left">{row.durability}</TableCell>
                <TableCell align="left">{row.availability}</TableCell>
                <TableCell align="left">{row.availabilityZones}</TableCell>
                <TableCell align="left">{row.minDuration}</TableCell>
                <TableCell align="left">{row.minObjectSize}</TableCell>
                <TableCell align="left">{row.considerations}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>When to Use S3?</h2>
      <Typography>
      S3 is best used when you need to store a large amount of data for your project. 
      S3 allows you to focus on more of your project itself, without having to worry about the availability and potential downtime of your data.
      </Typography>

      <h2>How to use S3?</h2>
      <Typography>
        AWS provides many SDKs for using S3, supporting many languages. You can find links to how to use all the SDKs here: <br />
        <Button variant="contained" href="https://aws.amazon.com/s3/getting-started/">AWS Website</Button> <br />
      </Typography>      
    </>
  );
};