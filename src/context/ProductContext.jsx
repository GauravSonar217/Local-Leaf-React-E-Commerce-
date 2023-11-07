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

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);



    // to get category data
    const getUniqueData = (data, property) => {
        let newVal = data.map((curEle) => {
            return curEle[property];
        });
        let uniqueCategory = {};
        for (let obj of newVal) {
            const key = obj.name + obj.image;
            if (!uniqueCategory[key]) {
                uniqueCategory[key] = obj;
            }
        };
        let categoryInfo = Object.values(uniqueCategory);
        return categoryInfo;
    };



    // to get single product details
    const getSingleProduct = (id) => {
       let singleProductData = products[id];
        return dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData });
    };
    useEffect(() => { 
        //  dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData });

        // window.location.reload(true);
        // console.log(id)       

    }, [state.singleProduct])



    // to sort the products 
    const updateFilterValue = (event) => {
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: value })
    };
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
    }, [state.filters]);



    useEffect(() => {
        dispatch({ type: "SET_LOADING" });

        // to get details of all the products
        try {
            let myProducts = products;
            dispatch({ type: "SET_ALL_API_DATA", payload: myProducts });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }



        //to get data of bestseller products
        try {
            let myBestSellers = products;
            dispatch({ type: "SET_API_DATA", payload: myBestSellers });
            // console.log(myBestSellers);
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }        
    }, []);

    return <AppContext.Provider value={{ ...state, updateFilterValue, getSingleProduct, getUniqueData }} >
        {children}
    </AppContext.Provider>
};

// #custom hook
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };