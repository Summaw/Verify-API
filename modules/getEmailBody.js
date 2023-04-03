const axios = require('axios');

const getEmaiBody = async (email, messageID, cookies, x_xsfr_token) => {
    const getEmaiBody = await axios({
        method: 'POST',
        url: 'https://www.emailnator.com/message-list',
        headers: {
            'content-type': 'application/json',
            'cookie': cookies,
            'x-xsrf-token': x_xsfr_token
          },
          data: `{"email":"${email}", "messageID": "${messageID}"}`
    })
    
    const EmailContents = getEmaiBody.data.split(`class="elementToProof">`)[1].split(`</div>`)[0]
    return EmailContents;
};

module.exports = getEmaiBody;
