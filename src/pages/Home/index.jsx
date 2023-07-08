import About from './About';
import Hero from './Hero';
import Layout from '../../components/Layout';
import Specials from './Specials';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </Layout>
  );
};

export default Home;
