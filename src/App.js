import React from 'react';
import NavBar from './components/navegacion/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CartContextProv from "./context/CartContext";
import Cart from './components/Cart';
import VideoDetail from './components/VideoDetail';
import Youtube from './Apis/Youtube';
import SearchBar from './components/navegacion/SearchBar';
import VideoList from './components/VideoList';
import "./App.css"

class App extends React.Component {
  state = { videos: [], selectedVideo: null}


componentDidMount() {
  this.onTermSubmit('lofi')
}

onTermSubmit = async (term) => {
  const response = await Youtube.get('/search', {
    params: {
      q: term,
    },
  })

  this.setState({
    videos: response.data.items,
    selectedVideo: response.data.items[0],
  })
}

onVideoSelect = (video) => {
  this.setState({ selectedVideo: video })
}

render() {
  return (
    <CartContextProv>
      <BrowserRouter>
          <div className='App'>
          <NavBar />
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className='row'>
              <VideoDetail video={this.state.selectedVideo} />
              </div> 
          <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
                <div>
                  <hr/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/*" element={<Navigate to="/" replace/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          </div>
          </div>  
      </BrowserRouter>
    </CartContextProv>
    );
  }
  }
  export default App

