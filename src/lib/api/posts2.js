import client from './client';

//토익 등록
export const writePost2 = ({title, body, tags, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate}) =>
  client.post('/api/toeic/add', {title, body, tags, toeicIdCode, toeicName, toeicRgstDate, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate});

//토익 디테일 페이지
export const readPost2 = toeicIdCode => client.get(`api/toeic/update_form/${toeicIdCode}`);

//토익 조회
export const listPosts2 = ({ page, username, tag, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicRgstDate, toeicUpdateDate}) => {
    return client.get(`/api/toeic/list`, {
      params: { page, username, tag, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicRgstDate, toeicUpdateDate},
    });
  };

//토익 수정
export const updatePost2 = ({ id, title, body, tags, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate }) =>
  client.post(`/api/missing/update/`, {
    title,
    body,
    tags,
    toeicIdCode,
    toeicName,
    toeicSsn,
    toeicAddress,
    toeicExamDate,
    toeicExamLoc,
    toeicRgstDate,
    toeicUpdateDate
  });

//토익 삭제
 export const removePost2 = (toeicIdCode) => client.get(`/api/toeic/remove/${toeicIdCode}`);



 
 export const uploadPost = ({idCode, imageFiles}) =>
  client.post('api/image/missing/upload', {idCode, imageFiles}); 
