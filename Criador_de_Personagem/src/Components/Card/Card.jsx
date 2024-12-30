import React, { useState } from "react";
import "./Card.css";

// Não é necessário importar as imagens agora, apenas referenciar o caminho correto
const images = [
  "/Personagens/1.jpg",
  "/Personagens/2.jpg",
  "/Personagens/3.jpg",
  "/Personagens/4.jpg",
  "/Personagens/5.jpg",
  "/Personagens/6.jpg",
];

export default function Card() {
  const ages = Array.from({ length: 80 - 18 + 1 }, (_, i) => 18 + i);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="Ficha">
      <h2>Crie sua ficha de personagem</h2>

      <div className="ImagemPersona">
        <p>Escolha uma imagem</p>
        <div className="ImageSelector">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Personagem ${index + 1}`}
              className={selectedImage === image ? "selected" : ""}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="SelectedImage">
          <p>Imagem selecionada:</p>
          <img src={selectedImage} alt="Imagem Selecionada" />
        </div>
      </div>

      <div className="Nomes">
        <p className="nome1">
          Escolha seu nome
          <input type="text" placeholder="Digite o nome"></input>
        </p>
        <p className="nome2">
          Escolha seu sobrenome
          <input type="text" placeholder="Digite o sobrenome"></input>
        </p>
      </div>

      <div className="Idade">
        <p>Idade</p>
        <select>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

      <div className="Raça">
        <p>Raças</p>
        <select>
          <option>Meio-Gigante</option>
          <option>Anão</option>
          <option>Thiefling</option>
          <option>Draconato</option>
          <option>Arakoka</option>
          <option>Humano</option>
          <option>Halfling</option>
          <option>Gnomo</option>
          <option>Fada</option>
          <option>Elfo</option>
          <option>Elfo-Negro</option>
          <option>Meio-orc</option>
        </select>
      </div>

      <div className="Classes">
        <p>Classes</p>
        <select>
          <option>Bárbaro</option>
          <option>Guerreiro</option>
          <option>Paladino</option>
          <option>Clérigo</option>
          <option>Bruxo</option>
          <option>Feiticeiro</option>
          <option>Mago</option>
          <option>Monge</option>
          <option>Ladrão</option>
          <option>Vagabundo</option>
        </select>
      </div>
    </div>
  );
}
