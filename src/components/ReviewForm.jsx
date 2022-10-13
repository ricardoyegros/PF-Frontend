import { Button, List, ListItem, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, postReview } from '../redux/actions/reviewsActions';
import  { EditReviewForm } from './EditReviewForm'

export const ReviewForm = ({ productId, setState2 }) => {

    const dispatch = useDispatch();

    const arr = [1, 2, 3, 4, 5];

    const [state, setState] = useState({ userId: localStorage.id, productId });

    const [open, setOpen] = useState({ open: false, close: false });

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
        setState2({open:false, close: true});
    };

    const handleOpen = (e) => {
        if (!open.open) return setOpen({ ...open, open: true });
        return setOpen({ ...open, open: false });
    }

    const aux = (arr, id) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].user.id == id) return true
        }
        return false;
    };

    if (aux(reduxState.content, localStorage.id)) {
        return (
            <>
                <h4>Ya hiciste un comentario!</h4>
                <h4>Desea editarlo? <Button onClick={handleOpen}>Editar comentario</Button></h4>
                {open.open ? <EditReviewForm setState2={setState2} /> : null}
            </>
        )
    } else {
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

}



