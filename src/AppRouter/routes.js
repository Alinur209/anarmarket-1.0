import { About } from "../Pages/About/About"
import { Actions } from "../Pages/Actions/Actions"
import { Blog } from "../Pages/Blog/Blog"
import { Drinks } from "../Pages/Drinks/Drinks"
import { Fish } from "../Pages/Fish/Fish"
import { Fruits } from "../Pages/Fruits/Fruits"
import { Greens } from "../Pages/Greens/Greens"
import { Grocery } from "../Pages/Grocery/Grocery"
import { Home } from "../Pages/Home/Home"
import { Meat } from "../Pages/Meat/Meat"
import { Search } from "../Pages/Search/Search"
import { Vegetables } from "../Pages/Vegetables/Vegetables"


const routes = [
    {path: "/about", element: <About />},
    {path: "/", element: <Home />},
    {path: "/fruits", element: <Fruits />},
    {path: "/vegetables", element: <Vegetables />},
    {path: "/grocery", element: <Grocery />},
    {path: "/meat", element: <Meat />},
    {path: "/fish", element: <Fish />},
    {path: "/greens", element: <Greens />},
    {path: "/drinks", element: <Drinks />},
    {path: "/", element: <Home />},
    {path: "/search/", element: <Search />},
    // {path: "/actions", element: <Actions />},
    // {path: "/blog", element:<Blog />},
]

export default routes