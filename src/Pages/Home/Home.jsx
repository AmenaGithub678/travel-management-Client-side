import React from 'react';
import Banner from '../../Componets/Banner';
import Overview from '../../Componets/Overview';
import Faq from '../../Componets/Faq';
import PlacesSection from '../../Componets/PlacesSection';
import PackagesTab from '../../Componets/Tabs/PackagesTab';
import GuidesTab from '../../Componets/Tabs/GuidesTab';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


const Home = () => {
    return (
        <div>
<Banner></Banner>
<Overview></Overview>

  {/* Tourism and Travel Guide Section */}
    <div className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-center mb-6">
        Tourism and Travel Guide
    </h2>
    <Tabs>
    <TabList className="text-center mb-4">
    <Tab>Our Packages</Tab>
    <Tab>Meet Our Tour Guides</Tab>
    </TabList>

    <TabPanel>
    <PackagesTab />
      </TabPanel>
    <TabPanel>
    <GuidesTab />
    </TabPanel>
   </Tabs>
</div>

<PlacesSection></PlacesSection>
<Faq></Faq>
        </div>
    );
};

export default Home;