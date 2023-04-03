const axios = require('axios');

const getEmaiBody = async (email, messageID) => {
    const getEmaiBody = await axios({
        method: 'POST',
        url: 'https://www.emailnator.com/message-list',
        headers: {
            'content-type': 'application/json',
            'cookie': 'XSRF-TOKEN=eyJpdiI6IkNYQ2p6bGkvUzVlMG1tbk5aZFdOSUE9PSIsInZhbHVlIjoia3VWZmZOVXhZaXFYaHM2eEpjRVZRbTF4ZW1DUEY5V3F0WkpPbzVjUkowRXJUNldvMXphMHI4Vmc2ZlM1WDV6dFYvMHpQZ0taanllZ09HTHlYdDdFK05GTzBraXo5Q3FmS3BZcEQ4cEMzZWdVK2RzendvYUxTU3Y4dTU0M1hUcEsiLCJtYWMiOiI1NzEzZWZkMDUxZDNmOTE1YjQxN2Y0YjJlMzdjMmIzYWQzZDdkOGU4N2JjOWM2NGFkNzVjMDZmNDY1MjI5OTk2IiwidGFnIjoiIn0%3D; gmailnator_session=eyJpdiI6Iit6dWpoalhPMndHSXBGaXJ1N3crdXc9PSIsInZhbHVlIjoibUJJNlVOTWJFMFB1citCaVFjZ1dXUFZBSHEyLzlrdW9VWm5SSTZYV3o0YWM2cHJPOVQwZlNYcUhXRHlBV1ozWkNieFFuMkxkRnJMaXNvSStuVmpHR0xOZE5XbHhoTUd5U3gvSFkvTkoxcTNOWFRKWlQrSTM0Si9xNEphNk1DSTgiLCJtYWMiOiIzM2Y4NzE2ZmI3NjJiN2I2ZDMzZDk1M2U5NzA1ZWEzMTJiZThmNjYxYjcyZjk2NGQ0M2JhZDQ5MjAxN2Y0MTc0IiwidGFnIjoiIn0%3D',
            'x-xsrf-token': 'eyJpdiI6IkQ0Q1R1MWtrWFBCOVhrbS9saHNpOXc9PSIsInZhbHVlIjoiNXFoRjFlSlNpRFYzVVZwR210aFRPcmhXVDhIRU5mbHF4VWlBVlpTZ2kvakhDRlR5Q3NkTlZRcCtMVXZIYm01bXVNa1VhRjU3THRuRFh0UzJVNEliK0dmMlNQZXFvVytRYTBCZDF1cHlqd3FqdVd3Z2lHWXcxUGZzME83YjNiSWkiLCJtYWMiOiIxMzAzYWZiYzI3OTBmNjU1NTlkNDAxODExMTg3ZDU3YjAyZTZkZjFhYzllNjIzOGRiY2NiMzcwZGVlN2IxZmNhIiwidGFnIjoiIn0='
          },
          data: `{"email":"${email}", "messageID": "${messageID}"}`
    })
    
    const EmailContents = getEmaiBody.data.split(`class="elementToProof">`)[1].split(`</div>`)[0]
    return EmailContents;
};

module.exports = getEmaiBody;