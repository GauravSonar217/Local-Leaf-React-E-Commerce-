import { createContext, useContext, useEffect, useReducer } from "react";
import products from "../data/product.json";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const initialState = {
    filterProduct: [],
    isError: false,
    myData: [],
    bestSellers: [],
    singleProduct: {},
    filters: {
        text: "",
    },
};
console.log(initialState.singleProduct);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getSingleProduct = (id) => {
        let singleProductData = products[id];
        return dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData });
    };


    useEffect(() => {


    }, [state.singleProduct])

    //  update the filter values
    const updateFilterValue = (event) => {
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: value })
    };

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });

    }, [state.filters])


    useEffect(() => {
        dispatch({ type: "SET_LOADING" });
        try {
            let myBestSellers = products;
            dispatch({ type: "SET_API_DATA", payload: myBestSellers });
            // console.log(myBestSellers);
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
        try {
            let myProducts = products;
            dispatch({ type: "SET_ALL_API_DATA", payload: myProducts });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }, []);

    return <AppContext.Provider value={{ ...state, updateFilterValue, getSingleProduct }} >
        {children}
    </AppContext.Provider>
};

// #custom hook
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };