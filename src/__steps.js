/* BASIC ROUTER SETUP
1. npm i react-router-dom
2. create a router using createBrowserRouter 
    router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/orders',
                    element: <Orders></Orders>,
                }
            ],
        }
    ])
3. add RouterProvider and set router prop
    <div className="App">
      <RouterProvider router= {router}></RouterProvider>
    </div>
4. create a lot of components
5. create Main Layout with some common part and some/one changing part based on the route
    const Main = () => {
        return (
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        );
    };
6. set Main layout at the root of the route
        path: '/',
        element: <Main></Main>,
        children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
7. set children routes

8. set links on the header components
    const Header = () => {
    return (
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/orders'>Orders</Link>
            <Link to = '/about'>About</Link>
        </nav>
    );
*/