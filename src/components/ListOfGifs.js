
import Gif from './Gif';
import React, { useState, useEffect } from 'react';
import GetGifs from '../services/GetGifs';


export default function ListOfGifs({ params }) {

    const [loading, setLoading] = useState(false);

    const { keyword } = params;

    const [gifs, SetGifs] = useState([]);

    useEffect(function () {
        setLoading(true)
        GetGifs({ keyword })
            .then(gifs => {
            SetGifs(gifs)
            setLoading(false)
        
        
        })


    }, [keyword])


   if (loading) return <i>Cargando...</i>


    return <div>
        {

            gifs.map(({ id, title, url }) =>

                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />


            )

        }

    </div>

}