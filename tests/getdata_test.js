const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.API_KEY;

const channelId = 'UCN3VUKF45e6dmPM1pG3xTIg';

const getChannelData = async (channelId) => {
  try {
    // Make a request to the YouTube Data API to get channel information
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=status,snippet,contentDetails,statistics&id=${channelId}&key=${apiKey}`
    );

    // Extract relevant information from the API response
    const channelData = response.data.items[0];
    
    // Output the channel information
    console.log('Channel ID:', channelData.id);
    console.log('Channel Title:', channelData.snippet.title);
    console.log('Published At:', channelData.snippet.publishedAt);
    console.log('View Count:', channelData.statistics.viewCount);
    console.log('Subscriber Count:', channelData.statistics.subscriberCount);
    console.log('Video Count:', channelData.statistics.videoCount);
    console.log('Playlist ID:', channelData.contentDetails.relatedPlaylists.uploads);
    console.log('Is linked:', channelData.status.isLinked);
    console.log('Status:', channelData.status.longUploadsStatus);
    // Add more fields as needed

  } catch (error) {
    console.error('Error fetching data from YouTube API:', error.message);
  }
};

getChannelData(channelId)
