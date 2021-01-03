import React, { useState } from "react"
import IsMobileHook from '../components/hooks/IsMobileHook'
import MobileNavigation from '../components/molecules/MobileNavigation/MobileNavigation';
import DesktopNavigation from '../components/molecules/DesktopNavigation/DesktopNavigation';
import Header from '../components/molecules/Header/Header';
import TrustedSection from "../components/molecules/TrustedSection/TrustedSection";
import AppFeature from '../components/organisms/AppFeature/AppFeature';
import AppBenefits from '../components/organisms/AppBenefits/AppBenefits';
import CodeSection from '../components/organisms/CodeSection/CodeSection';
import WhyUsSection from '../components/organisms/WhyUsSection/WhyUsSection';
import UltimateFeatures from '../components/organisms/UltimateFeatures/UltimateFeatures';
import PriceList from '../components/organisms/PriceList/PriceList';
import ClientsSection from '../components/organisms/ClientsSection/ClientsSection';
import DownloadOurApp from '../components/organisms/DownloadOurApp/DownloadOurApp';
import Footer from '../components/organisms/Footer/Footer';
import GlobalStyle from '../assets/styles/globalStyles';
const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1076)
  return (
    <>
      <GlobalStyle />
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <Header />
      <TrustedSection />
      <AppFeature />
      <AppBenefits />
      <CodeSection />
      <WhyUsSection />
      <UltimateFeatures />
      <PriceList />
      <ClientsSection />
      <DownloadOurApp />
      <Footer />
    </>
  )
}

export default IndexPage
