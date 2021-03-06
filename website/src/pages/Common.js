import React, { useEffect } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Common ({activePage = null, pageTitle = '', showMenuButton = false, children = []}) {
    useEffect(() => {
        const d = document,
              s = d.createElement('script'),
              previous = d.getElementById('carbonads');

        if (previous) {
            previous.remove()
        }

        s.src = 'https://cdn.carbonads.com/carbon.js?serve=CEBILKJI&placement=sbuttonsgithubio';
        s.id = '_carbonads_js';
        s.setAttribute('async', 'async');
        d.body.appendChild(s);

        return () => {
            s.remove();
        }
    }, []);

    return (
        <div className="sticky top-0 z-10">
            <Meta pageTitle={pageTitle} children={children} />
            <ToastContainer />
            <Header activePage={activePage} showMenuButton={showMenuButton} />
        </div>
    )
}

export default Common