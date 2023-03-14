import React from 'react'
import { Navbar } from './compontents/NavBar/Navbar'
import { Search } from './compontents/SearchDiv/Search'
import { Job } from './compontents/JobDiv/Job'
import Value from './compontents/ValueDiv/Value'
import { Footer } from './compontents/FooterDiv/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  )
}

export default App
