import React from "react";
import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { ICustomTableProps } from "./types";
import { customTableStyle } from "./CustomTableStyle";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../constant";

const CustomTable: React.FC<ICustomTableProps> = ({
    columns,
    data,
    isError,
    isLoading,
    pageSizeOptions = [10],
    pageSize = 10,
    page = 0,
    onPageChange,
    totalCount = 0,
}) => {
    const nav = useNavigate();

    const handlePageChange = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        onPageChange(newPage);
    };

    return (
        <TableContainer >
            <Table>
                <TableHead sx={customTableStyle.tableHead}>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.label + column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                sx={customTableStyle.tableCell}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                                <CircularProgress />
                            </TableCell>
                        </TableRow>
                    ) : isError ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                                Error loading data.
                            </TableCell>
                        </TableRow>
                    ) : (
                        data?.results?.map((row: any) => (
                            <TableRow hover tabIndex={-1} key={row.name}>
                                {columns.map((column) => {
                                    const isDetails = column.id === 'details';
                                    return (
                                        <TableCell sx={customTableStyle.tableBody.tabelCell} key={column.id} align={column.align}>
                                            {!isDetails ? row[column.id] :
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    sx={customTableStyle.button}
                                                    onClick={() => nav(ERoute.PAGE_TWO)}
                                                >
                                                    Details
                                                </Button>
                                            }
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            {!isLoading &&
                <TablePagination
                    rowsPerPageOptions={pageSizeOptions}
                    component="div"
                    count={totalCount}
                    rowsPerPage={pageSize}
                    page={page}
                    onPageChange={handlePageChange}
                    sx={customTableStyle.pagination}
                />
            }
        </TableContainer>
    )
}
export default CustomTable;