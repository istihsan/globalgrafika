import { React } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Products from "./pages/product";
import ProductPageCategories from "./pages/components/product/productPageCategories/productPageCategories";
import TrackOrder from "./pages/trackOrder";
import ProductDetail from "./pages/components/product/productDetailPage/productDetail";
import Checkout from "./pages/components/cart/checkout";
import PrivateRoute from "./privateRoute";
import DashboardDetailProduct from "./pages/components/dashboard/dashboardDetailProduct";
import DashboardOrder from "./pages/dashboardOrder";
import DashboardProduct from "./pages/dashboardProduct";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard/product" element={<DashboardProduct />} />
          <Route path="/dashboard/order" element={<DashboardOrder />} />
          <Route
            path="/dashboard/detailproduct/:id"
            element={<DashboardDetailProduct />}
          />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path={`/products/:categories`}
            element={<ProductPageCategories />}
          />
          <Route
            exact
            path={`/products/:categories/detail/:id`}
            element={<ProductDetail />}
          />
          <Route exact path="/trackorder" element={<TrackOrder />} />
          <Route exact path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="NotFound" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
