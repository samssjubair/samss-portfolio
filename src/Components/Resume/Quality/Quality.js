import React from 'react';
import QualityBox from '../QualityBox/QualityBox';
const qualities=[
    {
        title: 'Team Worker',
        url: 'https://media.giphy.com/media/PzT0L9xHZAzzoCtWb0/giphy.gif'
    },
    {
        title: 'Love learning new Technology',
        url: 'https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif'
    },
    {
        title: 'Good at Communication',
        url: 'https://media.giphy.com/media/EPffed1dXuDbsK86H9/giphy.gif'
    },
    {
        title: 'Creative in Design',
        url: 'https://media.giphy.com/media/U3Dghss6nJfV5jMHva/giphy.gif'
    }
]

const Quality = () => {
    return (
        <div>
            <h1 className="text-danger my-5">Why Me?</h1>
            <div className="row container-fluid m-auto">
                {
                    qualities.map(quality=> <QualityBox quality={quality}></QualityBox> )
                }
            </div>
        </div>
    );
};

export default Quality;