import React, {useState} from 'react';

import UpcomingReleaseList from "../components/UpcomingReleaseList";

const UpcomingReleaseBox = () => {
    const initialState = [
        {
            id: 1,
            name: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            name: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id: 3,
            name: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
            id: 4,
            name: "The Lego Movie 2: The Second Part", 
            url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
            id: 5,
            name: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
    ];

    // create state called releases
    // releases will be an array of objects
    const [releases, setReleases] = useState(initialState);

    return (
        <>
            <h1>Upcoming Film Releases for UK</h1>
            <UpcomingReleaseList releases={releases} />
            <form action="https://www.imdb.com/calendar/?region=gb">
              <button>View more upcoming releases</button>
            </form>
        </>
    );
}

export default UpcomingReleaseBox;