import { Button, List, ListItem, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, postReview } from '../redux/actions/reviewsActions';

export const ReviewForm = ({ productId }) => {
    const dispatch = useDispatch();

    const arr = [1, 2, 3, 4, 5];

    const [state, setState] = useState({ userId: localStorage.id, productId });

    const reduxState = useSelector(state => state.reviewsReducer.reviews);

    const handleSelect = (e) => {
        setState({
            ...state,
            stars: e.target.value
        });
    };

    const handleTextInput = (e) => {
        setState({
            ...state,
            detail: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postReview({ ...state }));
        dispatch(getReviews({ ...productId }));
        setState({ ...state, userId: localStorage.id, productId, detail: null, stars: null });
    };


    if (state.detail === null) dispatch(getReviews(productId));


    // if ()

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
                                variant="outlined"
                                fullWidth
                                required
                                name="rating"
                                value={state.rating}
                                onChange={handleSelect}
                            >
                                {arr.map((e) => (
                                    <MenuItem key={e} value={e}>
                                        {e}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField onChange={handleTextInput} id="standard-basic" label="Detalles" multiline rows={4} />

                            <Button type='submit' >Submit</Button>
                        </form>
                    </ListItem>
                </List>
            </>
        )
}



