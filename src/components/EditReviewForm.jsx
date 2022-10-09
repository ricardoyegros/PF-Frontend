import { Button, List, ListItem, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateReview } from '../redux/actions/reviewsActions';

export const EditReviewForm = ({ setOpen }) => {

    const dispatch = useDispatch()

    const arr = [1, 2, 3, 4, 5];

    const aux = (arr, id) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].user.id == id) return arr[i].id;
        };
        return false;
    };

    const reduxState = useSelector(state => state.reviewsReducer.reviews.content);

    const [state, setState] = useState({ id: aux(reduxState, localStorage.id) });

    const handleTextInput = (e) => {
        setState({
            ...state,
            detail: e.target.value
        });
    };

    const handleSelect = (e) => {
        setState({
            ...state,
            stars: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateReview(state));
        setState({ id: aux(reduxState, localStorage.id), detail: null, stars: null })
        setOpen(false);
    };

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>

                    <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{
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
                            value={state.stars}
                            onChange={handleSelect}
                        >
                            {arr.map((e) => (
                                <MenuItem key={e} value={e}>
                                    {e}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField onChange={handleTextInput} id="standard-basic" label="Detalles" multiline rows={4} />

                        <Button type='submit'>Submit</Button>
                    </form>
                </ListItem>
            </List>
        </>
    )
}
