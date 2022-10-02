export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const API_URL = config.API_URL;
  const GUID = config.GUID;
  const API_USER = config.API_USER;
  const API_PASS = config.API_PASS;

  var bodyRaw = JSON.stringify({
    "userName": API_USER,
    "password": API_PASS
  });

  const response = await fetch(API_URL + '/Auth/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'GUID': GUID,
      'redirect': 'follow'
    },
    body: bodyRaw
  })
    .then(response => response.json())
    .then(json => { return json });

  return response
})