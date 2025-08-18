import React from 'react';
import Banner from '../../Componets/Banner';
import Overview from '../../Componets/Overview';
import Faq from '../../Componets/Faq';
import PlacesSection from '../../Componets/PlacesSection';
import PackagesTab from '../../Componets/Tabs/PackagesTab';
import GuidesTab from '../../Componets/Tabs/GuidesTab';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import TouristStories from '../../Componets/TouristStories';
import HowItWorks from '../../Componets/HowItWorks';
import WhyChooseUs from '../../Componets/WhyChooseUs';


const Home = () => {
    return (
        <div className='w-full mx-auto'>
<Banner></Banner>
<Overview ></Overview>
<HowItWorks></HowItWorks>
  {/* Tourism and Travel Guide Section */}
<div className=" mx-auto py-12 bg-accent">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">
          Tourism and Travel Guide
        </h2>

        <Tabs>
          <TabList className="flex justify-center gap-6 border-b mb-6">
            <Tab className="btn btn-outline btn-primary ">Our Packages</Tab>
            <Tab className="btn btn-outline btn-secondary">Meet Our Tour Guides</Tab>
          </TabList>

          <TabPanel>
            <PackagesTab />
          </TabPanel>
          <TabPanel>
            <GuidesTab />
          </TabPanel>
        </Tabs>
      </div>

<TouristStories className="bg-accent"></TouristStories>
<PlacesSection className="bg-accent"></PlacesSection>
<WhyChooseUs></WhyChooseUs>
<Faq></Faq>
        </div>
    );
};

export default Home;