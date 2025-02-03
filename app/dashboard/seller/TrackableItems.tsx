import React from 'react'

import { ItemStatus } from "../../../types/dashboardTypes"

const TrackableItems = async () => {
    const res = await fetch("'https://dummyjson.com/products'");
    const Items: ItemStatus[] = await res.json();
    return (
        <>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <td></td>
                <td></td>
            </tbody>
        </>
    )
}

export default TrackableItems