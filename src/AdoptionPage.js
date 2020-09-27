import React from 'react';

import PeopleQueue from './PeopleQueue';

import DogsQueue from  './DogsQueue';
import CatsQueue from './CatsQueue';

import '../src/index.css';


function AdoptionPage(props) {

    return(
        <div className='adoptionPage'>

            <header 
                className='adoptionHeader'
            >
                <h1 className='adoptionPageH1'>
                    My Little Pet Shop
                </h1>
                <h2 className='adoptionPageH2'>
                    Your pet is excited to meet you!
                </h2>
            </header>
            

            <div>
                <PeopleQueue 
                    queue={props.queue} 
                    adopt={props.adopt} 
                />

                <div>
                    <h2 className='secTitle'>
                        Ready for Adoption
                    </h2>
                    
                    <DogsQueue adopt={props.adopt} />

                    <CatsQueue adopt={props.adopt} />
                </div>
            </div>

        </div>
    );
}

export default AdoptionPage;