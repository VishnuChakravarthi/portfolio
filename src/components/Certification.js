import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Certification = () => {
  return (
    <Card style={{ boxShadow: "none", marginTop: 20 }}>
      <CardContent>
        <Typography variant="h6" component="h3">
          1. Modern React with Redux from Udemy
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="h3">
          2. Java Programming Masterclass for Software Developers from Udemy
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="h3">
          3. Core Java from Computer Software College (CSC)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Certification;
