import React from "react";
import { getShortestPath } from '../utils/paths.js'
import './style.css';
import zeroFloor from '../img/ИРИТ-РТФ-0-этаж.jpg'
import firstFloor from '../img/ИРИТ-РТФ-1-этаж.jpg'
import secondFloor from '../img/ИРИТ-РТФ-2-этаж.jpg'
import thirdFloor from '../img/ИРИТ-РТФ-3-этаж.jpg'
import forhtFloor from '../img/ИРИТ-РТФ-4-этаж.jpg'
import loope from '../img/loupe.svg';


function ShowIrit() {
  return (
    <div className="container">
        <div className="search flex">
            <div className="search-field flex">
                <span className="search-field-text">От</span><input className="input-reset search-string-input from-point" type="text"/>
                <span className="search-field-text">До</span><input className="input-reset search-string-input to-point" type="text"/>
                <button className="btn-reset loope-btn" onClick={ search }><img className="loope" src={ loope } alt=""/></button>
            </div>
        </div>
        <div className="div">
            <ul className="buttons-floors list-reset" onClick={ changeMap }>
                <p className="ins-name">PТФ</p>
                <li className="floor"><button className="button-floor btn-reset" value="4">4</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="3">3</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="2">2</button></li>
                <li className="floor"><button className="button-floor btn-reset button-floor-active" value="1">1</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="0">0</button></li>
            </ul>
            <img className="img-map" src={firstFloor} alt=""/>
        </div>
    </div>
  );
};

async function search() {
  console.log(await getShortestPath("ИРИТ-РТФ", "Р-407", "Р-402а"));

  var pointFrom = document.querySelector('.from-point').value;
  var pointTo = document.querySelector('.to-point').value;

  console.log(pointFrom);
  console.log(pointTo);
  console.log(await getShortestPath("ИРИТ-РТФ", "pointFrom",  "pointTo"));
}



var maps = {
  4 : forhtFloor,
  3 : thirdFloor,
  2 : secondFloor,
  1 : firstFloor,
  0 : zeroFloor
};

function changeMap(evt) {
  const mapBtn = evt.target.closest('.button-floor');
  var floorsBtns = document.querySelector('.buttons-floors');
  var mapOnScreen = document.querySelector('.img-map');

  if (mapBtn) {
    floorsBtns.querySelectorAll('.button-floor').forEach((f) => f.classList.remove('button-floor-active'));

    if (mapBtn.value === '4') {
      document.querySelector('.img-map').src = maps[4];
    } else if (mapBtn.value === '3') {
      mapOnScreen.src = maps[3];
    } else if (mapBtn.value === '2') {
      mapOnScreen.src = maps[2];
    } else if (mapBtn.value === '1') {
      mapOnScreen.src = maps[1];
    } else {
      mapOnScreen.src = maps[0];
    }

    mapBtn.classList.add('button-floor-active');
  }
}

export default ShowIrit;