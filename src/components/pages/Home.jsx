import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Slides from '../Slides';
import anneliis_image from './../../img/anneliis.jpg';
import './../../style/home.css';

export default function Home() {
  return (
    <>
      <Slides />
      <Container>
        <div id="call">
          <p>Teeme sinu unistused teoks!</p>
          <p>
            Olgu selleks fantaasiaküllane fotosessioon või täispikk pulmapäev!
          </p>
          <Button className="btnLight">Parimad Palad</Button>
        </div>
      </Container>
      <div className="anneliis">
        <img alt="anneliis voore" src={anneliis_image} className="anImg"></img>
        <div>
          <p className="anIntro">
            Proovinud aastate jooksul fotograafia erinevaid suundi, sai mulle
            selgeks, et minu hinge ei toida ainult erinevate ürituste,
            perekondade ja portreede jäädvustamine. Siit oli midagi puudu ja nii
            ma leidsin end fantaasia suuna pealt. See lubab mul olla hingest
            loominguline, jutustada fotoga lummav lugu ja mu hing on saanud
            taaskord laulda...
          </p>
          <Button className="anIntro">
            {' '}
            <Link to="/fotograafist" className="navLink">
              Loe Veel
            </Link>
          </Button>
        </div>
      </div>
      <div className="tagasiside">Tagasiside</div>
    </>
  );
}
