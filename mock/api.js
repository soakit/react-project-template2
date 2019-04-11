import mockjs from 'mockjs';

function postLoginResult(req, res) {
  const result = mockjs.mock({
    code: 1,
    message: 'success',
    data: { userId: '906BA0F3F2EA48C9A9CEC094B4178563', userName: 'test' },
  });
  return res.json(result);
}

export default {
  'POST /user/login': postLoginResult,
};
