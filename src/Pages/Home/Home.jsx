import React from 'react';
import Banner from '../../Componets/Banner';
import Overview from '../../Componets/Overview';
import Faq from '../../Componets/Faq';
import PlacesSection from '../../Componets/PlacesSection';


const Home = () => {
    return (
        <div>
<Banner></Banner>
<Overview></Overview>
<PlacesSection></PlacesSection>
<Faq></Faq>
        </div>
    );
};

export default Home;