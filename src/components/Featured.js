import React, { useState, useEffect } from "react";
import "./Featured.css";
import axios from "axios";
import { FiArrowUpRight, FiArrowDownRight} from "react-icons/fi";
import {ReactComponent as Cancel} from '../assets/cancel.svg'

const Featured = () => {
  const [data, setData] = useState(null);

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(data);
  if (!data) return null;

  function MoreCoins(){
    let cancelIcon=document.getElementById('cancel')
    let left=document.getElementById('left');
    let right=document.getElementById('right')
    let cards=document.querySelectorAll('.card')
    left.classList.add('lyt')
    right.classList.remove('ryt')
    right.classList.add('dispryt')
    cancelIcon.classList.remove('hide')
    cancelIcon.classList.add('visible')
    for(const card of cards){
      card.classList.add('fadeCard')
    }
}
function removeMoreCoins(){
  let cancelIcon=document.getElementById('cancel')
    let left=document.getElementById('left');
    let right=document.getElementById('right')
    left.classList.remove('lyt')
    right.classList.remove('dispryt')
    right.classList.add('ryt')
    cancelIcon.classList.remove('visible')
    cancelIcon.classList.add('hide')
}

  return (
    <div className="featured" id="featured">
      <span id="cancel" className="cancel hide" onClick={removeMoreCoins}>
        <Cancel/>
      </span>
      <div className="container">
        {/* left side  */}
        <div className="left" id="left">
          <h2>Explore top Crypto's Like Bitcoin, Etherem and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn" onClick={MoreCoins}>See more Coins</button>
        </div>

        {/* Right side  */}
        <div className="right">
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[0].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[0].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price.toLocaleString()}</p>
            </div>

            {data[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[1].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[1].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[2].image} alt="" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>

            {data[2].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[2].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[2].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[3].image} alt="" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>

            {data[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[3].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[3].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[4].image} alt="" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>

            {data[4].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[4].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[4].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[5].image} alt="" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>

            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[5].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[5].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
        </div>
        <div className="right ryt" id="right">
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[6].image} alt="" />
            </div>
            <div>
              <h5>{data[6].name}</h5>
              <p>${data[6].current_price.toLocaleString()}</p>
            </div>

            {data[6].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[6].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[6].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[7].image} alt="" />
            </div>
            <div>
              <h5>{data[7].name}</h5>
              <p>${data[7].current_price.toLocaleString()}</p>
            </div>

            {data[7].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[7].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[7].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[8].image} alt="" />
            </div>
            <div>
              <h5>{data[8].name}</h5>
              <p>${data[8].current_price.toLocaleString()}</p>
            </div>

            {data[8].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[8].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[8].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[9].image} alt="" />
            </div>
            <div>
              <h5>{data[9].name}</h5>
              <p>${data[9].current_price.toLocaleString()}</p>
            </div>

            {data[9].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[9].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[9].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[10].image} alt="" />
            </div>
            <div>
              <h5>{data[10].name}</h5>
              <p>${data[10].current_price.toLocaleString()}</p>
            </div>

            {data[10].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[10].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[10].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt=''/> */}
              <img src={data[11].image} alt="" />
            </div>
            <div>
              <h5>{data[11].name}</h5>
              <p>${data[11].current_price.toLocaleString()}</p>
            </div>

            {data[11].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDownRight />
                {data[11].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight />
                {data[11].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
