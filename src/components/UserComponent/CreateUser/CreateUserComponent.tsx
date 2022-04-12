import React, { useState } from "react";
import "./CreateUserStyle.scss";

import { Box, Button, MenuItem, Paper, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const CreateUserComponent = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    status: "",
  });

  function handleChange(event: any) {
    // event.preventDefault();
    let data = { ...formData };
    data[event.target.name] = event.target.value;
    setFormData(data);
    console.log(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    console.log("submit")
  }

  return (
    <div className="Container-product">
      <Box sx={{ width: "auto" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <div className="Header">
            <h2>Create User</h2>
            <Link className="link-btn" to="/users">
              <Button
                variant="contained"
                disableRipple
                size="small"
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            </Link>
          </div>
          <div className="Main-Input">
            <form>
              <TextField
                fullWidth
                label="Nama"
                id="name"
                variant="filled"
                type="text"
                margin="normal"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
              <TextField
                fullWidth
                label="Email"
                id="email"
                variant="filled"
                type="email"
                margin="normal"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <TextField
                fullWidth
                label="Password"
                id="password"
                variant="filled"
                type="password"
                margin="normal"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              <TextField
                fullWidth
                label="Status"
                id="status"
                variant="filled"
                select
                margin="normal"
                name="status"
                onChange={handleChange}
                value={formData.status}
              >
                {["Admin", "Member"].map((text) => (
                  <MenuItem key={text} value={text}>
                    {text}
                  </MenuItem>
                ))}
              </TextField>
            </form>
            <Button
              variant="contained"
              disableRipple
              size="large"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default CreateUserComponent;
