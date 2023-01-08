import React from "react";
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
                <li className="floor"><button className="button-floor btn-reset button-floor-active" value="1">1</button></li>
                <li className="floor"><button className="button-floor btn-reset" value="0">0</button></li>
            </ul>
            <img className="img-map" src={firstFloor} alt=""/>
        </div>
    </div>
  );
};

var floors = document.querySelector('.buttons-floors');
var mapOnScreen = document.querySelector('.img-map');

var maps = {
  4 : forhtFloor,
  3 : thirdFloor,
  2 : secondFloor,
  1 : firstFloor,
  0 : zeroFloor
};

if (mapOnScreen) {
  floors.addEventListener('click', (evt) => {
    const mapBtn = evt.target.closest('.button-floor');

    if (mapBtn) {
      floors.querySelectorAll('.button-floor').forEach((f) => f.classList.remove('button-floor-active'));

      if (mapBtn.value === '4') {
        mapOnScreen.src = maps[4];
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
  })
}



// var floors = document.querySelectorAll('.buttons-floor');

// var addThumbnailClickHandler = function (floor, map) {
//   floor.addEventListener('click', function () {
//     floors.forEach((f) => f.classList.remove('button-floor-active'));
//     floor.classList.add('button-floor-active');
//     mapOnScreen.src = map;

//       // mapOnScreen.src = new Indoor.Map(this._canv, {
//       //   floorplan: new Indoor.Floor({
//       //     url: map,
//       //     width: this.mapImg.width,
//       //     height: this.mapImg.height  2,
//       //     opacity: 0.8,
//       //     zIndex: 1
//       //   }),
//       //   height: window.innerHeight,
//       //   minZoom: 0.1,
//       //   maxZoom: 100,
//       //   center: {
//       //     x: 0,
//       //     y: 0
//       //   }
//       // })
//   });
// };

// for (var i = 0; i < floors.length; i++) {
//   addThumbnailClickHandler(floors[i], maps[floors[i].value]);
// }



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