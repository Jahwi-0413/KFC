//import axios from 'axios'
//import multer from 'multer'
//import FormData from 'form-data'

//const upload = multer()

// const sendFontFile = () =>      //사용자가 입력한 ttf 파일을 서버로 전송
// {
//     axios.post("/upload", upload.single("filepond"),
//         async (req, res, next) =>
//         {
//             try
//             {
//                 // buffer를 FormData로 감쌈
//                 const formData = new FormData();
//                 formData.append("filepond", req.file.buffer, {
//                     filename: req.file.originalname,
//                 });

//                 // 다른 서버로 전송
//                 const result = await axios.post(
//                     'url',
//                     formData,
//                     {
//                         headers: {
//                             ...formData.getHeaders(),
//                             "Content-Length": formData.getLengthSync(),
//                             apikey: "apikey",
//                             host: "hosts",
//                         },
//                         httpsAgent: new https.Agent({
//                             rejectUnauthorized: false,
//                         }),
//                     }
//                 );
//                 res.status(200).json(result.data);
//             } catch (err)
//             {
//                 logger.error(err);
//                 res
//                     .status(500)
//                     .send(`${err}`);
//             }
//         })
// }    //일단 코드만 적어놓고 사용법 알아볼 예정

