import React from 'react';
import Banner from '../../Componets/Banner';
import Overview from '../../Componets/Overview';
import Faq from '../../Componets/Faq';
import PlacesSection from '../../Componets/PlacesSection';
import PackagesTab from '../../Componets/Tabs/PackagesTab';
import GuidesTab from '../../Componets/Tabs/GuidesTab';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import TouristStories from '../../Componets/TouristStories';


const Home = () => {
    return (
        <div>
<Banner></Banner>
<Overview></Overview>

  {/* Tourism and Travel Guide Section */}
<div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">
          Tourism and Travel Guide
        </h2>

        <Tabs>
          <TabList className="flex justify-center gap-6 border-b mb-6">
            <Tab className="btn btn-outline btn-success ">Our Packages</Tab>
            <Tab className="btn btn-outline btn-success">Meet Our Tour Guides</Tab>
          </TabList>

          <TabPanel>
            <PackagesTab />
          </TabPanel>
          <TabPanel>
            <GuidesTab />
          </TabPanel>
        </Tabs>
      </div>

<TouristStories></TouristStories>
<PlacesSection></PlacesSection>
<Faq></Faq>
        </div>
    );
};

export default Home;