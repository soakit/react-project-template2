import mockjs from 'mockjs';

function postLoginResult(req, res) {
  const { userName } = req.body;
  const resonse = {
    code: 1,
    message: 'success',
    data: { userId: '906BA0F3F2EA48C9A9CEC094B4178563', userName: 'test' },
  };
  if (userName === 'admin') {
    resonse.data.authority = ['guest', 'user', 'admin'];
  } else if (userName === 'user') {
    resonse.data.authority = ['guest', 'user'];
  } else {
    resonse.data.authority = ['guest'];
  }
  const result = mockjs.mock(resonse);
  return res.json(result);
}

export default {
  'POST /user/login': postLoginResult,
};
