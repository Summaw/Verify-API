const axios = require('axios');
const config = require('../config.json');


async function findQueryMessages(number) {
    let queryMessages = [];

    while (queryMessages.length === 0) {
        for (const numberGroup of number) {
            for (const number of numberGroup) {
                if (number.from === config.PhonedFrom) {
                    queryMessages.push(number);
                }
            }
        }

        if (queryMessages.length === 0) {
            console.log(`[!] No messages yet from ${config.PhonedFrom}, Please Try Again!`)
            await new Promise((resolve) => setTimeout(resolve, 9000));
            process.exit(0);
        }
    }
    return queryMessages;
}

const getPhoneID = async (number, country_code, cookies, x_xsfr_token) => {
    const getNumberMessages = await axios.post(
        'https://smsnator.online/message-list',
        {
            'number': `${number}`
        },
        {
            headers: {
                'authority': 'smsnator.online',
                'accept-language': 'en-US,en;q=0.9',
                'cookie': cookies,
                'origin': 'https://smsnator.online',
                'referer': `https://smsnator.online/number/${number}`,
                'sec-ch-ua': '"Not=A?Brand";v="8", "Chromium";v="110", "Opera GX";v="96"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 OPR/96.0.0.0',
                'x-requested-with': 'XMLHttpRequest',
                'x-xsrf-token': x_xsfr_token
            }
        });

    let dataArray = [getNumberMessages.data]
    const queryMessages = await findQueryMessages(dataArray, number);
    const messageID = queryMessages[0].messageID;
    const messageContent = queryMessages[0].message;
    const messageFrom = queryMessages[0].from;
    const messageTime = queryMessages[0].time;

    let obj = {
        messageID: messageID,
        messageContent: messageContent,
        messageFrom: messageFrom,
        messageTime: messageTime
    }
    return obj;
}

module.exports = getPhoneID;