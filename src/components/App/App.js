import './App.scss';
import Header from '../../components/Header/Header';
import MainSection from '../MainSection/MainSection';
import AdvantageSection from '../AdvantageSection/AdvantageSection';
import ProductSection from '../ProductSection/ProductSection';
import RegisterModal from '../RegisterModal/RegisterModal';
import GallerySection from '../GallerySection/GallerySection';
import PartnersSection from '../PartnersSection/PartnersSection';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import ContactFormSection from '../ContactFormSection/ContactFormSection';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header RegisterModal={RegisterModal}/>
      <MainSection/>
      <AdvantageSection/>
      <ProductSection RegisterModal={RegisterModal}/>
      <GallerySection/>
      <PartnersSection/>
      <ReviewsSection/>
      <ContactFormSection/>
      <Footer/>
    </div>
  )
}

export default App;
