import { createContext } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import { useReducer } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bookmark from './Component/Bookmark/Bookmark';

const InitialState = {
  bookmarkData: []
}

const Appreducer = (state, action) => {
  switch (action.type) {
    case "Add":
      let arr = [...state.bookmarkData, action.task]
      return ({
        bookmarkData: arr
      })
    default:
      break
  }

}

export const AppContext = createContext()

function App() {
  const [state, dispatch] = useReducer(Appreducer, InitialState)
  return (
    <>
      <AppContext.Provider value={{
        bookmark: state.bookmarkData,
        dispatch
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bookmark' element={<Bookmark/>}/>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
      {/* <Home/> */}
    </>
  );
}

export default App;
