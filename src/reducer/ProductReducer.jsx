const ProductReducer = (state, action) => {

    // if(action.type === "SET_LOADING"){
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }
    // }
    // if(action.type === "API_ERROR"){
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError: true,
    //     }
    // }

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "SET_API_DATA":
            const bestSellerProducts = action.payload.filter((product) => {
                return product.bestSeller === true;
            })
            return {
                ...state,
                isLoading: false,
                bestSellers: bestSellerProducts,
            }

        case "SET_ALL_API_DATA":
            const allProductData = action.payload.map((product) => {
                return product
            })
            return {
                ...state,
                myData: allProductData,
            }

        case "GET_SORT_VALUE":
            return {
                ...state,
                sortType: action.payload,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload,
            };

        case "UPDATE_FILTERS_VALUE":
            const input = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: input,
                },
            };

        case "FILTER_PRODUCTS":
            let { myData } = state;
            let tempFilterProduct = [...myData];

            const { text } = state.filters;

            let tempFilterData = tempFilterProduct.filter((product) => {
                // {
                //     (product.name.toLowerCase().startsWith(text)) ? product : <p>No Product Found</p>;
                // }
                if (product.name.toLowerCase().startsWith(text)) {
                    return product;
                } else {
                    <p>No Product Found</p>
                }
            })

            return {
                ...state,
                filterProduct: tempFilterData,
            };

        default:
            return state;
    };

};

export default ProductReducer;