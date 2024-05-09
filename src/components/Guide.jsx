import {useEffect, useState} from "react";
import {dummy} from "./response.js";
import {unixToTime} from "../helpers/time_helper.js";
import claroBanner from "../assets/LogoClaroVid.png";
import {getChannels} from "../services/index.js";

export const Guide = () => {
    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [banner, setBanner] = useState(null);


    useEffect(() => {
        //setLoading(true);
        //console.log(dummy)
        getChannels()
            .then((response) =>{
                console.log(response.response)
                //setData(response.response.channels)
            })
            .catch((error)=>{console.log(error) })


        setData(dummy.response.channels)

    }, []);

    const renderBannerContainer = ()=>{
        const emptyBanner = {
            description:  "Claro Video",
            description_large: "Bienvenido a la plataforma de streaming más completa de latinoamerica!",
            image_large: claroBanner
        }

        if(banner){
            const {
                title,
                description,
                description_large,
                image_large,
                unix_begin, unix_end, duration
            } = banner
            return(
                <div className="banner-container bg-dark text-white" style={{backgroundImage:`url(${image_large})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-4">
                                <h3>{title}</h3>
                                <small>{`${unixToTime(unix_begin)} a ${unixToTime(unix_end)}` } Duración: {duration}</small>
                                <h4>{description}</h4>
                                <p>{description_large}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else return (
            <div className="banner-container bg-dark text-white" style={{backgroundImage:`url(${emptyBanner.image_large})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <h3>{emptyBanner.description}</h3>
                            <p>{emptyBanner.description_large}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const generateRows =()=>{
        //console.log(data)
        if(data.length > 0 ){
            const cells = data.map((
                {
                    name, number, image,
                    group: {common : {title, description, image_large, description_large }},
                    events
                },index) => {
                const subEvents = events.map(({unix_begin, unix_end, duration}, i)=>{
                    return(
                        <td key={`${title}${i}`} onMouseOver={() => setBanner({
                                title,
                                description,
                                description_large,
                                image_large,
                                unix_begin, unix_end, duration
                            })}>
                            {description_large}
                            <br/>
                            <small>{`${unixToTime(unix_begin)} - ${unixToTime(unix_end)}` }</small>
                        </td>
                    )
                })
                return(
                    <tr key={`${name}${index}`} className='bg-dark'>
                        <th className="f-row" style={{backgroundImage:`url(${image})`}}>
                            <div>{number}</div>
                        </th>
                        {subEvents}
                    </tr>
                )
            });
            return cells;
        }else{
            return null
        }
    }


    return (
        <div className="h-100">
            {renderBannerContainer()}
            <div className="schedule-container bg-secondary">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Canal</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                    </tr>
                    </thead>
                    <tbody>
                    {generateRows()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};