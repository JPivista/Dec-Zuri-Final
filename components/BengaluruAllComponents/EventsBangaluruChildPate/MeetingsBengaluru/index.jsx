import React from 'react'

import MeetingsBengaluruBanner from './MeetingsBengaluruBanner'
import MeetingBengaluruContent from './MeetingBengaluruContent'
import MeetingsBengaluruForm from './MeetingsBengaluruForm'
import SharedEventsBengaluruHeader from '../SharedEventsBengaluruHeader'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Events, Meetings & Conferences in Zuri Whitefield, Bengaluru";
const description = "Planning a corporate meeting in Whitefield? The Zuri is well equipped with the right amenities and facilities to make your business meetings a grand success.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/events/meetings/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedEventsBengaluruHeader />
      <MeetingsBengaluruBanner />
      <MeetingBengaluruContent />
      <MeetingsBengaluruForm />
      <Footer />
    </>
  )
}

export default index