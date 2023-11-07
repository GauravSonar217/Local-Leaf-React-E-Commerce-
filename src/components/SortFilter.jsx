import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext';

function SortFilter() {
    // let [sortType, setSortType] = useState("");
    const { sorting } = useProductContext();
    // let tempSortProduct = [...myData];

    // const sorting = (event) => {
    //     userValue = event.target.value;
    //     sortType === userValue;
    //     console.log(sortType);
    // };

    // useEffect(() => {
    //     const sortingProducts = (a, b) => {
    //         if (sortType === "lowToHigh") {
    //             return a.price - b.price;
    //         }
    //         if (sortType === "highToLow") {
    //             return b.price - a.price;
    //         }
    //         if (sortType === "aToz") {
    //             return a.name.localeCompare(b.name);
    //         }
    //     }
    // }, [sortType]);

    return (
        <React.Fragment>
           
        </React.Fragment>
    )
}

export default SortFilter