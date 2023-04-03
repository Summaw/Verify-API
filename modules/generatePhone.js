const axios = require('axios');

const generateNumber = async () => {
  const cookie = await axios.get('https://smsnator.online/');
  const XSFR = await cookie.headers['set-cookie'][0].split(';')[0];
  const smsnator_session = await cookie.headers['set-cookie'][1].split(';')[0];
  const x_xsfr_token = XSFR.split('=')[1].split('%')[0];

  const GenerateNumber = await axios.post(
    'https://smsnator.online/generate-number',
    {
      'number': [
        'SE',
        'GB',
        'FR',
        'FI',
        'NL',
        'DK',
        'BE'
      ]
    },
    {
      headers: {
        'authority': 'smsnator.online',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': `${XSFR}; ${smsnator_session}`,
        'origin': 'https://smsnator.online',
        'referer': 'https://smsnator.online/',
        'sec-ch-ua': '"Not=A?Brand";v="8", "Chromium";v="110", "Opera GX";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 OPR/96.0.0.0',
        'x-requested-with': 'XMLHttpRequest',
        'x-xsrf-token': `${x_xsfr_token}=`,
      }
    }
  );
      let obj = {
        number: GenerateNumber.data.number,
        country_code: GenerateNumber.data.country_code,
        cookie: `${XSFR}; ${smsnator_session}`,
        x_xsfr_token: `${x_xsfr_token}=`
      }
      /*
        comment the  object above and uncomment the line below if you want to just generate the email not access it later on.
      */
    // let GeneratedNumber = GenerateNumber.data.number;
    return obj;
};

module.exports = generateNumber;