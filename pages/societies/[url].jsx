import PostDisplay from '@/components/PostDisplay';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const SocietyDetails = ({ currentSociety, societiesData }) => {
  return (
    <>
      <Head>
      <title>{currentSociety.title + (currentSociety.city ? ` | ${currentSociety.city} ` : "") + " | Society | CAPITAL JAIDAD"}</title>

        <meta name="description" content={currentSociety.seoDetails} />
        <meta
          property="og:title"
          content={currentSociety.title + (currentSociety.city ? ` | ${currentSociety.city} ` : "") + " | Society | CAPITAL JAIDAD"}
        />
        <meta property="og:description" content={currentSociety.seoDetails} />
        <meta property="og:image" content={currentSociety.coverPic} />
      </Head>
      <Navbar societiesData={societiesData} />
      <PostDisplay
        key={currentSociety.id} // Assuming each item has a unique identifier like "id"
        title={currentSociety.title}
        date={currentSociety.date}
        introduction={currentSociety.introduction}
        developedBy={currentSociety.developedBy}
        devpic={currentSociety.devpic}
        nocDetails={currentSociety.nocDetails}
        nocpic={currentSociety.nocpic}
        locationDetails={currentSociety.locationDetails}
        mapPic={currentSociety.mapPic}
        coverPic={currentSociety.coverPic}
      />
      <Footer societiesData={societiesData} />
      <WhatsAppConnect/>
    </>
  );
};

export async function getServerSideProps(context) {
  const { url } = context.query;

  // Fetch data from your API based on the provided URL
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const apiUrl = `${protocol}://${host}/api/societies`;
  
  const response = await fetch(apiUrl);
  const data = await response.json();

  const currentSociety = data.find((item) => item.url === url);
const societiesData = data;
  if (!currentSociety) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      currentSociety,
      societiesData,
    },
  };
}

export default SocietyDetails;
