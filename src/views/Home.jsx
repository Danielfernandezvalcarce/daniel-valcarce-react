import React from 'react';
import './styles/HomeStyle.css'
import './../components/Timeline';
import Timeline from './../components/Timeline';

function Home() {
    return (
        <>
            <main>
                <section id="pesentacion">
                    <div className="text-white text-center">
                    <h1 id='nombreMain'>DANIEL VALCARCE</h1>
                        <div className='d-flex text-center justify-content-center'>
                            <h3 id='Description'>SOFTWARE</h3> <h3 class='text-warning'>FULL STACK WEB DEVELOPER.</h3>
                        </div>
                    </div>
                </section>
                <section id="">
                    <Timeline />
                </section>
            </main>
        </>
    );
}

export default Home;