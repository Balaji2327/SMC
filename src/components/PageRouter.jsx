import { useRouter } from '../context/RouterContext.jsx'
import HomeScreen from '../pages/HomeScreen.jsx'
import About from '../pages/about.jsx'
import Committee from '../pages/Committee.jsx'
import Events from '../pages/Events.jsx'
import Post from '../pages/Post.jsx'
import News from '../pages/News.jsx'
import ScopeMembers from '../pages/ScopeMembers.jsx'
import Gallery from '../pages/Gallery.jsx'
import ContactUs from '../pages/ContactUs.jsx'

function PageRouter() {
  const { currentPath } = useRouter()

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />
      case '/committee':
        return <Committee />
      case '/events':
        return <Events />
      case '/post':
        return <Post />
      case '/news':
        return <News />
      case '/scope-members':
        return <ScopeMembers />
      case '/gallery':
        return <Gallery />
      case '/contact-us':
        return <ContactUs />
      default:
        return <HomeScreen />
    }
  }

  return renderCurrentPage()
}

export default PageRouter
