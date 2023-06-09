import { createHashRouter, RouterProvider } from 'react-router-dom'
import RootLayout, {
  handler as rootHandler,
} from './components/Pages/RootLayout'
import Products from './components/Pages/Products'
import Cart from './components/Pages/Cart'
import Error from './components/Pages/Error'
import { Provider } from 'react-redux'
import store, { dispatch } from './store'

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    loader: () => rootHandler(dispatch),
    children: [
      {
        index: true,
        element: <Products />,
      },
      { path: 'cart', element: <Cart /> },
    ],
  },
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
