import React from 'react';
import './DogImages.css';

class DogImages extends React.Component {

  constructor(props) {
    super(props);
    console.log("construtor");

    this.state = {
      imageDoguinho: "",
      isLoading: true,
      bread: ''
    }

    this.fetchImage = this.fetchImage.bind(this);
  }

  //a requisição deve ser assincrona! async await (alterar isso depois)
  fetchImage() {
    this.setState({ isLoading: true }, () => {
      const requestHeader = { Header: { Accept: "aplication/json" } }
      fetch('https://dog.ceo/api/breeds/image/random', requestHeader)
      .then(response => response.json())
      .then(response =>
        this.setState({
          imageDoguinho: response.message,
          isLoading: false
        }))
    })
  }

  //essa funcao irá executar isso quando o componente esta sendo montado - nao da tempo para o usuario fazer outra acao. A imagem do dog vai aparecer primeiro na tela. Ou seja, enquanto estiver montando um componente a imagem de um dog sera mostrada.
  componentDidMount() {
    console.log("componenteDidMount");
    this.fetchImage();
  }

  //verificar se deve atualizar o componente (should)
  shouldComponentUpdate() {
    const {imageDoguinho} = this.state
    const isBreedTerrier = imageDoguinho.includes('terrier')
    if(isBreedTerrier)
      alert('Terrier')

    return true;
    //return !isBreedTerrier
    //return isBreedTerrier ? false : true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {imageDoguinho} = prevState
    localStorage.setItem("imageDoguinho", imageDoguinho)
  }


  render () {
    const {isLoading} = this.state

    console.log("render")
    return (
      <div className="container">
        <h1 className="main-title">Doguinhos fofíneos</h1>
        {isLoading ? <p>Loading...</p> : <img src={this.state.imageDoguinho} alt="imagem doguinho" /> }
        <button onClick={this.fetchImage}>Required New Dog</button>
      </div>
    )
  }
}

export default DogImages;