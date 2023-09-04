import Navbar from '@/components/Navbar'
import Head from 'next/head';
import React from 'react'
import Link from 'next/link';
import { BiArrowBack } from "react-icons/bi";
import Footer from '@/components/Footer';

export default function about({ societiesData }) {
  return (
  <>
    <Head>
    <title>CAPITAL JAIDAD | Abou US</title>

      <meta name="description" content="Capital Jaidad Helping You in Finding Top Societies In Islamabad For Investment" />
      <meta
        property="og:title"
        content="CAPITAL JAIDAD | Abou US"/>
      <meta property="og:description" content="Capital Jaidad Helping You in Finding Top Societies In Islamabad For Investment" />
      <meta property="og:image" content="https://loremflickr.com/g/320/240/house" />
    </Head>
    <div className="w-full py-3  h-full">
        <div className='w-max-[1280px]'>
        <div className=" sm:gap-11 py-[100px] mx-6 bg-white px-6 sm:px-[100px] ">   
        <h1 className=' text-5xl font-medium text-center my-5 text-orange-500'>ABOUT US</h1> 
        <p className='  text-lg'><span className='text-orange-500 font-bold text-xl '>Capital Jaidad</span> - Your Gateway to Islamabad's Premier Real Estate Market!
</p> 
<p className=' text-lg leading-11'>Are you searching for your dream home or investment opportunity in Islamabad, Pakistan? Look no further! At CAPITAL JAIDAD, we are your trusted partner in navigating the vibrant real estate market of the capital city.</p>

<p className='text-orange-500 font-bold text-xl  '>Why Choose Us?</p>
<p className=' text-lg leading-11'>Expertise: With years of experience in the real estate industry, we have a deep understanding of Islamabad's property landscape. We stay updated with the latest trends, ensuring you make informed decisions.

Personalized Service: Your needs are unique, and so is our approach. Our dedicated team of real estate professionals takes the time to understand your requirements, whether you're looking for a residential haven or a lucrative investment opportunity.

Exclusive Listings: We specialize in curating a selection of premium properties and top societies across Islamabad. Our listings include a variety of options, from luxurious villas to modern apartments, ensuring there's something for everyone.

Local Knowledge: Our local expertise sets us apart. We have an in-depth knowledge of Islamabad's neighborhoods, schools, amenities, and transportation options, allowing us to guide you towards the perfect community.</p>
</div>
           

        </div>

    </div>
    <Navbar societiesData={societiesData} />
    <Footer societiesData={societiesData} />
  </>
  )
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
  