import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  Grid,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  FormGroup,
} from "@mui/material";
import SpanningTable from "../components/SpanningTable";

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

function createData(quantity, item, price, total) {
  return { quantity, item, price, total };
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const rows = [
  createData("4", "Product 1", "$2,000", "$8,000"),
  createData("12", "Product 2", "$2,000", "$12,000"),
];

function Checkout() {
  const [industry, setIndustry] = React.useState("");
  const handleChangeIndustry = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div className="w-5/6 flex flew-row justify-center m-auto my-32">
      {/* checkout builder */}
      <div className=" w-1/3">
        <div className="flex flex-col p-5 gap-5">
          <h1 className="font-bold text-xl pb-5">Payment Types</h1>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="On Invoice"
              control={<Checkbox />}
              label="On Invoice"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Check"
              control={<Checkbox />}
              label="Check"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Credit Card"
              control={<Checkbox />}
              label="Credit Card"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Cash"
              control={<Checkbox />}
              label="Cash"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Wire"
              control={<Checkbox />}
              label="Wire"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
        </div>
        <div className="flex flex-col p-5 gap-5">
          <h1 className="font-bold text-xl pb-5">Payment Effective Dates</h1>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Immediate"
              control={<Checkbox />}
              label="Immediate"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Check"
              control={<Checkbox />}
              label="On Shipment"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Credit Card"
              control={<Checkbox />}
              label="On Delivery"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Cash"
              control={<Checkbox />}
              label="Installment"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
        </div>
        <div className="flex flex-col p-5 gap-5">
          <h1 className="font-bold text-xl pb-5">Credit Terms</h1>
          <div className="flex flew-row justify-between">
            <FormControlLabel
              value="Buyer Choice"
              control={<Checkbox />}
              label="Buyers Choice"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Max $ Purchase"
              variant="outlined"
            />
          </div>
          <FormControlLabel
            value="Check"
            control={<Checkbox />}
            label="Up to net 30"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Credit Card"
            control={<Checkbox />}
            label="Up to net 60"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Cash"
            control={<Checkbox />}
            label="Up to net 90"
            labelPlacement="end"
          />
          <div className="flex flex-row gap-5 justify-between">
            <FormControlLabel
              value="Cash"
              control={<Checkbox />}
              label="Custom Terms"
              labelPlacement="end"
            />
            <TextField
              size="small"
              id="website"
              label="Custom Credit Term"
              variant="outlined"
            />
          </div>
          <FormControl fullWidth>
            <InputLabel id="industry">Financing Available</InputLabel>
            <Select
              labelId="industry"
              id="industry"
              value={industry}
              label="Financing Available"
              onChange={handleChangeIndustry}
            >
              <MenuItem value={10}>10%</MenuItem>
              <MenuItem value={20}>20%</MenuItem>
              <MenuItem value={30}>30%</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="w-16"></div>
      {/* checkout visualization */}
      <div className="w-2/3">
        <h1 className="font-bold text-xl py-5 ">Credit Terms</h1>
        <SpanningTable></SpanningTable>
      </div>
    </div>
  );
}

export default Checkout;
