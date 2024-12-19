import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function TableData({ headers, data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: '#1976d2' }}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell sx={{ color: 'white' }} key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableData.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array,
}

export default TableData;
