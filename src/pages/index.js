import React, { useState } from "react"
import IsMobileHook from '../components/hooks/IsMobileHook'
import MobileNavigation from '../components/molecules/MobileNavigation/MobileNavigation';
import DesktopNavigation from '../components/molecules/DesktopNavigation/DesktopNavigation';
import Header from '../components/molecules/Header/Header';
import TrustedSection from "../components/molecules/TrustedSection/TrustedSection";
import AppFeature from '../components/organisms/AppFeature/AppFeature';
import AppBenefits from '../components/organisms/AppBenefits/AppBenefits';

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1076)
  return (
    <>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <Header />
      <TrustedSection />
      <AppFeature />
      <AppBenefits />
    </>
  )
}

export default IndexPage
