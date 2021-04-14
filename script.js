/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
const keyA = 65;
const keyD = 68;

var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 680; // y-positie van speler

var etenX = 0;    // x-positie van eten
var etenY = 0;    // y-positie van eten

var bomX = 0;   // x-positie van vijand
var bomY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


var tekenVeld = function() {
    fill('lightblue');
    rect(0, 0, 1280, 540);
    fill('lime');
    rect(0, 540, 1280, 720);
};

/**
 * Tekent de bom
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBom = function(x, y) {
    

};


/**
 * Tekent de eten
 * @param {number} etenX x-coördinaat
 * @param {number} etenY y-coördinaat
 */
var tekenEten = function(etenX, etenY) {
    fill("pink");
    ellipse(etenX, etenY, 50, 50);
};


/**
 * Tekent de speler
 * @param {number} spelerX x-coördinaat 
 * @param {number} spelerY y-coördinaat
 */
var tekenSpeler = function(spelerX, spelerY) {
  fill("white");
  rect(spelerX, spelerY, 50, 50);
};


/**
 * Updatet globale variabelen met positie van bom
 */
var beweegBom = function() {
    
};


/**
 * Updatet globale variabelen met positie van eten
 */
var beweegEten = function() {
    tekenEten(etenX, etenY);
    etenY += 5;

    if (etenY > 780) {
        etenX = random(0, 1220);
        etenY = 0;
    }
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    tekenVeld();
  if (keyIsDown(keyA)) {
      spelerX -= 7;
  }
  if (keyIsDown(keyD)) {
      spelerX += 7;
  }

  if(spelerX < 0) {
    spelerX =0;
  }
  if(spelerX > 1280) {
    spelerX = 1280;
  }
};


/**
 * Zoekt uit of de speler heeft gemist
 * @returns {boolean} true als speler heeft gemist
 */
var checkSpelerGemist = function() {

  return false;
};



/**
 * Zoekt uit of de speler bom gepakt
 * @returns {boolean} true als speler bom heeft gepakt
 */
var checkSpelerBomGepakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');


}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegBom();
      beweegEten();
      beweegSpeler();
      
      if (checkSpelerGemist()) {
        // leven eraf
      }
      
      if (checkSpelerBomGepakt()) {
        // meteen af
        
      }

      tekenVeld();
      tekenBom(bomX, bomY);
      tekenEten(etenX, etenY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
