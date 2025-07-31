import React from 'react'
import Header from './Header'
import Content from './Content'
import TrackList from './TrackList'
import GrandeitStore from './GrandeitStore'
import LicensesPricing from './LicensesPricing'
import Footer from './Footer'
import FreeDownloads from './FreeDownloads'

const Home = () => {
  return (
    <>
    <div>
      <Header />
      <Content />
      <TrackList />
      <GrandeitStore />
      <LicensesPricing />
      <Footer />
    </div>  
    </>
  )
}

export default Home