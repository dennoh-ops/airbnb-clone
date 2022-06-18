import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London."
          description="Enjoy the amazing sights of London with this stunning penthouse."
          price="$350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3Bedroom flat in Bournemouth."
          description="Superhost with a stunning view pf the beach-side in sunny Bournemouth."
          price="$130/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment."
          description="Superhost with great amenities and a fabulous shopping complex nearby."
          price="$70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWlyYm5ifGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          title="1 Bedroom cabin in Florida"
          description="Enjoy the cool and refreshing winds in this wood cabin with your family or friends"
          price="$140/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1619292585355-ab0e3fd509fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcmJuYnxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
          title="Penthouse in Queens"
          description="Superhost with a beautiful view of the city in this condo."
          price="$70/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1620332372374-f108c53d2e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5ifGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          title="2 Bedroom flat in Brooklyn"
          description="Comfortable private places, with room for friends or family."
          price="$120/night"
        />
      </div>
    </div>
  );
}

export default Home