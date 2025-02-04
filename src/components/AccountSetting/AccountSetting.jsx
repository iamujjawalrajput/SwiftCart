import React from React;
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AccountSetting = () => {

    return (
        <>
            <div>
                <TextField

                    id="filled-error"
                    label="first name"
                    defaultValue="Enter you Name fname"
                    variant="filled"
                />
                <TextField

                    id="filled-error-helper-text"
                    label="last name"
                    defaultValue="He"
                    helperText="Enter You Second  name"
                    variant="filled"

                />

                <TextField

                    id="filled-error-helper-text"
                    label="Address"
                    defaultValue="He"
                    helperText="Address"
                    variant="filled"

                />

                
            </div>

        </>
    )

}

export default AccountSetting;