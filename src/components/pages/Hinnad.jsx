import React from 'react';

import './../../style/hinnad.css';
import w1 from './../../img/wedding.jpg';

export default function Hinnad() {
  return (
    <>
      <div className="titleDiv">
        <h1 className="imageTitle">Hinnakiri</h1>
      </div>

        {/* fantasy section */}
      <div className="pricingSection">
        <hr></hr>
        <h1>Fantaasia Fotosessioonid</h1>
        <div className="flex text">
          <div>
            Fantaasia fotosessioon võib täita Sinu lapsepõlve unistuse, võib
            Sulle olulist eluetappi aidata hiljem meenutada või Sinu maagilist
            olemust jäädvustada läbi Sinu hobi või elukutse. Samuti võib
            fantaasiasessioon aidata lihtsalt ellu põnevust ja sära tuua, et
            igapäeva argielust korraks välja tulla. Fantaasiasessioon on midagi
            väga laialdast ja maagilist. Fantaasia on lõputu ja seetõttu ka
            ideid ning teostusi on lõpmatuseni.{' '}
          </div>
          <div>
            Fotosessioonile on võimalik tulla oma kindla ideega või ideeta.
            Aitan viimse detailini kõik läbi mõelda, et tulemus Sinu piltidel
            oleks parim!
          </div>
          <div>Pane end valmis, sest see päev tuleb ülivinge! </div>
          <div>
            Teen koostööd professionaalse jumestuskunstnikuga, kes teeb sulle
            soovi korral soengu ja meigi enne fotosessiooni. On ka täiesti okei,
            kui Sul on endal kindel inimene juba olemas, kes teeb soengu ja
            meigi.
          </div>
          <div>
            Pildid saab klient maksimaalselt kolme nädala jooksul kätte!
          </div>
          {/* <Button>Vaata Pilte</Button> */}
          <br></br>
          <p>Fantaasiafotosessiooni saab valida kolme paketi vahel:</p>
        </div>

        {/* hinnapaketid */}

        <div className="flex pakett">
          <div className="paketiPilt fantasy1">
            {/* <img src={w1} ></img> */}
          </div>
          <div className="paketiTekst">
            <h3>Pakett Mini</h3>
            <h5>Hind: 200€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText">1h pikkust fotosessiooni</li>
              <li className="cardText">
                Personaalset konsultatsiooni ja idee teostamist
              </li>
              <li className="cardText">Stilistikat</li>
              <li className="cardText">1 riietus</li>
              <li className="cardText">
                Sisaldab vähemalt 15 Järeltöötlusega fotot
              </li>
              <li className="cardText">Veebigalerii fotodeg</li>
            </ul>
          </div>
        </div>

        <div className="flex pakett">
          <div className="paketiTekst">

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
          <div className="paketiPilt fantasy1"></div>
        </div>

        <div className="flex pakett">
          <div className="paketiPilt fantasy1">
          </div>
          <div className="paketiTekst">

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
      </div>



      <div className="pricingSection">
        <hr></hr>
        <h1>Pulmafotod</h1>
        <div className="flex text">
          <div>
            Fantaasia fotosessioon võib täita Sinu lapsepõlve unistuse, võib
            Sulle olulist eluetappi aidata hiljem meenutada või Sinu maagilist
            olemust jäädvustada läbi Sinu hobi või elukutse. Samuti võib
            fantaasiasessioon aidata lihtsalt ellu põnevust ja sära tuua, et
            igapäeva argielust korraks välja tulla. Fantaasiasessioon on midagi
            väga laialdast ja maagilist. Fantaasia on lõputu ja seetõttu ka
            ideid ning teostusi on lõpmatuseni.{' '}
          </div>
          <div>
            Fotosessioonile on võimalik tulla oma kindla ideega või ideeta.
            Aitan viimse detailini kõik läbi mõelda, et tulemus Sinu piltidel
            oleks parim!
          </div>
          <div>Pane end valmis, sest see päev tuleb ülivinge! </div>
          <div>
            Teen koostööd professionaalse jumestuskunstnikuga, kes teeb sulle
            soovi korral soengu ja meigi enne fotosessiooni. On ka täiesti okei,
            kui Sul on endal kindel inimene juba olemas, kes teeb soengu ja
            meigi.
          </div>
          <div>
            Pildid saab klient maksimaalselt kolme nädala jooksul kätte!
          </div>
          {/* <Button>Vaata Pilte</Button> */}
          <br></br>
          <p>Fantaasiafotosessiooni saab valida kolme paketi vahel:</p>
        </div>

        {/* hinnapaketid */}

        <div className="flex pakett">
          <div className="paketiPilt wedding1">
            {/* <img src={w1} ></img> */}
          </div>
          <div className="paketiTekst">
            <h3>Pakett Mini</h3>
            <h5>Hind: 200€</h5>
            <p> Sisaldab:</p>
            <ul>
              <li className="cardText">1h pikkust fotosessiooni</li>
              <li className="cardText">
                Personaalset konsultatsiooni ja idee teostamist
              </li>
              <li className="cardText">Stilistikat</li>
              <li className="cardText">1 riietus</li>
              <li className="cardText">
                Sisaldab vähemalt 15 Järeltöötlusega fotot
              </li>
              <li className="cardText">Veebigalerii fotodeg</li>
            </ul>
          </div>
        </div>

        <div className="flex pakett">
          <div className="paketiTekst">
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
          <div className="paketiPilt wedding1"></div>
        </div>

        <div className="flex pakett">
          <div className="paketiPilt wedding1">
          </div>
          <div className="paketiTekst">
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


      <div className="pricingSection">
        <hr></hr>
        <h1>Portree- ja Peresessioonid</h1>
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

        {/* hinnapaketid */}

        <div className="flex pakett">
          <div className="paketiPilt pere1">
            {/* <img src={w1} ></img> */}
          </div>
          <div className="paketiTekst">
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
        </div>

        <div className="flex pakett">
          <div className="paketiTekst">
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
          <div className="paketiPilt pere1"></div>
        </div>

        <div className="flex pakett">
          <div className="paketiPilt pere1">
          </div>
          <div className="paketiTekst">
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
      </div>
    </>
  );
}
