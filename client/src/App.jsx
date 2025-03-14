import './app.css'
import Gallery from './components/Gallery'
import LeftBar from './components/LeftBar'
import TopBar from './components/TopBar'

const App = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  )
}

export default App