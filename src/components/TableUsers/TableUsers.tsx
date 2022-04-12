import React, { useState } from "react";
import "./TableUsers.scss";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";

const TableUsers = () => {
  const [users, SetUsers] = useState([
    {
      id: 1,
      name: "Administrator",
      email: "admin@ut.id",
      status: "Admin",
    },
    {
      id: 2,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 3,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 4,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 5,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 6,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 7,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 8,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 9,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 10,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 11,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 12,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 13,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 14,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
    {
      id: 15,
      name: "Muhamad Ayyub",
      email: "ayyub@ut.id",
      status: "Member",
    },
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="Container-Users">
      <Box sx={{ width: "auto" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <div className="Header">
            <h2>User Management</h2>
            <Link className="link-btn" to="create">
              <Button
                variant="contained"
                disableRipple
                size="small"
                startIcon={<AddIcon />}
              >
                Add User
              </Button>
            </Link>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "30px" }}>ID</TableCell>
                  <TableCell style={{ width: "250px" }}>Full Name</TableCell>
                  <TableCell style={{ width: "200px" }}>Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? users.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : users
                ).map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.status}</TableCell>
                    <TableCell align="center">
                      <Link className="link-btn" to={"edit/" + data.id}>
                        <Button
                          variant="contained"
                          disableRipple
                          size="small"
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                      </Link>
                      <Link className="link-btn" to={"delete/" + data.id}>
                        <Button
                          variant="contained"
                          disableRipple
                          size="small"
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
};

export default TableUsers;
