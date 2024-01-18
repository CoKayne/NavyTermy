const axios = require('axios');
const cheerio = require('cheerio');

const getChannelId = async (url) => {
  try {
    // Step 1: Fetch HTML content of the YouTube channel page
    const response = await axios.get(url);
    const htmlContent = response.data;

    // Step 2: Use Cheerio to parse HTML and extract the channel ID
    const $ = cheerio.load(htmlContent);
    const channelUrl = $('meta[property="og:url"]').attr('content');
    const channelId = channelUrl.split('/').pop();

    return channelId;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

const youtubeChannelUrl = 'https://www.youtube.com/channel/UCIInmFkJI-zBeYOurOzchPg';

// Call the function and log the result
getChannelId(youtubeChannelUrl)
  .then((channelId) => {
    console.log('Channel ID:', channelId);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
