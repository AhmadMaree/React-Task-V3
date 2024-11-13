import { Button, Paper, TextField, Typography } from "@mui/material";
import usePageOne from "./usePageOne";
import { CustomTable } from "../../components/CustomTable";
import './styles.scss'

const pageOne = () => {

    const {
        onSearch,
        register,
        onPageChange,

        columns,
        data,
        isLoading,
        isError,
        page,
        pageSize,
    } = usePageOne();

    return (
        <Paper className="page-one-container">
            <Typography variant="h4" className="page-one-container-title">
                Star Wars Table
            </Typography>
            <form onSubmit={onSearch} className="page-one-container-search" >
                <TextField className="input" label="Search by name" {...register("name")} />
                <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
            <CustomTable
                columns={columns}
                data={data}
                isLoading={isLoading}
                isError={isError}
                title="Star Wars"
                customStyles={{ backgroundColor: '#f9f9f9' }}
                onPageChange={onPageChange}
                page={page}
                pageSize={pageSize}
                totalCount={data?.count || 0}
            />
        </Paper>
    )
}
export default pageOne;