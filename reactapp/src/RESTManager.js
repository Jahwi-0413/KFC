import axios from 'axios'
import FormData from 'form-data'

axios.defaults.baseURL = 'http://localhost:8000';
const sendFontFile = (file, callback) =>      //사용자가 입력한 ttf 파일을 서버로 전송
{

  const formData = new FormData();
  formData.append('ttf_file', file);
  axios.post('/getTtfFile/', formData, {
    header: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      "X-CSRFToken": 'csrfToken'
    },
  }).then((response) =>
  {
    if (response.status === 200)
      callback();
  });
};


export { sendFontFile }