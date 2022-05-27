import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
<<<<<<< HEAD
import CardPequeno from './components/CardPequeno/CardPequeno';
=======
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQG05TZMTL8S2g/profile-displayphoto-shrink_800_800/0/1643895335794?e=1658966400&v=beta&t=kmc-F3nqt2Fn29DgPBdR-QtD-oyVAN_X9r4u6oY8R4Q"
          nome="Nicole Peiker"
<<<<<<< HEAD
          descricao="Curitibana, apaixonada por cachorros, viagens, comidas e tecnologia."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/1251/1251612.png?w=740&t=st=1653611933~exp=1653612533~hmac=8a5431008ea94e3c85bcde35020f974a5cd9ca15e0fcd737754ba99d854e4843"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239290.png?w=740&t=st=1653612191~exp=1653612791~hmac=1c315cc871125a77cc2dd27c19f06683fcfaf12b766a77885d6d0d609603f28b"
          nome="Email: "
          descricao="nicolervpeiker@gmail.com"
        />
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1237/1237970.png?w=740&t=st=1653612141~exp=1653612741~hmac=11523a33669ac1f778d2dfccc66d0ebbb0173a3abb46863c2f0778003708c070"
          nome="Endereço: "
          descricao="Al. Dr. Muricy / Curitiba - PR"
        />
      </div>
=======
          descricao="Curitibana, apaixonada por cachorros, viagens e comidas."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269

      <div className="page-section-container">
        <h2>Formações</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/f/f0/Pucpr-logo.jpg"
          nome="PUC-PR"
          descricao="Desenho Industrial - Design de Produto"
        />

        <CardGrande
          imagem="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB"
          nome="LABENU"
          descricao="Pragramação - Web Full Stack"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="http://www.bomjesusviagens.com.br/Libraries/BomJesus/media/images/logo-bomjesus.png"
<<<<<<< HEAD
          nome="AGENCIA BOM JESUS"
=======
          nome="Agencia Bom Jesus"
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269
          descricao="Agencia de turismo - Socia administradora"
        />

        <CardGrande
<<<<<<< HEAD
          imagem="https://logosandtypes.com/wp-content/uploads/2021/04/grupo-boticario.svg"
          nome="GRUPO BOTICÁRIO"
          descricao="Desenvolvedor I"
=======
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
<<<<<<< HEAD
          imagem="https://img.freepik.com/free-icon/linkedin-logo-with-rounded-corners_318-9541.jpg?w=740&t=st=1653611999~exp=1653612599~hmac=3982a7703bd90c33c4e7ea2af26463189541d65ad9b83cea025348d7ab9b795c"
          texto="LinkedIn"
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/1051/1051313.png?w=740&t=st=1653612100~exp=1653612700~hmac=924c6d261aea2be60e195c74a5c0d2fd5d41695caad6d32c5a4973f55b094d08"
          texto="Instagram"
        />

        <ImagemButton
          imagem="https://img.freepik.com/free-icon/facebook-link_318-10348.jpg?w=740&t=st=1653611955~exp=1653612555~hmac=f2414540544251c58398d39f258ebe698cf60c42a779e2725070195511e2872f"
=======
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269
          texto="Facebook"
        />

        <ImagemButton
<<<<<<< HEAD
          imagem="https://cdn-icons-png.flaticon.com/512/60/60580.png?w=740&t=st=1653612073~exp=1653612673~hmac=3d4d7950f744963abb3ce8f5dbf086ba419ad0c726a2a381c0b8bbf61d2a69ee"
=======
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
