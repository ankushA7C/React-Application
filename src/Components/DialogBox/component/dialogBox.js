import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import NumberFormat from 'react-number-format';
import { withStyles } from '@material-ui/styles';

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
const DialogBox = (props) => {
    const { classes } = props;
    return (

        <Dialog disableBackdropClick disableEscapeKeyDown open={props.open} onClose={props.handleDialog}>
            <DialogTitle>Facility Times</DialogTitle>
            <DialogContent>
                <div className="facility-Container">
                    <table>
                        <tbody>
                            <tr className="table-row">
                                <td className="day-Column"></td>
                                <td className="from-Date header-table">From</td>
                                <td className="to-Date header-table">To</td>
                                <td className="apply-btn"></td>
                            </tr>
                            <tr className="table-row" ref={props.ref_sunday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="sun" name="check_sunday" value="Sunday" onClick={props.onCheckBoxClick} /><label className="dayName">Sun</label></td>
                                <td className="from-Date"><NumberFormat id="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(0)} value={props.sunday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(0)} value={props.sunday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" onClick={() => props.onApplyToAll(0)}>Apply To All Checked</div></td>
                            </tr>
                            <tr className="table-row margin-25" ref={props.ref_monday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="mon" name="check_monday" value="Monday" onChange={props.onCheckBoxClick} /><label className="dayName">Mon</label></td>
                                <td className="from-Date"><NumberFormat id="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(1)} value={props.monday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(1)} value={props.monday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" onClick={() => props.onApplyToAll(1)}>Apply To All Checked</div></td>
                            </tr>
                            <tr className="table-row margin-25" ref={props.ref_tuesday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="tue" name="check_tuesday" value="Tuesday" onChange={props.onCheckBoxClick} /><label className="dayName">Tue</label></td>
                                <td className="from-Date"><NumberFormat id="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(2)} value={props.tuesday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(2)} value={props.tuesday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" onClick={() => props.onApplyToAll(2)}>Apply To All Checked</div></td>
                            </tr>
                            <tr className="table-row margin-25" ref={props.ref_wednesday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="wed" name="check_wednesday" value="Wednesday" onChange={props.onCheckBoxClick} /><label className="dayName">Wed</label></td>
                                <td className="from-Date"><NumberFormat id="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(3)} value={props.wednesday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(3)} value={props.wednesday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" onClick={() => props.onApplyToAll(3)}>Apply To All Checked</div></td>
                            </tr>
                            <tr className="table-row margin-25" ref={props.ref_thursday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="thu" name="check_thursday" value="Thursday" onChange={props.onCheckBoxClick} /><label className="dayName">Thu</label></td>
                                <td className="from-Date"><NumberFormat id="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(4)} value={props.thursday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(4)} value={props.thursday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" onClick={() => props.onApplyToAll(4)}>Apply To All Checked</div></td>
                            </tr>
                            <tr className="table-row margin-25" ref={props.ref_friday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="fri" name="check_friday" value="Friday" onChange={props.onCheckBoxClick} /><label className="dayName">Fir</label></td>
                                <td className="from-Date"><NumberFormat id="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(5)} value={props.friday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(5)} value={props.friday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" onClick={() => props.onApplyToAll(5)}>Apply To All Checked</div></td>
                            </tr>
                            <tr className="table-row margin-25" ref={props.ref_saturday}>
                                <td className="day-Column"><input className="checkBox-Day" type="checkbox" id="sat" name="check_saturday" value="Saturday" onChange={props.onCheckBoxClick} /><label className="dayName">Sat</label></td>
                                <td className="from-Date"><NumberFormat id="sat-fromDate" className="fromDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(6)} value={props.saturday.fromDate} /><div className="from-Date-img"><div className="am-Time bgc-blue">AM</div><div className="pm-Time bgc-grey">PM</div></div></td>
                                <td className="to-Date"><NumberFormat id="sat-toDate" className="toDate" format="##:##" mask={['H', 'H', 'M', 'M']} onChange={() => props.onChangeHandler(6)} value={props.saturday.toDate} /><div className="to-Date-img"><div className="am-Time bgc-grey">AM</div><div className="pm-Time bgc-blue">PM</div></div></td>
                                <td className="apply-btn"><div className="button-Apply" id="sat" onClick={() => props.onApplyToAll(6)}>Apply To All Checked</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DialogContent>
            <DialogActions style={{ padding: "20px 28px" }}>
                <Button variant="contained" color="secondary" onClick={props.handleDialog}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={props.handleDialog}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default withStyles(styles)(DialogBox);;