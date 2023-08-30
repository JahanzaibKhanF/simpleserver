import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import TopSocieties from "@/components/TopSocieties";
import Heading from "@/components/Heading";
import Welcome from "@/components/Welcome";
import ContactUsSection from "@/components/ContactUsSection";
import AllSocieties from "@/components/AllSocieties";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUsSectionBig from "@/components/ContactUsSectionBig";
import Footer from "@/components/Footer";
import Head from "next/head";
import WhatsAppConnect from "@/components/WhatsAppConnect";

export default function Home({ societiesData }) {
 
  return (
    <>

<Head>
      <title>CAPITAL JAIDAD | Find Properties In Islamabad</title>

        <meta name="description" content="Capital Jaidad Finds Properties For You In Islamabad" />
        <meta
          property="og:title"
          content="CAPITAL JAIDAD | Find Properties In Islamabad"/>
        <meta property="og:description" content="Capital Jaidad Finds Properties For You In Islamabad" />
        <meta property="og:image" content="https://loremflickr.com/g/320/240/city" />
      </Head>
      
      <div className="w-full">
        <Navbar societiesData={societiesData} />
        <Heading />
        <TopSocieties />
        <Welcome />
        <ContactUsSection />
        <AllSocieties />
        <WhyChooseUs />
        <div  id="contactus"><ContactUsSectionBig /></div>
        <Footer societiesData={societiesData} />
      </div>
      <WhatsAppConnect/>
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from your API based on the provided URL
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const apiUrl = `${protocol}://${host}/api/societies`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const societiesData = data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      societiesData,
    },
  };
}
