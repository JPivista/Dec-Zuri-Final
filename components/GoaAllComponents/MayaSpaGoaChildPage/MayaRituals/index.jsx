import React from 'react'

import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import MayaRitualsGoaBanner from './MayaRitualsGoaBanner'
import MayaRitualsGoaContent from './MayaRitualsGoaContent'
import MayaRitualsGoaSlider from './MayaRitualsGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Goa Resort With Massage & Body Care Rituals | Health & Wellness Resort in Goa - Zuri Whitesands";
const description = "Purify your body, mind and soul with a rejuvenating ????Body Massage in Goa. The Zuri luxury spa hotel offers signature treatments using authentic Indian herbs and oils.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/maya-spa/maya-rituals/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedMayaSpaGoaHeader />
      <MayaRitualsGoaBanner />
      <MayaRitualsGoaContent />
      <MayaRitualsGoaSlider />
      <Footer />
    </>
  )
}

export default index