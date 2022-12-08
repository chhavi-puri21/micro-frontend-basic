import React, { useState } from 'react'
import useStyles from './styles'
export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const classes = useStyles()
    return <div className={classes.counterCtn}>
        {
            counter
        }
        <button className={classes.btn} onClick={() => setCounter(counter + 1)}>
            Add
        </button>
    </div>
}