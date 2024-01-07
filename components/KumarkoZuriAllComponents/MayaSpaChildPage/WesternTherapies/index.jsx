import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import WesternTherapiesBanner from './WesternTherapiesBanner'
import SharedHeaderMayaSpaKumarkom from '../SharedHeaderMayaSpaKumarkom'
import WesternTherapiesContent from './WesternTherapiesContent'
import WesternTherapiesTab from './WesternTherapiesTab'

const index = () => {
    return (

        <>
            <Header />
            <SharedHeaderMayaSpaKumarkom />
            <WesternTherapiesBanner />
            <WesternTherapiesContent />
            <WesternTherapiesTab />
            <Footer />
        </>

    )
}

export default index