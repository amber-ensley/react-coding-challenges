import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import makeRequest from '../api/makeRequest';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      paths: ['new-releases', 'featured-playlists', 'categories'],
      newReleases: [],
      playlists: [],
      categories: []
    };
  };

  componentDidMount() {
    this.state.paths.forEach(path => {
      return makeRequest(path).then(data => {
        switch(path) {
          case 'new-releases':
            this.setState({newReleases: data.data.albums.items});
            break;
          case 'featured-playlists':
            this.setState({playlists: data.data.playlists.items});
            break;
          case 'categories':
            this.setState({categories: data.data.categories.items});
            break;
          default: return;
        }
      })
      
    })
    
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
