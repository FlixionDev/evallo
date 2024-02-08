import { Grid, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Allcontent() {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = () => {
        fetch('https://evallobackend.onrender.com/content', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => res.json()).then((res) => {
            setState(res)
        }).catch(err => console.log(err));
    }
    return (
        <Grid container>
    {
        state.length > 0 
        ? 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>No.</StyledTableCell>
            <StyledTableCell align="center">title</StyledTableCell>
            <StyledTableCell align="center">description</StyledTableCell>
            <StyledTableCell align="center">link</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.length >0 ? 
            state.map((el,ind)=>{
                return <StyledTableRow key={ind+1} >
                <StyledTableCell component="th" align='center' scope="row">
                  {ind+1}
                </StyledTableCell>
                <StyledTableCell align="center">{el.title}</StyledTableCell>
                <StyledTableCell align="center">{el.description}</StyledTableCell>
                <StyledTableCell align="center"><a href={`${el.link}`} target='_blank'>{el.link}</a></StyledTableCell>
              </StyledTableRow>
            })
            : ""
          }
            
        </TableBody>
      </Table>
    </TableContainer>
        : "No content published"
    }
        
    </Grid>
    )
}
