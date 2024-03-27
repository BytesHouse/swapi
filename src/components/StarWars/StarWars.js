import React from 'react';
import {useGetFilmByIdQuery, useGetFilmsQuery} from "../../api/api";

const StarWars = () => {
    const tmp = useGetFilmsQuery();
    const tmp2 = useGetFilmByIdQuery(1);
    console.log(tmp2);
    return (
        <div>
            Staw Wars
        </div>
    );
};

export default StarWars;