import React from "react";
/*import { getShortestPath } from '../utils/paths.js'*/
import './style.css';
import zeroFloor from '../img/ИРИТ-РТФ-0-этаж.jpg'
import firstFloor from '../img/ИРИТ-РТФ-1-этаж.jpg'
import secondFloor from '../img/ИРИТ-РТФ-2-этаж.jpg'
import thirdFloor from '../img/ИРИТ-РТФ-3-этаж.jpg'
import forhtFloor from '../img/ИРИТ-РТФ-4-этаж.jpg'

function ShowIrit() {
  return (
    <div className="container">
        <div className="search flex">
            <div className="searc-string flex">
                <input className="input-reset searc-string-input" type="text" name="input-point" id="" placeholder="Аудитория или название места"/>
            </div>
        </div>
        <div className="div">
            <ul className="buttons-floors list-reset">
                <p className="ins-name">PТФ</p>
                <li className="floor"><button className="button-floor btn-reset" value="4">4</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="3">3</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="2">2</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="1">1</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="0">0</button></li>
            </ul>
            <img className="img-map" src={firstFloor} alt=""/>
        </div>
    </div>
  );
};

/*console.log(getShortestPath("ИРИТ-РТФ", "Р-407", "Р-402а"));*/

var maps = {
  4 : forhtFloor,
  3 : thirdFloor,
  2 : secondFloor,
  1 : firstFloor,
  0 : zeroFloor
};

var floors = document.querySelectorAll('.button-floor');
var mapOnScreen = document.querySelector('.img-map');

var addThumbnailClickHandler = function (floor, map) {
  floor.addEventListener('click', function () {
    // floors.forEach((f) => f.classList.remove('button-floor-active'))
    // floor.classList.add('button-floor-active');
    mapOnScreen.src = map;

      // mapOnScreen.src = new Indoor.Map(this._canv, {
      //   floorplan: new Indoor.Floor({
      //     url: map,
      //     width: this.mapImg.width,
      //     height: this.mapImg.height  2,
      //     opacity: 0.8,
      //     zIndex: 1
      //   }),
      //   height: window.innerHeight,
      //   minZoom: 0.1,
      //   maxZoom: 100,
      //   center: {
      //     x: 0,
      //     y: 0
      //   }
      // })
  });
};

for (var i = 0; i < floors.length; i++) {
  addThumbnailClickHandler(floors[i], maps[floors[i].value]);
}

// const mapEl = document.querySelector('.container');

// const Indoor = require('indoorjs')
 
// const map = new Indoor.Map(mapEl, {
//   floorplan: new Indoor.Floor({
//     url: './img/ИРИТ-РТФ-1-этаж.jpg',
//     opacity: 0.4,
//     width: 400,
//     zIndex: 1
//   }),
//   minZoom: 0.001,
//   maxZoom: 10,
//   center: {
//     x: 0,
//     y: 0,
//     zoom: 1
//   }
// });

export default ShowIrit;