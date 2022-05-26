import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQG05TZMTL8S2g/profile-displayphoto-shrink_800_800/0/1643895335794?e=1658966400&v=beta&t=kmc-F3nqt2Fn29DgPBdR-QtD-oyVAN_X9r4u6oY8R4Q"
          nome="Nicole Peiker"
          descricao="Curitibana, apaixonada por cachorros, viagens e comidas."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

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
          nome="Agencia Bom Jesus"
          descricao="Agencia de turismo - Socia administradora"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
