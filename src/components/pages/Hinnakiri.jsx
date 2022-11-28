import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './../../style/hinnakiri.css';

export default function Hinnakiri() {
  return (
    <>
      <h1 className='pageTitle'>Hinnakiri</h1>

      <div className="priceSection">
        <div className="xmas head">JÕULUSESSIOONIDE HINNAKIRI</div>
        <div className="flex">
          {/* <img src={elf_image} id="elf"></img> */}
          <div className="text">
            <br></br>
            <div>
            Jõulusessioonid on aasta kõige menukaim aeg fotograafi jaoks ja seetõttu tuleks varakult endale sobiv aeg kirja panna. Minu kaamera ette saab tulla nii Tartus, kui ka Tallinnas ning mõlemal juhul pildistan kodu-, väli- ja ka stuudiosessioone. Igal kohal omad võlud!{' '}
            </div>
            <div>
            Sel detsembril teen ka raekojaplatsis minisessioone!
            
            </div>
            <div>15min - 45€ Tallinnas hetkel kindel kuupäev 20.12 </div>
            <div>
            NB! Tallinnas stuudiosessioone võimalik vaid 1h kaupa teha, Tartus saab ka 30 min kaupa!
            </div>

            
            {/* <Button>Vaata Pilte</Button> */}
            <br></br>
            
          </div>
        </div>

        <div className="paketid">
          <div className="offerCard">
            <br></br>
            <h3>Pakett Mini</h3>
            <h5>Hind: 45€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText">15min sessioon</li>
              <li className="cardText">Personaalset konsultatsiooni ja idee teostamist</li>
              <li className="cardText">Stilistikat</li>
              <li className="cardText">1 riietus</li>
              <li className="cardText">Sisaldab vähemalt 7 Järeltöötlusega fotot</li>
              <li className="cardText">Veebigalerii fotodeg</li>
              <li className="cardText">Sobib kuni kahe inimese pildistamiseks</li>
            </ul>

          </div>
          <div className="offerCard">
            <br></br>
            <h3>Pakett Classic </h3>
            <h5>Hind: 100€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText">30min pikkust fotosessiooni</li>
              <li className="cardText">Personaalset konsultatsiooni ja idee teostamist</li>
              <li className="cardText">Stilistikat</li>
              <li className="cardText">1 riietus</li>
              <li className="cardText">Sisaldab vähemalt 20 Järeltöötlusega fotot</li>
              <li className="cardText">Veebigalerii fotodega</li>
              <li className="cardText">Sobib 3-4 inimese pildistamiseks</li>
            </ul>
          </div>

          <div className="offerCard">
            <br></br>
            <h3>Pakett Deluxe</h3>
            <h5>Hind: 155€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className='cardText'>Kuni 1h pikkust fotosessiooni</li>
              <li className='cardText'>Personaalset konsultatsiooni ja idee teostamist</li>
              <li className='cardText'>Stilistikat</li>
              <li className='cardText'>Kuni 2 riietust</li>
              <li className='cardText'>Sisaldab vähemalt 35 Järeltöötlusega fotot</li>
              <li className='cardText'>Veebigalerii fotodega</li>
            </ul>

          </div>
        </div>

        <p className='text'>
        Suurema grupi ehk alates 6ndast liikmest lisandub iga näo pealt 10€
        Stuudio sessioonidele ei lisandu transporikulu ning samuti ka välisessioonidele, mis jäävad Tartu piirdesse.

        </p>
        <br></br>

          <p>Paketid ei sisalda: </p>

          <div>Meiki ja soengut</div>
          <div>Transpordikulusid</div>
          <div>Lisafotosid</div>
          <br></br>

          <p>Ooteaeg kuni 3 nädalat</p>
          <br></br>
          <br></br>

      </div>



      {/* 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555 */}
      <div className="priceSection">
        <div className="fantaasia head">FANTAASIA FOTOSESSIOONID</div>
        <div className="flex">
          {/* <img src={elf_image} id="elf"></img> */}
          <div className="text">
            <br></br>
            <div>
              Fantaasia fotosessioon võib täita Sinu lapsepõlve unistuse, võib
              Sulle olulist eluetappi aidata hiljem meenutada või Sinu maagilist
              olemust jäädvustada läbi Sinu hobi või elukutse. Samuti võib
              fantaasiasessioon aidata lihtsalt ellu põnevust ja sära tuua, et
              igapäeva argielust korraks välja tulla. Fantaasiasessioon on
              midagi väga laialdast ja maagilist. Fantaasia on lõputu ja
              seetõttu ka ideid ning teostusi on lõpmatuseni.{' '}
            </div>
            <div>
              Fotosessioonile on võimalik tulla oma kindla ideega või ideeta.
              Aitan viimse detailini kõik läbi mõelda, et tulemus Sinu piltidel
              oleks parim!
            </div>
            <div>Pane end valmis, sest see päev tuleb ülivinge! </div>
            <div>
              Teen koostööd professionaalse jumestuskunstnikuga, kes teeb sulle
              soovi korral soengu ja meigi enne fotosessiooni. On ka täiesti
              okei, kui Sul on endal kindel inimene juba olemas, kes teeb soengu
              ja meigi.
            </div>
            <div>
              Pildid saab klient maksimaalselt kolme nädala jooksul kätte!
            </div>
            {/* <Button>Vaata Pilte</Button> */}
            <br></br>
            <p>Fantaasiafotosessiooni saab valida kolme paketi vahel:</p>
          </div>
        </div>

        <div className="paketid">
          <div className="offerCard">
            <br></br>
            <h3>Pakett Mini</h3>
            <h5>Hind: 200€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText">1h pikkust fotosessiooni</li>
              <li className="cardText">Personaalset konsultatsiooni ja idee teostamist</li>
              <li className="cardText">Stilistikat</li>
              <li className="cardText">1 riietus</li>
              <li className="cardText">Sisaldab vähemalt 15 Järeltöötlusega fotot</li>
              <li className="cardText">Veebigalerii fotodeg</li>
            </ul>

          </div>
          <div className="offerCard">
            <br></br>
            <h3>Pakett Classic </h3>
            <h5>Hind: 300€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText">2h pikkust fotosessiooni</li>
              <li className="cardText">Personaalset konsultatsiooni ja idee teostamist</li>
              <li className="cardText">Stilistikat</li>
              <li className="cardText">1 riietus</li>
              <li className="cardText">Sisaldab vähemalt 25 Järeltöötlusega fotot</li>
              <li className="cardText">Veebigalerii fotodega</li>
            </ul>
          </div>

          <div className="offerCard">
            <br></br>
            <h3>Pakett Deluxe</h3>
            <h5>Hind: 360€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className='cardText'>Kuni 3h pikkust fotosessiooni</li>
              <li className='cardText'>Personaalset konsultatsiooni ja idee teostamist</li>
              <li className='cardText'>Stilistikat</li>
              <li className='cardText'>Kuni 2 riietust</li>
              <li className='cardText'>Sisaldab vähemalt 35 Järeltöötlusega fotot</li>
              <li className='cardText'>Veebigalerii fotodega</li>
            </ul>

          </div>
        </div>

        <p className='text'>
          Broneerimisel saadetakse teile kataloog saadaolevate kleitide ja
          aksessuaaridega. Need hinnad on ainult erakasutuseks. Kui olete bränd
          ja soovite fotosid ärilistel eesmärkidel kasutada, võtke minuga
          ühendust aadressil info@anneliisvoore.ee
        </p>
        <br></br>

          <p>Paketid ei sisalda: </p>

          <div>Meiki ja soengut</div>
          <div>Transpordikulusid</div>
          <div>Lisafotosid</div>
          <br></br>

          <p>Ooteaeg kuni 3 nädalat</p>
          <br></br>
          <br></br>

      </div>

      {/*  */}

      <div className="priceSection">
        <div className="weddings head" id='pulmad'>PULMAFOTOD</div>
        <div className="flex">
          {/* <img src={elf_image} id="elf"></img> */}
          <div className="text">
            <br></br>
            <div>Sinu elu üks olulisemaid sündmusi on teie pulmapäev. </div>
            <div>
              Pulmapäev täis siiraid ja kirevaid emotsioone, kõige lähedasemate
              inimeste keskel.{' '}
            </div>
            <div>
              Fotograafi päev võib alata koos pruudi soengu ja meigi tegemisega,
              mil saab juba kerge ootusärevuse ja ettevalmistused üles
              pildistada.
            </div>
            <div>
              Päeva kõige tähtsam hetk on tseremoonia, kui ühine abielu saab
              alguse. Fotograafina pean oluliseks kõik emotsioonid ja pilgud
              pildile püüda, et aastate möödudes oleks kõik värskelt meeles ja
              sind valdaks tunne, nagu oleks kõik eile toimunud.{' '}
            </div>
            <br></br>
          </div>
        </div>

        <div className="paketid">
          <div className="offerCard">
            <br></br>
            <h3>Pakett Mini</h3>
            <h5>Hind: 200€</h5>
            <p> Sisaldab:</p>

            <ul>
              <li className="cardText"> Konsultatsioon </li>
              <li className="cardText"> Ilupildid kuni 1,5h</li>
              <li className="cardText"> Tseremoonia (registreerimine) </li>
              <li className="cardText">
                {' '}
                Kõik õnnestunud, täissuuruses töödeldud fotod
              </li>
              <li className="cardText"> Veebigalerii fotodega</li>
            </ul>
          </div>
          <div className="offerCard">
            <br></br>
            <h3>Pakett Classic </h3>
            <h5>Hind: 450€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText"> Konsultatsioon </li>
              <li className="cardText"> Ettevalmistus/sättimised </li>
              <li className="cardText"> Ilupildid kuni 2h</li>
              <li className="cardText"> Tseremoonia (registreerimine) </li>
              <li className="cardText"> Grupipildid </li>
              <li className="cardText"> Õnnitlused </li>
              <li className="cardText">
                {' '}
                Kõik õnnestunud, täissuuruses töödeldud fotod
              </li>
              <li className="cardText"> Veebigalerii fotodega</li>
            </ul>
          </div>

          <div className="offerCard">
            <br></br>
            <h3>Pakett Deluxe</h3>
            <h5>Hind: 900€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText"> Konsultatsioon </li>
              <li className="cardText"> Ettevalmistus/sättimised </li>
              <li className="cardText"> Ilupildid kuni 2h</li>
              <li className="cardText"> Kuni 13h pildistamist </li>
              <li className="cardText"> Tseremoonia (registreerimine) </li>
              <li className="cardText"> Grupipildid </li>
              <li className="cardText"> Õnnitlused </li>
              <li className="cardText"> Fotostuudio kasutamise võimalus</li>
              <li className="cardText">
                {' '}
                Kõik õnnestunud, täissuuruses töödeldud fotod
              </li>
              <li className="cardText"> Veebigalerii fotodega</li>
              <li className="cardText"> Pildid kätte 30 päevaga</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>



      <div className="priceSection">
        <div className="pere head">Portree- ja peresessioonid </div>
        <div className="flex">
          {/* <img src={elf_image} id="elf"></img> */}
          <div className="text">
            <br></br>
            <div>Portree sessioonid on mõeldud Sulle, kui soovid endast aegumatuid mälestusi luua. 
                  Portree sessioone saab luua mitmel erineval põhjusel - ettevõtte jaoks, lõpetamise puhul, 
                  fine art stiilis muinasjutulisemaid pilte või lihtsalt argipäeva portree.</div>
            {/* <div>
              Pulmapäev täis siiraid ja kirevaid emotsioone, kõige lähedasemate
              inimeste keskel.{' '}
            </div>
            <div>
              Fotograafi päev võib alata koos pruudi soengu ja meigi tegemisega,
              mil saab juba kerge ootusärevuse ja ettevalmistused üles
              pildistada.
            </div>
            <div>
              Päeva kõige tähtsam hetk on tseremoonia, kui ühine abielu saab
              alguse. Fotograafina pean oluliseks kõik emotsioonid ja pilgud
              pildile püüda, et aastate möödudes oleks kõik värskelt meeles ja
              sind valdaks tunne, nagu oleks kõik eile toimunud.{' '}
            </div>
            <br></br>
            <p>Fantaasiafotosessiooni saab valida kolme paketi vahel:</p> */}
          </div>
        </div>

        <div className="paketid">
          <div className="offerCard">
            <br></br>
            <h3>Pakett Mini</h3>
            <h5>Hind: 45€</h5>
            <p> Sisaldab:</p>

            <ul>
              <li className="cardText"> Konsultatsiooni </li>
              <li className="cardText"> 15min fotosessiooni välitingimustes</li>
              <li className="cardText"> Juhendamist </li>
              <li className="cardText">
                {' '}
                Kuni 5 töödeldud fotot veebigaleriis
              </li>

            </ul>
          </div>
          <div className="offerCard">
            <br></br>
            <h3>Pakett Classic </h3>
            <h5>Hind: 100€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText"> 30min fotosessiooni </li>
              <li className="cardText"> Konsultatsiooni </li>
              <li className="cardText"> Juhendamist</li>
              <li className="cardText"> Kuni 20 täissuuruses töödeldud fotot </li>
              <li className="cardText"> Veebigalerii fotodega </li>
            </ul>
          </div>

          <div className="offerCard">
            <br></br>
            <h3>Pakett Deluxe</h3>
            <h5>Hind: 155€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText"> 1h fotosessiooni </li>
              <li className="cardText"> Konsultatsiooni </li>
              <li className="cardText"> Juhendamist fotosessioonil </li>
              <li className="cardText"> Kuni 40 täissuuruses töödeldud foto</li>
              <li className="cardText"> Veebigalerii fotodega </li>

            </ul>
          </div>

          
        </div>
        <p>Ooteaeg kuni 3 nädalat</p>
          <br></br>
      </div>
    </>
  );
}
