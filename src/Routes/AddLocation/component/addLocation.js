import React from "react";
import "./style.css";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import momentTZ from 'moment-timezone';
import { IDBService } from "../../../Service/IDBService"
import LocationForm from "../../../Components/LocationForm/index"
import DialogBox from "../../../Components/DialogBox/index"

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

const initialState = {
    locationName: '',
    address1: '',
    address2: '',
    suitNo: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    timeZone: '',
    facilityTime: '',
    appPool: [],
    open: false,

    check_sunday: false,
    check_monday: false,
    check_tuesday: false,
    check_wednesday: false,
    check_thursday: false,
    check_friday: false,
    check_saturday: false,

    sunday: {
        fromDate: '',
        toDate: ''
    },
    monday: {
        fromDate: '',
        toDate: ''
    },
    tuesday: {
        fromDate: '',
        toDate: ''
    },
    wednesday: {
        fromDate: '',
        toDate: ''
    },
    thursday: {
        fromDate: '',
        toDate: ''
    },
    friday: {
        fromDate: '',
        toDate: ''
    },
    saturday: {
        fromDate: '',
        toDate: ''
    },
    key: new Date().getTime(),
    timeZoneList: []
};

class AddLocation extends React.Component {
    constructor(props) {
        super(props);
        this._db = new IDBService();
        this.state = initialState;
        this.sunday = React.createRef();
        this.monday = React.createRef();
        this.tuesday = React.createRef();
        this.wednesday = React.createRef();
        this.thursday = React.createRef();
        this.friday = React.createRef();
        this.saturday = React.createRef();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = () => {
        if (this.state.locationName == '') {
            alert("Please fill the form details.")
        } else {
            this._db.insertValues(this.state).then(result => {
                this.props.history.push("/");
            }
            );
        }
    }

    onCancel = () => {
        this.setState(initialState);
        const timeZonesList = momentTZ.tz.names();
        this.setState({ timeZoneList: timeZonesList });
    }

    handleDialog = () => {
        this.setState({ open: !this.state.open });
    }

    addChipItems = (chip) => {
        this.setState({ appPool: chip });
    }

    componentDidMount = () => {
        const timeZonesList = momentTZ.tz.names();
        this.setState({ timeZoneList: timeZonesList, key: this.props.dbKey });
    }

    onChangeForPhoneNumber = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 10) {
            this.setState({ phoneNumber: onlyNums });
        } else if (onlyNums.length === 10) {
            const number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{4})/,
                '($1) $2-$3'
            );
            this.setState({ phoneNumber: number });
        }
    }


    onApplyToAll = (index) => {
        const refs = [this.sunday, this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday];
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

        let dataMap = days.map((data, data_index) => {
            let checkDay = "check_" + data;
            if (this.state[checkDay]) {
                this.setState({

                    [days[data_index]]:
                    {
                        fromDate: refs[index].current.childNodes[1].firstChild.value,
                        toDate: refs[index].current.childNodes[2].firstChild.value
                    }
                });
            }
        })
    }

    onChangeHandler = (index) => {
        const refs = [this.sunday, this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday];
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        let fromDateValue = refs[index].current.childNodes[1].firstChild.value;
        let toDateValue = refs[index].current.childNodes[2].firstChild.value;
        if ((fromDateValue.substring(0, 2) > 24) || (fromDateValue.substring(3) > 60) || (toDateValue.substring(0, 2) > 24) || (toDateValue.substring(3) > 60)) {
            alert("Please Enter Valid Time");
        }
        else {
            this.setState({
                [days[index]]:
                {
                    fromDate: fromDateValue,
                    toData: toDateValue
                }
            });
        }
    }

    onCheckBoxClick = (e) => {
        this.setState({ [e.target.name]: !this.state[e.target.name] });
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                < LocationForm {...this.state}
                    key="1"
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onCancel={this.onCancel}
                    handleDialog={this.handleDialog}
                    onChangeForPhoneNumber={this.onChangeForPhoneNumber}
                    addChipItems={this.addChipItems}

                />

                <DialogBox  {...this.state}
                    key="2"
                    handleDialog={this.handleDialog}
                    onCheckBoxClick={this.onCheckBoxClick}
                    onChangeHandler={this.onChangeHandler}
                    onApplyToAll={this.onApplyToAll}
                    ref_sunday={this.sunday}
                    ref_monday={this.monday}
                    ref_tuesday={this.tuesday}
                    ref_wednesday={this.wednesday}
                    ref_thursday={this.thursday}
                    ref_friday={this.friday}
                    ref_saturday={this.saturday}
                />
            </>
        );
    }
}
AddLocation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddLocation);