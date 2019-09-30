import React, {Component} from 'react';
import _ from 'lodash';
import {Container, Row, Col} from "reactstrap";
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import {VideoList, VideoListItem} from './components/VideoList';
import API from './utils/API';



class App extends Component{

  state= {
    videos: [],
    selectedVideo: null

  }
//called once on page load for things that you don't want re-rendering
  componentDidMount(){
      this.searchYouTube("Foreigner");
      
  };

  searchYouTube = (term) =>{
    API.searchYouTube(term)
      //capture return value from call above
      .then(res => this.setState({videos: res.data.items, selectedVideo: res.data.items[0]}))
      .catch(err => console.log(err))
  }

  onVideoSelect = (selectedVideo) => {
      this.setState({selectedVideo});



  };

  throttledSearch = _.debounce(this.searchYouTube, 800);
  


  
  render (){
    return (
      <Container>
        <Row>
          <Col>
          <h1>React Search</h1>
          <SearchBar searchYouTube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
        <Col md="8">
          <VideoDetail selectedVideo={this.state.selectedVideo}/>
        </Col>
        <Col md="4">
          <VideoList >
          {/* takes in array and returns array with dfferent params */}
            {this.state.videos.map(video => (
              <VideoListItem 
              video={video} 
              key={video.id.videoId}
              selectedVideo={this.state.selectedVideo}
              onVideoSelect={this.onVideoSelect}
              // give VideoListItems keys to above, where they are destructed in the component
              />
            ))}
            </VideoList>
        
        </Col>
        </Row>
      </Container>
    );
  };
}


export default App;
