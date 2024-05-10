import {useEffect, useState} from "react";
import {unixToTime} from "../helpers/time_helper.js";
import claroBanner from "../assets/LogoClaroVid.png";
import {getChannels} from "../services/index.js";
import {Alert} from "./Alert.jsx";
import {Loader} from "./Loader.jsx";

export const Guide = () => {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [banner, setBanner] = useState(null);


    useEffect(() => {
        setLoading(true);
        getChannels()
            .then((response) =>{
                setData(response.data.response.channels)
                setType(null);
                setMessage(null);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
                setType('danger');
                setMessage(error.message);
            })
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
                                <h5>{description}</h5>
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


    const renderRows =()=>{
        if(data.length > 0 ){
            const cells = data.map((
                {
                    name, number, image,
                    group: {common : {title, description, image_large, description_large }},
                    events
                },index) => {
                const subEvents = events.map(({unix_begin, unix_end, duration}, i)=>{
                    return(
                        <td key={`${title}${i}`}
                            className='text-wrap my-hover'
                            onMouseOver={() => setBanner({
                                title,
                                description,
                                description_large,
                                image_large,
                                unix_begin, unix_end, duration
                            })}>
                            <p>{description_large}</p>
                            <small>{`${unixToTime(unix_begin)} - ${unixToTime(unix_end)}` }</small>
                        </td>
                    )
                })
                return(
                    <tr key={`${name}${index}`} className='bg-dark'>
                        <th className="f-row" style={{backgroundColor:"#0e0e0e",backgroundImage:`url(${image})`}}>
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

    const renderHours= ()=>{
        const th =[21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        return th.map((el)=>{
            return (<th key={el}>{`${el}:00`}</th>)
        });
    }

    const renderComponents = ()=> {
        if(loading){
            return <Loader />
        }
        if(message){
            return <Alert type={type} text={message} />
        }
        if(data.length > 0){
            return (
                <div className="h-100">
                    {renderBannerContainer()}
                    <div className="schedule-container bg-secondary">
                        <table className="table table-dark">
                            <thead>
                            <tr align='center'>
                                <th>Canal</th>
                                {renderHours()}
                            </tr>
                            </thead>
                            <tbody>
                                {renderRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }else return '';
    }


    return renderComponents();
};