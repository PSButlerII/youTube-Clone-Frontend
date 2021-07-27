import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';
import axios from 'axios';
import MainVideo from './components/mainVideo/mainVideo';
import CommentForm from './components/commentForm/commentForm';
import CommentTable from './components/commentTable/commentTable';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            response: {
                "data": {
                    "kind": "youtube#searchListResponse",
                    "etag": "ssCzOYhlR0juJdy1MyTaH8MtncE",
                    "nextPageToken": "CAUQAA",
                    "regionCode": "US",
                    "pageInfo": {
                        "totalResults": 1000000,
                        "resultsPerPage": 5
                    },
                    "items": [
                        {
                            "kind": "youtube#searchResult",
                            "etag": "8MuwmvXaskwUpSIj3lnsAAf67E0",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "eX2qFMC8cFo"
                            },
                            "snippet": {
                                "publishedAt": "2020-10-29T12:00:27Z",
                                "channelId": "UCYPrd7A27nLhQONcCIfFTaA",
                                "title": "Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life",
                                "description": "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH... Subscribe to watch the best, cutest ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/eX2qFMC8cFo/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/eX2qFMC8cFo/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/eX2qFMC8cFo/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "Funny Cats Life",
                                "liveBroadcastContent": "none",
                                "publishTime": "2020-10-29T12:00:27Z"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "oif9asz5gWXvbQ2aZ340xK4gk8g",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "wxs5r2__T0w"
                            },
                            "snippet": {
                                "publishedAt": "2021-07-26T17:27:22Z",
                                "channelId": "UCjDhQK5hSg7JEg8UYG-62AQ",
                                "title": "FUNNY AND CUTE CAT VIDEOS TO START YOUR WEEK! 2021😸 | YUFUS",
                                "description": "Hi cat lovers! The best and funniest cat videos ever! Cats are part of our life, we laugh at them so much.Funny cats are so adorable and cute. Just look at all ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/wxs5r2__T0w/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/wxs5r2__T0w/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/wxs5r2__T0w/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "Yufus",
                                "liveBroadcastContent": "none",
                                "publishTime": "2021-07-26T17:27:22Z"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "lClStK4d_b12s58szNUj-NhQPDk",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "hY7m5jjJ9mM"
                            },
                            "snippet": {
                                "publishedAt": "2017-05-31T09:30:02Z",
                                "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
                                "title": "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
                                "description": "Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "Tiger FunnyWorks",
                                "liveBroadcastContent": "none",
                                "publishTime": "2017-05-31T09:30:02Z"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "KeKXF6-THOnH0HmZc5QbbZgfPbQ",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "2gZONZ1I4Ko"
                            },
                            "snippet": {
                                "publishedAt": "2020-10-10T07:17:37Z",
                                "channelId": "UCAmhbG40GSFEJEa-6Yj8zAQ",
                                "title": "CATS will make you LAUGH YOUR HEAD OFF 😆😹🤣 Funny CAT compilation",
                                "description": "CATS will make you LAUGH YOUR HEAD OFF Funny CAT compilation Thanks For Watching ! Please Like Share & Comment If You Like This Video !",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/2gZONZ1I4Ko/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/2gZONZ1I4Ko/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/2gZONZ1I4Ko/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "Cute Babies and Pets TV",
                                "liveBroadcastContent": "none",
                                "publishTime": "2020-10-10T07:17:37Z"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "iUlIsxpDVc8XU2S-839_oW6BRnQ",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "zQIawgxoox4"
                            },
                            "snippet": {
                                "publishedAt": "2020-06-24T13:25:19Z",
                                "channelId": "UC8hC-augAnujJeprhjI0YkA",
                                "title": "Baby Cats - Cute and Funny Cat Videos Compilation #35 | Aww Animals",
                                "description": "Baby cats are amazing creature because they are the cutest and most funny. Watching funny baby cats is the hardest try not to laugh challenge. This is the cutest ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/zQIawgxoox4/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/zQIawgxoox4/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/zQIawgxoox4/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "Aww Animals",
                                "liveBroadcastContent": "none",
                                "publishTime": "2020-06-24T13:25:19Z"
                            }
                        }
                    ]
                } 
            }                                 
        }
    }

    youTubeVideo = async (searchTerm) => {     
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyDMsnff0u4A96PStCHpTFtEkPLS_VD9W5A`)
        console.log(response)
        this.setState({
            selectedVideoId: response.data.items[0].id.videoId,
            selectedVideoTitle:response.data.items[0].snippet.title,
            selectedVideoDescription:response.data.items[0].snippet.description,
            selectedVideoThumbnail:response.data.items[0].snippet.thumbnails.high.url,

            selectedVideoIdOne: response.data.items[1].id.videoId,
            selectedVideoTitleOne:response.data.items[1].snippet.title,
            selectedVideoDescriptionOne:response.data.items[1].snippet.description,
            selectedVideoThumbnailOne:response.data.items[1].snippet.thumbnails.high.url,

            selectedVideoIdTwo: response.data.items[2].id.videoId,
            selectedVideoTitleTwo:response.data.items[2].snippet.title,
            selectedVideoDescriptionTwo:response.data.items[2].snippet.description,
            selectedVideoThumbnailTwo:response.data.items[2].snippet.thumbnails.high.url,

            selectedVideoIdThree: response.data.items[3].id.videoId,
            selectedVideoTitleThree:response.data.items[3].snippet.title,
            selectedVideoDescriptionThree:response.data.items[3].snippet.description,
            selectedVideoThumbnailThree:response.data.items[3].snippet.thumbnails.high.url,

            selectedVideoIdFour: response.data.items[4].id.videoId,
            selectedVideoTitleFour:response.data.items[4].snippet.title,
            selectedVideoDescriptionFour:response.data.items[4].snippet.description,
            selectedVideoThumbnailFour:response.data.items[4].snippet.thumbnails.high.url,        
          
        })
        this.setState({
            videos: response.data,    
        });
        console.log(this.state.videos)
        console.log(this.state.selectedVideoId)
        }
        
        async getAllComments(e) {
            await axios.get("http://127.0.0.1:8000/comment/")
            .then(response => this.setState({
                comments: response.data,
                id: this.state.comments.id
            }));
            console.log(this.state.comments)  
        }

        componentDidMount() {
            this.getAllComments();
        }
    
        addComment = (comment) => {
            console.log (comment)
            console.log(this.state.comments)
            axios.post(`http://127.0.0.1:8000/comment/`, comment)
            this.setState 
                ({
                comments: [...this.state.comments, comment],          
            });        
        }

        addLike = (id) => {
                axios.patch(`http://127.0.0.1:8000/comment/${id}/`)
                this.getAllComments();                 
        }
        
        addDislike = (id) => {
            axios.put(`http://127.0.0.1:8000/comment/${id}/`)
            this.getAllComments();               
        }

        

