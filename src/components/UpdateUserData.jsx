import { Button, TextField } from '@mui/material'
import React from 'react'

export const UpdateUserData = () => {
    return (
        <>
            <form noValidate autoComplete="off" style={{
                justifyContent: "center", alignItems:
                    "center", display: "grid"
            }}>
                <TextField
                    select
                    label="RATING"
                    placeholder="Selecciona un Rating..."
                    variant="outlined" u
                    fullWidth
                    required
                    name="rating"
                >
                </TextField>
                <TextField id="standard-basic" label="Detalles" multiline rows={4} />

                <Button type='submit' >Submit</Button>
            </form>
        </>
    )
}
