const httpStatus = require('http-status');
const ApiError = require('./ApiError');
const stream = require('stream')

const ApiResponder = (res, statusCode, message, payload, extra = {}) => {
  res.status(statusCode).send({
    status: statusCode,
    success: statusCode === httpStatus.OK || statusCode === httpStatus.CREATED ? 'true' : 'false',
    message,
    data: payload,
    ...extra,
  });
};

const successResponse = (res, payload = {}, message = 'Success') => {
  return ApiResponder(res, httpStatus.OK, message, payload);
};

const errorResponse = (res, message = null, statusCode = httpStatus.INTERNAL_SERVER_ERROR, extra = {}) => {
  const httpMessage = message || httpStatus[statusCode];
  return ApiResponder(res, statusCode, httpMessage, {}, extra);
};

const abort = (status, message, next = null) => {
  if(next){
    next(new ApiError(status, message));
  }else{
    throw new ApiError(status, message);
  }
};

const abortIf = (condition, status, message, next = null) => {
  if (condition) abort(status, message, next);
};


const abortUnless = (condition, status, message) => {
  if (!condition) abort(status, message);
};

const downloadResponder = (res, filepath, filename) => {
  res.download(filepath, filename);
};

const download = (res, filepath, filename) => {
  console.log('About to download');
  return downloadResponder(res, filepath, filename);
};

const downloadPdfFile = async (fileData, res, fileName) => {
  var fileContents = Buffer.from(fileData, 'base64');

  var readStream = new stream.PassThrough();
  readStream.end(fileContents);

  res.set('Content-disposition', 'attachment; filename=' + fileName);
  res.set('Content-Type', 'application/pdf');

  readStream.pipe(res);
};

const downloadFile = async (fileDate, res, fileName, content_type) => {
  var fileContents = Buffer.from(fileDate, 'base64');

  var readStream = new stream.PassThrough();
  readStream.end(fileContents);

  res.set('Content-disposition', 'attachment; filename=' + fileName);
  res.setHeader('Content-Type', content_type);

  return await readStream.pipe(res);
};

module.exports = { ApiResponder, successResponse, errorResponse, abort, abortIf, abortUnless, downloadPdfFile, download, downloadFile };
