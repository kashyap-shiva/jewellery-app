import About from "../components/About/About";
import Home from "../components/Home/Home";

const routers = [
    {
        path: '/',
        Component: <Home />
    },
    {
        path: '/about',
        Component: <About />
    }
]

export { routers };