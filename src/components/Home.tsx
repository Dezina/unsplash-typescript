import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store"
import MasonryImageList from "./MasonaryImageList";
import Searchbar from "./Searchbar";
import bghome from '../images/bg-home.png';
import getProductsAction from "../redux/actions/getProducts.action";
import { fetchImages } from "../redux/slices/photoSlice";

const Home = () => {


  /////////////////////////////////////////////////////////// getting the global state & redux
  const dispatch = useAppDispatch()

  const {products} = useSelector((state:any) => state.allproducts)

  const [productoptions, setProductoptions] = useState<any | []>([]);

  useEffect(() => {

    dispatch(fetchImages())

    dispatch(getProductsAction(""))
  

}, [dispatch])
////////////////////////////////////////////////////////////////


const handleSearch = (e:any):void =>{
  if (e.code === "Enter") {
   // console.log("handleSearch", e.target.value)
    dispatch(getProductsAction(e.target.value))
  }
}

console.log("products 11", products?.data)

    return (
        <>
        <div className="container-fluid p-5 text-center" 
        style={{backgroundImage: `url(${bghome})`, color: "#fff", width: "auto", height: "500px"}}>
           <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
            <div className="row">
            <div className="col-6">
            <div className="mt-5 mb-3">
            <h1 className="text-center fw-bolder">Online shopping</h1>
            </div>
            </div>
            </div>
            <div className="row">
           
            <div className="col-12">
            <h5 className="text-center mb-4" style={{maxWidth: "370px", overflowWrap: "break-word"}}>
            The internet’s source for shopping.
            Powered by creators everywhere.
            </h5>
            <div className="col-6"></div>
            <div className="col-6">
            <Searchbar 
            handleSearch={handleSearch}
            />
            </div>
           
            </div>
            </div>
           
            </div>
            <div className="col-2"> </div>
           </div>
            
        </div>

        <MasonryImageList 
        details={products?.data}
        />
       
        </>
    )
}
export default Home;