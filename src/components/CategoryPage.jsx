import React, { useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext'

function CategoryPage() {
    let [sortType, setSorttype] = useState("Popularity");
    const { myData } = useProductContext();

    const { name } = useParams();
    let myCategory = name;

    const sorting = (event) => {
        let userValue = event.target.value;
        setSorttype(sortType = userValue);
    };

    const sortingProducts = (a, b) => {

        if (sortType === "Popularity") {
            return a;
        }
        if (sortType === "lowToHigh") {
            return a.price - b.price;
        }

        if (sortType === "highToLow") {
            return b.price - a.price;
        }

        if (sortType === "aToz") {
            return a.name.localeCompare(b.name);
        }
    };

    let categoryOneData = myData.filter((product) => product.category.name === myCategory);
    // console.log(categoryOneData);

    categoryOneData.sort(sortingProducts);

    return (
        <React.Fragment>
            <section className="categoryBoxSec" id='categoryProductSec'>
                <div className="container" id='categoryBoxSec'>
                    <div className="sectionHead">
                        <h2>{myCategory}</h2>
                        <div className="sortSelection">
                            <form action="#">
                                <label htmlFor="sort">Sort By :</label>
                                <select name="sort" id="sort" onClick={sorting}>
                                    <option value="Popularity">Popularity</option>
                                    <option value="lowToHigh">Price -- Low to High</option>
                                    <option value="highToLow">Price -- High to Low</option>
                                    <option value="aToz">Alphabetically A to Z</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="productBoxCont">
                        {categoryOneData.map((product, id) =>
                            <Card key={id} {...product} ></Card>
                        )}
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default CategoryPage