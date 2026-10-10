import Hero from '../sections/Hero'
import Categories from '../sections/Categories'
import About from '../sections/About'
import FeaturedProducts from '../sections/FeaturedProducts'
import Collection from '../sections/Collection'
import WhyChooseUs from '../sections/WhyChooseUs'
import Testimonials from '../sections/Testimonials'
import InstagramGallery from '../sections/InstagramGallery'
import Contact from '../sections/Contact'
import CTA from '../sections/CTA'

export default function Home() {
  return (
    <div className="bg-white text-stone-900">
      <main>
        <Hero />
        <Categories />
        <About />
        <FeaturedProducts />
        <Collection />
        <WhyChooseUs />
        <Testimonials />
        <InstagramGallery />
        <Contact />
        <CTA />
      </main>
    </div>
  )
}