render() {
    return(
        <React.Fragment className="center">
            <SearchVideo videoResults={this.youTubeVideo} />
            <h1>MAIN VIDEO</h1>
            <h2>{this.state.selectedVideoTitle}</h2>
            <MainVideo youTubeVideo={this.state.selectedVideoId} />
            <p>{this.state.selectedVideoDescription}</p> <hr /><br></br>
            <CommentForm video_id={this.state.selectedVideoId} addComment={this.addComment}/>
            <CommentTable comments={this.state.comments} video_id={this.state.selectedVideoId} addLike={this.addLike} addDislike={this.addDislike} />

            <h1>RELATED VIDEOS</h1>
            <h2>{this.state.selectedVideoTitleOne}</h2>
            <MainVideo youTubeVideo={this.state.selectedVideoIdOne} />
            <p>{this.state.selectedVideoDescriptionOne}</p>
            
            <h2>{this.state.selectedVideoTitleTwo}</h2>
            <MainVideo youTubeVideo={this.state.selectedVideoIdTwo} />
            <p>{this.state.selectedVideoDescriptionTwo}</p>  
            
            <h2>{this.state.selectedVideoTitleThree}</h2>
            <MainVideo youTubeVideo={this.state.selectedVideoIdThree} />            
            <p>{this.state.selectedVideoDescriptionThree}</p>

            <h2>{this.state.selectedVideoTitleFour}</h2>
            <MainVideo youTubeVideo={this.state.selectedVideoIdFour} />
            <p>{this.state.selectedVideoDescriptionFour}</p>  
            {/* <RelatedVideos relatedYouTubeVideo={this.selectedVideoId} />  */}
            </React.Fragment>
    )
  }
}
export default App;