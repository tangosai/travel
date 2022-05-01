import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import TopDestination from "../components/TopDestination";

export default function Home() {
  return (
    <Layout title="TRAVEL | Home ">
      <Slider />

      <TopDestination />
    </Layout>
  );
}
