import React from 'react'
import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import HolisticGoaBanner from './HolisticGoaBanner'
import HolisticContent from './HolisticContent'
import HolisticSlider from './HolisticSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Holistic Spa Treatments & Therapies in Goa - Zuri Hotels & Resorts";
const description = "Refresh, rejuvenate and re-energize with Maya Spa treatments in Goa. Offering Ayurvedic and western style massages and treatments, the Maya Spa will help you unwind and relax.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/maya-spa/holistic/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedMayaSpaGoaHeader />
      <HolisticGoaBanner />
      <HolisticContent />
      <HolisticSlider />
      <Footer />
    </>
  )
}

export default index