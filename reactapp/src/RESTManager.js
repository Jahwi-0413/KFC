import axios from 'axios'
import FormData from 'form-data'

axios.defaults.baseURL = 'http://localhost:8000';
export const sendFontFile = (file, callback) =>      //사용자가 입력한 ttf 파일을 서버로 전송
{
  const formData = new FormData();
  formData.append('ttf_file', file);
  axios.post('/api/resTTF/', formData, {
    header: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      "X-CSRFToken": 'csrfToken'
    },
  }).then((response) =>
  {
    if (response.status === 200)
      callback(true);
  });
};

export const sendTemplateImage = (file, callback) =>      //사용자가 입력한 ttf 파일을 서버로 전송
{
  const formData = new FormData();
  formData.append('file', file);
  axios.post('/api/resTemplate/', formData, {
    header: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      "X-CSRFToken": 'csrfToken'
    },
  }).then((response) =>
  {
    if (response.status === 200)
      callback(true);
    else callback(false);
  });
};

export const sendSentenceImage = (file, callback) =>      //사용자가 입력한 ttf 파일을 서버로 전송
{
  const formData = new FormData();
  formData.append('file', file);
  axios.post('/api/resSentence/', formData, {
    header: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      "X-CSRFToken": 'csrfToken'
    },
  }).then((response) =>
  {
    if (response.status === 200)
      callback(true);
    else
      callback(false);
  });
};

export const requestKillProcess = () =>
{
  axios.get('/api/resKillProcess/');
}