import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Header} from "./Components/header/Header";
import {Information} from "./pages/information/Information";
import {Comparatif} from "./pages/comparatif/Comparatif";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: "<p>error</p>",
        children:[
            {
                path: "/",
                element: <Information title="information general du produit"/>
            },
            {
                path: "/comparatif",
                element: <Comparatif title="information general du produit"/>
            }
        ]
    }
])

function Root(){
    return (
        <div className="root">
            <Header/>
            <section className="rootSection">
                <Outlet/>
            </section>
            <footer>
                footer
            </footer>
        </div>
    )
}

function App() {
    return <RouterProvider router={router} />
}


export default App;
