import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="general" />} />
          <Route exact path="general/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="general" />} />
          <Route exact path="business/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="business" />} />
          <Route exact path="entertainment/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="entertainment" />} />
          <Route exact path="health/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="health" />} />
          <Route exact path="science/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="science" />} />
          <Route exact path="sports/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="sports" />} />
          <Route exact path="technology/*" element={<News setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="technology" />} />
        </Routes>
      </Router>
      

    </div>
  )
}






