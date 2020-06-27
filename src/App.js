import React, { Component } from 'react';
import Searchbar from './component/Searchbar';
import fetchImages from './services/pixabay-api/pixabay-api';
import ImageGallery from './component/image-gallery';
import Button from './common/Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

export default class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    images: [],
    haveImage: true,
    imagesLength: 0,
    spinner: false,
  };

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    if (prevState.query !== this.state.query) {
      this.fetchServicesApi();
    }
  }

  formSubmit = ({ query }) => {
    this.setState({
      query: query,
      currentPage: 1,
      images: [],
    });
  };

  fetchServicesApi = () => {
    this.setState({ spinner: true });

    const { query, currentPage } = this.state;
    const option = { query, currentPage };

    fetchImages(option)
      .then(images => {
        if (images.length === 0) {
          this.setState({
            haveImage: false,
            imagesLength: 0,
            spinner: false,
          });
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
          haveImage: true,
          imagesLength: images.length,
          spinner: false,
        }));
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />

        {this.state.haveImage ? (
          <ImageGallery images={this.state.images} />
        ) : (
          <h2 className="ImageGallery-title">Oops, no images</h2>
        )}

        {this.state.spinner && (
          <div className="Loader">
            <Loader
              type="MutatingDots"
              color="#303f9f"
              secondaryColor="#303f9f"
              width={100}
            />
          </div>
        )}

        {this.state.images.length > 0 &&
          this.state.imagesLength === 12 &&
          !this.state.spinner && (
            <Button title="Load more" onClick={this.fetchServicesApi} />
          )}
      </>
    );
  }
}
