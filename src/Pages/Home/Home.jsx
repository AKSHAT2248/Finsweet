import React from 'react'
import MainBanner from './MainBanner';
import FeaturedPost from './FeaturedPost';
import MiniAboutUs from './MiniAboutUs';
import Categories from './Caregories';
import ListofAuthors from './ListofAuthors';
import MiniBlog from './MiniBlog';
import Collabration from './Collabration';

function Home() {
    return (
        <div className=' flex flex-col gap-12 w-full'>
            <MainBanner />
            <FeaturedPost />
            <MiniAboutUs />

            <span className=' mx-auto font-semibold text-2xl'>Choose a Category</span>
            <Categories />
            <MiniBlog />

            <span className=' mx-auto font-semibold text-2xl'>List of Authors</span>
            <ListofAuthors />
            <Collabration />
            <MiniBlog />

            <span></span>
        </div>
    )
}

export default Home;