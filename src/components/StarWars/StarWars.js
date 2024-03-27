import React, {useEffect, useState} from 'react';
import {useGetFilmByIdQuery, useGetFilmsQuery, useGetPeoplesQuery} from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const StarWars = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [peoples, setPeoples] = useState([]);

    const tmp = useGetFilmsQuery();
    const tmp2 = useGetFilmByIdQuery(1);
    const { data, error, isLoading }= useGetPeoplesQuery(searchParams.get('page'));

    return (
        <div>
            Staw Wars
            <h1>Peoples</h1>
            {isLoading ? <p>Loading...</p> : <ul>
                {data?.results.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>}
            <Pagination/>
        </div>
    );
};

export default StarWars;