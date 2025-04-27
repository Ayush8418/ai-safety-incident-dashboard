import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div>
        home page
        <Link to="/dashboard"> dash </Link>
    </div>
  )
}

export default Home
