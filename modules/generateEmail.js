const axios = require('axios');

const generateEmail = async () => {
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
            'cookie': 'XSRF-TOKEN=eyJpdiI6IkNYQ2p6bGkvUzVlMG1tbk5aZFdOSUE9PSIsInZhbHVlIjoia3VWZmZOVXhZaXFYaHM2eEpjRVZRbTF4ZW1DUEY5V3F0WkpPbzVjUkowRXJUNldvMXphMHI4Vmc2ZlM1WDV6dFYvMHpQZ0taanllZ09HTHlYdDdFK05GTzBraXo5Q3FmS3BZcEQ4cEMzZWdVK2RzendvYUxTU3Y4dTU0M1hUcEsiLCJtYWMiOiI1NzEzZWZkMDUxZDNmOTE1YjQxN2Y0YjJlMzdjMmIzYWQzZDdkOGU4N2JjOWM2NGFkNzVjMDZmNDY1MjI5OTk2IiwidGFnIjoiIn0%3D; gmailnator_session=eyJpdiI6Iit6dWpoalhPMndHSXBGaXJ1N3crdXc9PSIsInZhbHVlIjoibUJJNlVOTWJFMFB1citCaVFjZ1dXUFZBSHEyLzlrdW9VWm5SSTZYV3o0YWM2cHJPOVQwZlNYcUhXRHlBV1ozWkNieFFuMkxkRnJMaXNvSStuVmpHR0xOZE5XbHhoTUd5U3gvSFkvTkoxcTNOWFRKWlQrSTM0Si9xNEphNk1DSTgiLCJtYWMiOiIzM2Y4NzE2ZmI3NjJiN2I2ZDMzZDk1M2U5NzA1ZWEzMTJiZThmNjYxYjcyZjk2NGQ0M2JhZDQ5MjAxN2Y0MTc0IiwidGFnIjoiIn0%3D',
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
            'x-xsrf-token': 'eyJpdiI6IkQ0Q1R1MWtrWFBCOVhrbS9saHNpOXc9PSIsInZhbHVlIjoiNXFoRjFlSlNpRFYzVVZwR210aFRPcmhXVDhIRU5mbHF4VWlBVlpTZ2kvakhDRlR5Q3NkTlZRcCtMVXZIYm01bXVNa1VhRjU3THRuRFh0UzJVNEliK0dmMlNQZXFvVytRYTBCZDF1cHlqd3FqdVd3Z2lHWXcxUGZzME83YjNiSWkiLCJtYWMiOiIxMzAzYWZiYzI3OTBmNjU1NTlkNDAxODExMTg3ZDU3YjAyZTZkZjFhYzllNjIzOGRiY2NiMzcwZGVlN2IxZmNhIiwidGFnIjoiIn0='
          }
        });
    // console.log(GenerateEmail.headers)
    let GeneratedEmail = GenerateEmail.data.email[0];
    return GeneratedEmail;
};

module.exports = generateEmail;