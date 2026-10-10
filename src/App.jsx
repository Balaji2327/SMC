import { RouterProvider } from './context/RouterContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PageRouter from './components/PageRouter.jsx'

function App() {
  return (
    <RouterProvider>
      <div className="page-wrapper">
        <Header />
        <main className="main-content">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  )
}

export default App
