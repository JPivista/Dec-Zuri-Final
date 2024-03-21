import React from 'react'

import EventsHeaderKumarkom from './EventsHeaderKumarkom'
import EventsBannerKumarkom from './EventsBannerKumarkom'
import EventsSliderKumarkom from './EventsSliderKumarkom'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Events & Function Spaces in Zuri Kumarakom Kerala, India	";
const description = "Zuri Kumarakom, Kerala Resort & Spa is one of the most exquisite event venues in Kumarakom. Enjoy the joy of hosting at a sprawling hall that fits a large crowd with ease.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/events/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <EventsHeaderKumarkom />
      <EventsBannerKumarkom />
      <EventsSliderKumarkom />
      <Footer />
    </>
  )
}

export default index