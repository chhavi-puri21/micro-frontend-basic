import { Card, Typography } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import useStyles from './style';

export const quotes = [
    {
        id: 1,
        message:
            "Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.",
        author: "Not by me"
    },
    {
        id: 2,
        message: "You have to dream before your dreams can come true.",
        author: "Not by me"
    },
    {
        id: 3,
        message: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "Not by me"
    },
]

export const BlogCard = () => {
    const navigate = useNavigate();
    const classes= useStyles()

    const handleCardClick = (id) => {
        navigate(`/blog-detail/${id}`)
    };
    return <div className={classes.root}>
        {
            quotes.map((item, key) => (
                <Card
                    key={item.id}
                    sx={{ maxWidth: 200, maxHeight: 350 }}
                    className={classes.padding}
                    onClick={() => handleCardClick(item.id)}
                >
                    <Typography>
                        {item.message}
                    </Typography>
                </Card>
            ))
        }
    </div>
}