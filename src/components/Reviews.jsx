import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import userIcon from '../assets/images/userIcon.png'
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../redux/actions/reviewsActions';
import { Button, Pagination, Rating } from '@mui/material';


export default function Reviews({ id }) {

    const [state, setState] = React.useState(false);

    const dispatch = useDispatch();

    const reduxState = useSelector(state => state.reviewsReducer.reviews);

    const handleClick = (e) => {
        if (state) return setState(false)
        return setState(true)
    }

    if (typeof reduxState === "boolean") dispatch(getReviews(id));

    if (reduxState?.content && reduxState.content.length === 0) {
        return (
            <>
                <Box justifyContent={'center'} alignItems="center" display={"grid"}>
                    <h3>REVIEWS</h3>
                    <h4>Se el primero en comentar!<Button onClick={handleClick}
                    >Crear Review</Button></h4>
                </Box>
                <Box justifyContent={'center'} alignItems="center" display={"grid"}>
                    {state ? <h3>Aca va a ir el componente formulario</h3> : null}
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box justifyContent={'center'} alignItems="center" display={"grid"}><h3>REVIEWS</h3>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {
                            reduxState && reduxState.content.map(e =>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={userIcon} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${e.user.fullName}: ${e.detail}`}
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
                    <Button onClick={handleClick}
                    >Crear Review</Button>
                    {state ? <h3>Aca va a ir el componente formulario</h3> : null}
                    <Pagination count={10} size="small" />
                </Box>
            </>
        );
    };
};
