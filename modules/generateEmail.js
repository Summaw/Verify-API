const axios = require('axios');

const generateEmail = async () => {
  const cookie = await axios.get('https://www.emailnator.com/');
  const XSFR = await cookie.headers['set-cookie'][0].split(';')[0];
  const gmailnator_session = await cookie.headers['set-cookie'][1].split(';')[0];
  const x_xsfr_token = XSFR.split('=')[1].split('%')[0];

    const GenerateEmail = await axios.post(
        'https://www.emailnator.com/generate-email',
        {
          'email': [
            'dotGmail'
          ]
        },
        {
          headers: {
            'authority': 'www.emailnator.com',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': `${XSFR}; ${gmailnator_session}`,
            'origin': 'https://www.emailnator.com',
            'referer': 'https://www.emailnator.com/',
            'sec-ch-ua': '"Not=A?Brand";v="8", "Chromium";v="110", "Opera GX";v="96"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 OPR/96.0.0.0',
            'x-requested-with': 'XMLHttpRequest',
            'x-xsrf-token': `${x_xsfr_token}=`
          }
        });
      let obj = {
        email: GenerateEmail.data.email[0],
        cookie: `${XSFR}; ${gmailnator_session}`,
        x_xsfr_token: `${x_xsfr_token}=`
      }
      /*
        comment the object above and uncomment the line below if you want to just generate the email not access it later on.
      */
    // let obj = GenerateEmail.data.email[0];
    return obj;
};

module.exports = generateEmail;
