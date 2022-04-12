import React, { useState } from "react";
import "./TableProducts.scss";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

import { Link } from "react-router-dom";

const TableProducts = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Lifebuoy",
      stock: "999",
      imageURL:
        "https://www.lifebuoy.co.id/content/dam/brands/lifebuoy/id_id/products/1000001.png",
      price: "5.000",
      category: "Soap",
      actived: true,
    },
    {
      id: "2",
      name: "Sunsilk",
      stock: "999",
      imageURL:
        "https://image.femaledaily.com/dyn/500/images/prod-pics/product_1615542034_Hair_Fall__800x800.jpg",
      price: "10.000",
      category: "Shampoo",
      actived: false,
    },
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

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
            <h2>Product Table</h2>
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
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Actived</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? products.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : products
                ).map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.stock}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: "60px", height: "60px" }}
                        src={data.imageURL}
                      />
                    </TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>
                      {data.actived === true ?
                      <FormControlLabel
                        control={<Checkbox disabled icon={<CheckBoxOutlinedIcon />} />}
                        label="Actived"
                        /> :
                      <FormControlLabel
                        control={<Checkbox disabled icon={<IndeterminateCheckBoxOutlinedIcon />} />}
                        label="Inactived"
                        />
                      }
                    </TableCell>
                    <TableCell align="center">
                      <Link className="link-btn" to={"edit/" + data.id}>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <Link className="link-btn" to={"delete/" + data.id}>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
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
            count={products.length}
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

export default TableProducts;
