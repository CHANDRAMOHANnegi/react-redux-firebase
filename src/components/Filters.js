import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function Filter(props) {
    const classes = useStyles();
    const map = props.filterMap;
    const [value, setValue] = React.useState(Object.values(map)[0]);

    const handleChange = event => {
        setValue(event.target.value);
    };

    let menuitems = []
    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            const value = map[key];
            menuitems.push(<MenuItem key={key} value={value}>{value}</MenuItem>)
        }
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    displayEmpty
                    onChange={handleChange} >
                    {[...menuitems]}
                </Select>
            </FormControl>
        </div>
    );
}