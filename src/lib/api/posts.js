import client from './client';
import qs from 'qs';

//실종자 등록
export const writePost = ({ title, body, tags, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate }) =>
  client.post('/api/missing/add', { title, body, tags, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate});

//실종자 디테일 페이지 
export const readPost = (missingIdCode) => client.get(`/api/missing/update/form/${missingIdCode}`);

//실종자 조회
export const listPosts = ({ page, username, tag, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel , missingRgstDate, missingUpdateDate, missingUploaded }) => {
  return client.get(`/api/missing/list`, {
    params: { page, username, tag, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate, missingUploaded},
  });
};

//실종자 수정
export const updatePost = ({ id, title, body, tags, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate }) =>
  client.post(`/api/missing/update/`, {
    title,
    body,
    tags,
    missingIdCode,
    missingName, 
    missingSsn,
    missingAddress,
    missingDate,
    protectorName,
    protectorTel,
    missingRgstDate,
    missingUpdateDate
  });

//실종자 삭제
export const removePost = (missingIdCode) => client.get(`/api/missing/delete/${missingIdCode}`);




//토익 등록
export const writePost2 = ({title, body, tags, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate}) =>
  client.post('/api/toeic/add', {title, body, tags, toeicIdCode, toeicName, toeicRgstDate, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate});

//토익 디테일 페이지
export const readPost2 = toeicIdCode => client.get(`/api/toeic/update/form/${toeicIdCode}`);

//토익 조회
export const listPosts2 = ({ page, username, tag, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicRgstDate, toeicUpdateDate}) => {
    return client.get(`/api/toeic/list`, {
      params: { page, username, tag, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicRgstDate, toeicUpdateDate},
    });
  };

//토익 수정
export const updatePost2 = ({ id, title, body, tags, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate }) =>
  client.post(`/api/toeic/update/`, {
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
 export const removePost2 = (toeicIdCode) => client.get(`/api/toeic/delete/${toeicIdCode}`);



 export const writePost3 = ({title, body, tags, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate}) =>
 client.post('/api/csat/add', {title, body, tags, csatIdCode, csatName, csatRgstDate, csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate});


export const listPosts3 = ({ page, username, tag, csatIdCode, csatName, csatSsn, csatAddress, csatExamDate, csatExamLoc, csatRgstDate, csatUpdateDate}) => {
    return client.get(`/api/csat/list`, {
      params: { page, username, tag, csatIdCode, csatName, csatSsn, csatAddress, csatExamDate, csatExamLoc, csatRgstDate, csatUpdateDate},
    });
  };

export const readPost3 = csatIdCode => client.get(`/api/csat/update/form/${csatIdCode}`);

  export const updatePost3 = ({ id, title, body, tags, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate }) =>
  client.post(`/api/csat/update/`, {
    title,
    body,
    tags,
    csatIdCode,
    csatName,
    csatSsn,
    csatAddress,
    csatExamDate,
    csatExamLoc,
    csatRgstDate,
    csatUpdateDate
  });


  export const removePost3 = (csatIdCode) => client.get(`/api/csat/delete/${csatIdCode}`);
 
 export const uploadPost = ({idCode, imageFiles}) =>
  client.post('api/image/missing/upload', {idCode, imageFiles}); 

  export const help = ({ loginId }) =>
  client.get('/api/login/find/password', { loginId });


  export const resultPosts = ({ firstName, firstProbability, matchable, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel , missingRgstDate, missingUpdateDate }) => {
    return client.post(`api/image/missing/upload`, {
      params: { firstName, firstProbability, matchable, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate},
    });
  };

  export const send = (id) => client.get(`/api/image/learn/staasdasddsart`);


  export const listPosts4 = ({page, username, tag, memberName, email}) =>{
    const queryString = qs.stringify({
        page,
        username,
        tag,
        memberName, 
        email
    });
    return client.get(`api/member/list?${queryString}`);
}



  