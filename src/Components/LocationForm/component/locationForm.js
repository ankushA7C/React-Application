import React from "react";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/styles';
import ChipInput from 'material-ui-chip-input'



const styles = theme => ({
    fz: {
        fontSize: 12
    },
    timeZone: {
        fontSize: 12,
        width: 220,
        paddingTop: 4
    },
    state: {
        fontSize: 12,
        width: 95,
        paddingTop: 2

    },
    appointment: {
        height: 55,
        marginTop: -10
    }
});
const LocationForm = (props) => {
    const { classes } = props;
    return (

        <div className="col-md-12">
            <div className="form-container">
                <div className="locationForm">
                    <React.Fragment>
                        <Typography gutterBottom>
                            Add Locations
                             </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="locationName"
                                    name="locationName"
                                    label="Location Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    value={props.locationName}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }}
                                    onChange={props.onChange}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    value={props.address1}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }}
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="suitNo"
                                    name="suitNo"
                                    label="Suit No."
                                    fullWidth
                                    value={props.suitNo}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }}
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    label="Address line 2"
                                    fullWidth
                                    value={props.address2}
                                    autoComplete="shipping address-line2"
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }}
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    value={props.city}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }}
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl >

                                    <InputLabel id="state"
                                        className={classes.fz}
                                    >State</InputLabel>
                                    <Select
                                        filled
                                        labelId="state"
                                        id="state"
                                        name="state"
                                        className={classes.state}
                                        value={props.state}
                                        onChange={props.onChange}
                                    >
                                        <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                        <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                        <MenuItem value="Assam">Assam</MenuItem>
                                        <MenuItem value="Bihar">Bihar</MenuItem>
                                        <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                        <MenuItem value="Goa">Goa</MenuItem>
                                        <MenuItem value="Gujarat">Gujarat</MenuItem>
                                        <MenuItem value="Haryana">Haryana</MenuItem>
                                        <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                        <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                                        <MenuItem value="Karnataka">Karnataka</MenuItem>
                                        <MenuItem value="Kerala">Kerala</MenuItem>
                                        <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                        <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                        <MenuItem value="Manipur">Manipur</MenuItem>
                                        <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                                        <MenuItem value="Mizoram">Mizoram</MenuItem>
                                        <MenuItem value="Nagaland">Nagaland</MenuItem>
                                        <MenuItem value="Odisha">Odisha</MenuItem>
                                        <MenuItem value="Punjab">Punjab</MenuItem>
                                        <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                        <MenuItem value="Sikkim">Sikkim</MenuItem>
                                        <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                        <MenuItem value="Telangana">Telangana</MenuItem>
                                        <MenuItem value="Tripura">Tripura</MenuItem>
                                        <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                        <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                        <MenuItem value="West Bengal">West Bengal</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    id="zipCode"
                                    name="zipCode"
                                    label="Zip Code"
                                    fullWidth
                                    value={props.zipCode}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }, { maxLength: 10 }}
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    fullWidth
                                    value={props.phoneNumber}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }, { maxLength: 10 }}
                                    onChange={props.onChangeForPhoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl >
                                    <InputLabel id="timeZone"
                                        className={classes.fz}
                                    >Time Zone</InputLabel>
                                    <Select
                                        filled
                                        labelId="timeZone"
                                        id="timeZone"
                                        name="timeZone"
                                        value={props.timeZone}

                                        className={classes.timeZone}
                                        onChange={props.onChange}
                                    >
                                        {props.timeZoneList && props.timeZoneList.map((data, index) => <MenuItem key={index} value={data}>{data}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="facilityTime"
                                    name="facilityTime"
                                    label="Facility Times"
                                    fullWidth
                                    value={props.facilityTime}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    inputProps={{ style: { fontSize: 14 } }}
                                    onChange={props.onChange}
                                    onClick={props.handleDialog}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ChipInput
                                    label="Appointment Pool"
                                    id="appPool"
                                    name="appPool"
                                    value={props.appPool}
                                    className={classes.appointment}
                                    onChange={(chip) => props.addChipItems(chip)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <div className="buttons">
                                    <div className="margin-5"><Button variant="contained" color="secondary" onClick={props.onCancel}>Cancel</Button></div>
                                    <div className="margin-5"><Button variant="contained" color="primary" onClick={props.onSubmit}>Save</Button></div>
                                </div>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(LocationForm);;