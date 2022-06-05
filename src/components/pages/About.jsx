import React from 'react';
import Container from 'react-bootstrap/Container';
import anneliis_image from './../../img/anneliis.jpg';

import './../../style/about.css'

export default function About() {
  return (
    <Container>
      <h1>FOTOGRAAFIST</h1>
      <br></br>
      <div className="flex about">
        
        <div className=' aboutImage'>
          <img src={anneliis_image} className="anImg"></img>
        </div>
        <div className='aboutText'>
          <p>
            Kõik sai alguse kui veel põhikoolis käisin ja igavusest ühel päeval
            riiulilt isa kaamera haarasin, et enda oskused proovile panna.
            Proovisin pildistada heinakõrsi, kive, päikeseloojangut, sätendavat
            lund - kõike mis eest ei põgenenud. Ühel hetkel aga haaras mind
            põnevus püüda pildile lepatriinu. See oli täiesti juhuslik, sest
            tegelikult olin tulnud ikka heinakõrsi pildistama. See sai minu
            kõige raskemaks katsumuseks, sest ta lendas muudkui ühelt kõrrelt
            teisele, ta oli nii väike ja ei teinud minuga üldse koostööd. Peale
            pikka püherdamist põllul, oi see ajas vihale ja ma olin õnnetu, et
            ma teda pildile ei saanud. Kuid siiski õnnestus see triinu lõpuks
            pildile saada ja oh siis seda rõõmu. See tunne mis mind toona valdas
            esineb siiani, sest iga õnnestunud fotosessioon loob minus mega
            tunde! See südamerahu ja loov väljendustunne, kui tulemusega rahul
            olen on kõige selle alus miks ma fotograafiaga tegelen. Täna vaatan
            seda lepatriinu fotot ja mõistan, kui ebaterav ja udune see on. Kuid
            too hetk olin ma ju seitsmendas taevas. Kui sa seda juttu loed siis
            tea, et edu võti on asjaga tegeleda, tegeleda ja tegeleda! Ära anna
            alla ja anna enda unistusele võimalus! Alusta kusagilt, sest
            väikesed sammud on ühel päeval suureks kasvanud. Poleks ma toona
            alustanud, siis ehk poleks ma avastanud oma suurt armastust
            fotograafia vastu.
          </p>
          <p>
            Aastate möödudes, ise aru saamata huvi fotograafia vastu suurenes
            ning tänu minu põhikooli ajaloo õpetajale, kes suunas ja julgustas
            mind ka inimesi pildistama, tegin ma sellega algust pildistades
            sõbrannasi ja tuttavaid.
          </p>
          <p>
            Proovinud aastate jooksul fotograafia erinevaid suundi, sai mulle
            selgeks, et minu hinge ei toida ainult erinevate ürituste,
            perekondade ja portreede jäädvustamine. Siit oli midagi puudu ja nii
            ma leidsin end fantaasia suuna pealt. See lubab mul olla hingest
            loominguline, jutustada fotoga lummav lugu ja mu hing on saanud
            taaskord laulda!
          </p>
        </div>
      </div>
    </Container>
  );
}
