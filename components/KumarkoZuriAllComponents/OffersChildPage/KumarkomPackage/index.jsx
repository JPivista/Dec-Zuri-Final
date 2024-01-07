import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import KumarkomPackageBanner from './KumarkomPackageBanner'
import KumarkomPackageContent from './KumarkomPackageContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
    <Header />
        <KumarkomPackageBanner />
        <KumarkomPackageContent />
    <Footer />
    </>
  )
}

export default index