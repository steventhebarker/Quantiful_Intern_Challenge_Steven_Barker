import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import { JSONresponeSales } from "../data";
import { LineChart, CartesianGrid, XAxis, Tooltip, Legend, Line, YAxis, ResponsiveContainer } from "recharts"

const car_sales_data = JSONresponeSales[0].sales_over_time.buckets.map(bucketItem => {
  return {
    car_dates: bucketItem.key_as_string,
    cars: bucketItem.total_sales.value
  }
}
);

const phone_sales_data = JSONresponeSales[1].sales_over_time.buckets.map(bucketItem => {
  return {
    phone_dates: bucketItem.key_as_string,
    phones: bucketItem.total_sales.value
  }
}
);

const umbrella_sales_data = JSONresponeSales[2].sales_over_time.buckets.map(bucketItem => {
  return {
    umbrella_dates: bucketItem.key_as_string,
    umbrellas: bucketItem.total_sales.value
  }
}
);

const EducationPageRouter = (classes) =>
  <Card className={classes.root}>
       <CardContent>
      <Typography variant="display3">Graphs of Product Sales</Typography>
    </CardContent>
   
    <CardContent>
      <Typography variant="display1">Sales of Cars</Typography>
    </CardContent>
    <LineChart width={750} height={250} data={car_sales_data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="car_dates" />
      <YAxis dataKey="cars" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cars" stroke="#8884d8" />
    </LineChart>

    `<CardContent>
      <Typography variant="display1">Sales of Phones</Typography>
    </CardContent>
    <LineChart width={750} height={250} data={phone_sales_data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="phone_dates" />
      <YAxis dataKey="phones" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="phones" stroke="#8884d8" />
    </LineChart>

    <CardContent>
      <Typography variant="display1">Sales of Umbrellas</Typography>
    </CardContent>
    <LineChart width={750} height={250} data={umbrella_sales_data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="umbrella_dates" />
      <YAxis dataKey="umbrellas" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="umbrellas" stroke="#8884d8" />
    </LineChart>
  </Card>

const EducationPage = withRouter(EducationPageRouter);

export default (EducationPage);


