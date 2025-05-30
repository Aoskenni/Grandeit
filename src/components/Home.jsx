import React from 'react'
import Header from './Header'
import Content from './Content'
import TrackList from './TrackList'
import GrandeitStore from './GrandeitStore'
import LicensesPricing from './LicensesPricing'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <TrackList />
      <GrandeitStore />
      <LicensesPricing />
      <Footer />
    </>
  )
}

export default Home