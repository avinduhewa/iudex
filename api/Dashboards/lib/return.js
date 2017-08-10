'use strict';

module.exports.returnData = (data, context) => {
  return context.succeed({
    statusCode: data.status,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  });
};
