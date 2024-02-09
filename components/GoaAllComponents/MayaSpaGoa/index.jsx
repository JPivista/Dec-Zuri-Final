import React from 'react'

import MayaSpaGoaHeader from './MayaSpaGoaHeader'
import MayaSpaGoaBanner from './MayaSpaGoaBanner'
import MayaSpaGoaContenet from './MayaSpaGoaContenet'
import MayaSpaGoaSlider from './MayaSpaGoaSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Luxury Spa Hotels in goa | Maya Spa in Zuri Whitesands";
const description = "Treat yourself to a best luxury spa hotels in goa - The Zuri Whitesands in Goa. Avail Ayurvedic, western and oriental therapies at Goa's five star beach resort.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/maya-spa/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />

      <MayaSpaGoaHeader />
      <MayaSpaGoaBanner />
      <MayaSpaGoaContenet />
      <MayaSpaGoaSlider />

      <Footer />
    </>
  )
}

export default index