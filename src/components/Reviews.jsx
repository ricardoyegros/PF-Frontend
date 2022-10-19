import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import userIcon from '../assets/images/userIcon.png'
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview, getReviews } from '../redux/actions/reviewsActions';
import { Button, Pagination, Rating } from '@mui/material';
import { ReviewForm } from './ReviewForm';
import { useNavigate } from 'react-router-dom';

export default function Reviews({ id }) {

    const navigate = useNavigate()

    const [state, setState] = React.useState({ open: false, close: false });

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch]);

    const reduxState = useSelector(state => state.reviewsReducer.reviews);

    
    

    const handleClick = (e) => {
        if (!localStorage.token) return navigate('/login');
        if (state.open) return setState({ open: false, close: false })
        return setState({ open: true, close: false });
    };

    if (state.close) {
        dispatch(getReviews(id));
    };

    if (reduxState?.content && reduxState.content.length === 0) {
        return (
            <>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <h3>REVIEWS</h3>
                  
                  <Button variant='outlined' onClick={handleClick}>Crear Review</Button>
                </Box>
                <Box justifyContent={'center'} alignItems="center" display={"grid"}>
                    {state.open ? <ReviewForm setState2={setState} productId={id} /> : null}
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box justifyContent={'center'} alignItems="center" display={"flex"} flexDirection={"column"}><h3>REVIEWS</h3>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        {
                            reduxState && reduxState.content.map(e =>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={userIcon} />
                                
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${e.user ? e.user.fullName : "null"}: ${e.detail}`}
                                        secondary={
                                            <React.Fragment>
                                                <Rating name="half-rating-read" defaultValue={e.stars} precision={0.5} readOnly />
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            )
                        }
                    </List>
                    <Box justifyContent={'center'} alignItems="center" display={"grid"} >
                        <Pagination count={1} size="small" />
                        <br />
                    </Box>
                    <Button onClick={handleClick}>Crear Review</Button>
                    <Box justifyContent={'center'} alignItems="center" display={"grid"}>
                        {state.open ? <ReviewForm setState2={setState} productId={id} /> : null}
                    </Box>
                </Box>
            </>
        );
    };
};
