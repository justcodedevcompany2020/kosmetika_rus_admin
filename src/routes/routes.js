import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout"
import { UserList } from "../pages/UserList"
import { OrderList } from "../pages/OrderList"
import { ReviewsPage } from "../pages/ReviewsPage"
import { Product } from "../pages/Products"
import { UserScreen } from "../pages/userScreen"
import { LoginScreen } from "../pages/LoginScreen"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Main } from "../pages/Main"
import { AddProducts } from "../pages/AddProducts"
import { SinglProduct } from "../pages/SinglProduct"
import { UpdateProducts } from "../pages/UpdateProduct"

export const Router = () => {
    let token = localStorage.getItem('token')
    const { Auth_reducer } = useSelector((st) => st)
    useEffect(() => {
        token = Auth_reducer.token
    }, [Auth_reducer.token])
    return (
        <BrowserRouter>
            <Routes>
                {
                    token ?
                        <Route path="/" element={<Layout />} >
                            <Route path="/orderlist" element={<OrderList />} />
                            <Route path="/userlist" element={<UserList />} />
                            <Route path="/ReviewsPage" element={<ReviewsPage />} />
                            <Route path="/Product" element={<Product />} />
                            <Route path="/UserScreen/:id" element={<UserScreen />} />
                            <Route path="/Main" element={<Main />} />
                            <Route path="/AddProducts" element={<AddProducts />} />
                            <Route path="/SinglProduct/:id" element={<SinglProduct />} />
                            <Route path="/UpdateProduct/:id" element={<UpdateProducts />} />

                        </Route>
                        :
                        <Route path="/" element={<LoginScreen />} />
                }
            </Routes>
        </BrowserRouter>
    )
}
// UpdateProduct