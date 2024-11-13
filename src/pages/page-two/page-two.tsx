import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, TextFieldProps, Typography } from "@mui/material";
import usePageTwo from "./usePageTwo";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DISORDERS, GENDER } from "./constant";


import './styles.scss'
import { Controller } from "react-hook-form";
const pageTwo = () => {

    const {
        errors,
        register,
        handleSubmit,
        control,
        handleAddNewWorkspace,
        onSubmit,
        workspaceOptions,
        handleCancel
    } = usePageTwo();
    console.log(errors)
    console.log({ ...register("gender") })
    return (
        <Paper className="page-two-container">
            <Typography className="title" variant="h4" gutterBottom>Add a patient</Typography>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-container-names">
                    <TextField
                        label="First name"
                        className="first-name"
                        fullWidth
                        required
                        margin="normal"
                        {...register("firstName", { required: "First name is required" })}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                    />
                    <TextField
                        label="Last name"
                        className="last-name"
                        fullWidth
                        required
                        margin="normal"
                        {...register("lastName", { required: "Last name is required" })}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                </div>

                <FormControl component="fieldset" margin="normal" error={!!errors.gender}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup row {...field}>
                                {GENDER.map((i: { label: string; value: string; }, index: number) => (
                                    <FormControlLabel
                                        key={i.value}
                                        value={i.value}
                                        control={<Radio />}
                                        label={i.label}
                                    />
                                ))}
                            </RadioGroup>
                        )}
                    />
                    {errors.gender && <p className="error">{errors.gender.message}</p>}
                </FormControl>

                <FormControl component="fieldset" margin="normal">
                    <FormLabel required component="legend">Disorder</FormLabel>
                    <FormGroup row>
                        {DISORDERS.map(disorder => (
                            <FormControlLabel
                                key={disorder}
                                control={
                                    <Checkbox
                                        {...register("disorders")}
                                        value={disorder}
                                    />
                                }
                                label={disorder}
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                        name="birthDate"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                label="Date of Birth"
                                value={field.value ? new Date(field.value) : null}
                                onChange={(newValue) => field.onChange(newValue ? newValue.toISOString() : '')}
                                renderInput={(params: TextFieldProps) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.birthDate}
                                        helperText={errors.birthDate?.message}
                                    />
                                )}
                            />
                        )}
                    />
                </LocalizationProvider>

                <div className="form-container-workspace">
                    <FormControl fullWidth error={Boolean(errors.workspaceTemplate)}>
                        <InputLabel required>Workspace template</InputLabel>
                        <Controller
                            name="workspaceTemplate"
                            control={control}
                            render={({ field }) => (
                                <Select {...field} label="Workspace template">
                                    {workspaceOptions.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                        {errors.workspaceTemplate && (
                            <FormHelperText>{errors.workspaceTemplate.message}</FormHelperText>
                        )}
                    </FormControl>
                    <Button
                        type="button"
                        onClick={handleAddNewWorkspace}
                        variant="outlined"
                        color="primary"
                        className="button-workspace"
                    >
                        Add more workspace
                    </Button>
                </div>
                <div className="buttons">
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                    <Button onClick={handleCancel} type="button" variant="outlined" color="primary">Cancel</Button>
                </div>
            </form>
        </Paper>
    )
}
export default pageTwo;