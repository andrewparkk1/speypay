import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  TextField,
  Box,
  MenuItem,
  Select,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Item,
  FormGroup,
} from "@mui/material";

function Question() {
  const [industry, setIndustry] = React.useState("");
  const handleChangeIndustry = (event) => {
    setIndustry(event.target.value);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex flex-row justify-center items-center my-32">
      <div className="flex flex-col gap-5 w-7/12">
        <h1 className="text-xl font-bold pt-3">
          Tell us more about your business
        </h1>
        <Grid container spacing={2} columns={3}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="address"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField fullWidth id="city" label="City" variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <InputLabel id="industry">State</InputLabel>
              <Select
                labelId="state"
                id="state"
                value={industry}
                label="State"
                onChange={handleChangeIndustry}
              >
                <MenuItem value={10}>Alabama</MenuItem>
                <MenuItem value={20}>Alaska</MenuItem>
                <MenuItem value={30}>Arizona</MenuItem>
                <MenuItem value={30}>California</MenuItem>
                <MenuItem value={30}>Colorado</MenuItem>
                <MenuItem value={30}>Connecticut</MenuItem>
                <MenuItem value={30}>Deleware</MenuItem>
                <MenuItem value={30}>Floride</MenuItem>
                <MenuItem value={30}>Georgia</MenuItem>
                <MenuItem value={30}>Hawaii</MenuItem>
                {/* Idaho IllinoisIndiana Iowa
                Kansas Kentucky Louisiana Maine Maryland Massachusetts Michigan
                Minnesota Mississippi Missouri MontanaNebraska Nevada New
                Hampshire New Jersey New Mexico New York North Carolina North
                Dakota Ohio Oklahoma Oregon PennsylvaniaRhode Island South
                Carolina South Dakota Tennessee Texas Utah Vermont Virginia
                Washington West Virginia Wisconsin Wyoming */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <TextField fullWidth id="zip" label="Zip" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="website"
              label="Website URL"
              variant="outlined"
            />
          </Grid>
        </Grid>
        {/* more */}
        <h1 className="text-xl font-bold pt-3">
          Tell us more about your business
        </h1>
        <Grid container spacing={2} columns={3}>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="industry">Industry</InputLabel>
              <Select
                labelId="industry"
                id="industry"
                value={industry}
                label="Industry"
                onChange={handleChangeIndustry}
              >
                <MenuItem value={30}>Freight</MenuItem>
                <MenuItem value={30}>Building Products</MenuItem>
                <MenuItem value={30}>Energy</MenuItem>
                <MenuItem value={10}>Trucking</MenuItem>
                <MenuItem value={20}>Auto Parts</MenuItem>
                <MenuItem value={10}>Home Appliances</MenuItem>
                <MenuItem value={10}>Agricultures</MenuItem>
                <MenuItem value={10}>Custom Manufacturing</MenuItem>
                <MenuItem value={10}>Grocery</MenuItem>
                <MenuItem value={10}>Appaarel</MenuItem>
                <MenuItem value={10}>Investment Banking</MenuItem>
                <MenuItem value={10}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel id="numBuyers">Number of Buyers</InputLabel>
              <Select
                labelId="numBuyers"
                id="numBuyers"
                value={industry}
                label="Number of Buyers"
                onChange={handleChangeIndustry}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel id="tVol">Transaction Volume</InputLabel>
              <Select
                labelId="tVol"
                id="tVol"
                value={industry}
                label="Transaction Volume"
                onChange={handleChangeIndustry}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel id="numSellers">Number of Sellers</InputLabel>
              <Select
                labelId="numSellers"
                id="numSellers"
                value={industry}
                label="Number of Sellers"
                onChange={handleChangeIndustry}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel id="aTV">Avg. Transaction Value</InputLabel>
              <Select
                labelId="aTV"
                id="aTV"
                value={industry}
                label="Avg. Transaction Value"
                onChange={handleChangeIndustry}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* paid */}
        <h1 className="text-xl font-bold pt-3">
          How would you like to get paid?
        </h1>
        <div className="flex flew-row justify-between width-full">
          <FormControlLabel
            value="ACH"
            control={<Checkbox />}
            label="ACH"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Check"
            control={<Checkbox />}
            label="Check"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Credit Car"
            control={<Checkbox />}
            label="Credit Card"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Cash"
            control={<Checkbox />}
            label="Cash"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Wire"
            control={<Checkbox />}
            label="Wire"
            labelPlacement="end"
          />
        </div>
        <h1 className="text-xl font-bold pt-3">
          What are your preferred payment terms?
        </h1>
        <div className="flex flew-row justify-between width-full">
          <FormControlLabel
            value="On Invoice"
            control={<Checkbox />}
            label="On Invoice"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Shipment"
            control={<Checkbox />}
            label="Shipment"
            labelPlacement="end"
          />
          <FormControlLabel
            value="By Milestone"
            control={<Checkbox />}
            label="By Milestone"
            labelPlacement="end"
          />
          <FormControlLabel
            value="On Delivery"
            control={<Checkbox />}
            label="On Delivery"
            labelPlacement="end"
          />
        </div>
        <h1 className="text-xl font-bold pt-3">
          Would you like to offer credit terms/financing?
        </h1>
        <FormControl fullWidth>
          <InputLabel id="industry">
            Are you currently offering financing?
          </InputLabel>
          <Select
            labelId="state"
            id="state"
            value={industry}
            label="Are you currently offering financing?"
            onChange={handleChangeIndustry}
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
        <h1 className="text-xl font-bold pt-3">
          What are your current credit term offering?
        </h1>
        <Grid container spacing={2} columns={3}>
          <Grid item xs={1}>
            <TextField
              fullWidth
              id="website"
              label="Credit Term Offering"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              id="website"
              label="Credit Term Offering"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              id="website"
              label="Credit Term Offering"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button sx={{ marginTop: 3 }} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Question;
