import { Card, Typography } from '@mui/material'
import React from 'react'
import { quotes } from './BlogCard'
import { useParams } from 'react-router-dom'
import { Header } from './Header'
import useStyles from './style'


export const BlogDetail = () => {
    const params = useParams();
    const classes= useStyles()
    const data = quotes.filter(item => item.id == params.id)[0]
    return <div className="container" style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Typography variant="subtitle2"> By: {data.author} </Typography>
        <Typography variant="subtitle1">{data.message}</Typography>
    </div>
}