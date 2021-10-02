import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import './styling/CustomService.css';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CustomServiceOption (option) {

    return (
        //JSX that displays a checkbox (autocomplete (allow multiple selections) with multiple values)
        <Autocomplete
            multiple
            className="checkboxes-tags"
            options={'Basic Car Wash', 'Complete Car Interior Detailing', 'Full Car Exterior Detailing', 'Full Car Detailing', 'Full Car Restoration', 'Show-Car Detailing'}
            disableCloseOnSelect
            // getOptionLabel={(option) => option.title}
            getOptionLabel={(option)}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                        />
                    {option}
                    </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
            <TextField {...params} label="Checkboxes" placeholder="Services" />
        )}
        />
    )
};

// const CustomService = () => {

//     //autocomplete plus data needed

//     return (
//         //JSX that displays a checkbox (autocomplete (allow multiple selections) with multiple values)
//         <h1>You've reached the Custom Service Page</h1>
//     )
// };

// export default CustomService
