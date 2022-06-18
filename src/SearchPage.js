import React from 'react'
import './SearchPage.css'
import {Button} from "@mui/material"
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays. 26 May to 30 May. 2 guests</p>
        <h1>Stays Nearby.</h1>

        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Types of place</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest. 1.5 shared bathroom. WiFi. Kitchen. Free Parking. Washing Machine."
        star={4.73}
        price="$40/Night"
        total="$120/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1542213598-8fbf6282334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW4lMjBpbiUyMHdvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
        location="2 Bedroom cabin in Naivasha."
        title="Stay at this spacious Edwardian House"
        description="2 guest. 1.5 shared bathroom. WiFi. Kitchen. Washing Machine."
        star={4.5}
        price="$50/Night"
        total="$150/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
        location=" Studio apartment in Nairobi city."
        title="Stay at this spacious Modern studio"
        description="1 guest. 1.5 shared bathroom. WiFi. Kitchen. Washing Machine."
        star={4.2}
        price="$40/Night"
        total="$120/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
        location="Family home in Florida ."
        title="Superhost with your family"
        description="4 guest. 2.5 shared bathroom. WiFi. Kitchen. Free parking. Washing Machine."
        star={5}
        price="$40/Night"
        total="$120/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
        location=" Studio apartment in Nairobi city."
        title="Stay at this spacious Modern studio"
        description="1 guest. 1.5 shared bathroom. WiFi. Kitchen. Washing Machine."
        star={4.2}
        price="$40/Night"
        total="$120/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
        location="Private room in tokyo."
        title="Relax and feel the tokyo-love."
        description="1 guest. 1.5 shared bathroom. WiFi. Kitchen. Washing Machine."
        star={4.81}
        price="$40/Night"
        total="$120/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1628923139231-55ad0aa6bac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhYmluJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
        location="private room in Naivasha."
        title="Perfect getaway"
        description="1 guest. 2.5 shared bathroom. WiFi. Kitchen. Washing Machine."
        star={5}
        price="$18/Night"
        total="$178/Total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1631756964162-25c8c07579b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhYmluJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
        location=" Old cabin at the foot of Mt.Kenya."
        title="Stay at this Old cabin and enjoy the cool breeze."
        description="2 guest. 2.5 shared bathroom. WiFi. Kitchen. Washing Machine."
        star={4}
        price="$60/Night"
        total="$180/Total"
      />
    </div>
  );
}

export default SearchPage