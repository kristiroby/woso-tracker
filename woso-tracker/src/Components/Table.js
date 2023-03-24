import React, { useState, useEffect } from 'react';
import CombinedTable from './CombinedTable'
import WomensTable from './WomensTable'


// reusable table that can receive data to populate list

export default function Table(props) {
    return (
        <ol>
            {props.standings.map(({id, name, points}) => {
            return (
            <li key={id}>
                {name} &nbsp;
                {points}
            </li>
            )})}
        </ol>
    )
}
  

// wsl id = 44
// nwsl = 254
// msl = 253
// epl = 39