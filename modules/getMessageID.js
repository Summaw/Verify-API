const axios = require('axios');
const config = require('../config.json');

async function findQueryEmails(emails) {
  let queryEmails = [];

  while (queryEmails.length === 0) {
    for (const emailGroup of emails) {
      for (const email of emailGroup) {
        if (email.subject === config.SubjectToFind) {
          queryEmails.push(email);
        }
      }
    }

    if (queryEmails.length === 0) {
      console.log(clc.redBright(`[!] No emails yet from ${config.SubjectToFind}, checking again in 9 seconds...`))
      await new Promise((resolve) => setTimeout(resolve, 9000));
    }
  }
  return queryEmails;
}

const getMessageID = async (email, cookies, x_xsfr_token) => {
  const getMessageID = await axios({
    method: 'POST',
    url: 'https://www.emailnator.com/message-list',
    headers: {
      'content-type': 'application/json',
      'cookie': cookies,
      'x-xsrf-token': x_xsfr_token
    },
    data: `{"email":"${email}"}`
})

let dataArray = [getMessageID.data['messageData']]
// comment out the return dataArray; below if you are trying find a specific messageID.
return dataArray;

/* Uncomment the three lines below to return the messageID of the email you want to get the body (contents) of.
const queryEmails = await findQueryEmails(dataArray, GeneratedEmail);
const messageID = queryEmails[0].messageID;
return messageID;
*/

};
module.exports = getMessageID;
