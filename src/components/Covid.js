import React,{useEffect,useState} from 'react';
import './covid.css';

const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async()=>{
        try{
            const url = "https://data.covid19india.org/data.json";
            const response = await fetch(url);
            const actualData = await response.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        }catch(err){
            console.log(err)
        }
      
    }
    useEffect(() => {
        getCovidData();
    }, []);
    
  return (
    <>
    <section>
     <h4>&#128308; LIVE</h4>
     <h1>COVID-19 CORONAVIRUS TRACKER</h1>
     <ul>
        <li className='card' style={{backgroundColor:'#E040FB'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>OUR</span>  COUNTRY</p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
        </li>
        <li className='card' style={{backgroundColor:'#388E3C'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>  RECOVERED</p>
                    <p className='card_total card_small'>{data.recovered}</p>
                </div>
            </div>
        </li>
        <li className='card' style={{backgroundColor:'#AFB42B'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>  CONFIRMED</p>
                    <p className='card_total card_small'>{data.confirmed}</p>
                </div>
            </div>
        </li>
        <li className='card' style={{backgroundColor:'#FF9800'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>  DEATH</p>
                    <p className='card_total card_small'>{data.deaths}</p>
                </div>
            </div>
        </li>
        <li className='card' style={{backgroundColor:'#FF4081'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span>  ACTIVE</p>
                    <p className='card_total card_small'>{data.active}</p>
                </div>
            </div>
        </li>
        <li className='card' style={{backgroundColor:'#5D4037'}}>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>LAST</span>  UPDATED</p>
                    <p className='card_total card_small'>{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
     </ul>
     </section>
    </>
  )
}

export default Covid