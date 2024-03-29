'use strict';

var Promise = require('bluebird'),
  crypto = Promise.promisifyAll(require('crypto')),
  jwt = require('jwt-simple'),
  db = require('../util/database');

const JWT_SECRET = 'my_super_secrect_key';
const JWT_ALGORITHM = "HS256";
const CRYPTO_LENGTH = 128;
const CRYPTO_ITERATIONS = 4096;

// Compose JWT with user information.
function createJWT(email) {
  return getUser(email)
    .then(user => {
      let token = jwt.encode({
        jwt_id: user.jwt_id,
        name: user.name,
        email: email
      }, JWT_SECRET, JWT_ALGORITHM);
      return Promise.resolve(token);
    })
    .catch(err => {
      return Promise.reject('User not found');
    });
}

function decodeToken(token) {
  return jwt.decode(token, JWT_SECRET, false, JWT_ALGORITHM);
}

// Returns a promise that resolves to a token with the given length
function createToken(length) {
  return crypto.randomBytesAsync(length || CRYPTO_LENGTH);
}

// Returns a promise that resolves to a hash composed by a password and a salt.
function computeHash(password, salt) {
  return crypto.pbkdf2Async(password, salt, CRYPTO_ITERATIONS, CRYPTO_LENGTH);
}

// Return a promise that resolves to the user queried by the email.
function getUser(email) {
  console.log(db.getUser(email));
  return db.getUser(email).then(result => {
    console.log(result);
    const user = result;
    if (!user) return Promise.reject('User not found');
    return Promise.resolve(user);
  });
}

function createUser(User) {
  const getSalt = createToken(),
    getHash = getSalt.then(salt => {
      return computeHash(User.clearPassword, salt.toString('base64'));
    }),
    getJWT = getHash.then(hash => {
      return createToken(32);
    });

  return Promise.join(getSalt, getHash, getJWT, function (salt, hash, jwt_id) {
    return db.putUser({
      email: User.email,
      name: User.name,
      companyName: User.companyName,
      verified: User.verified,
      salt: salt.toString('base64'),
      hash: hash.toString('base64'),
      jwt_id: jwt_id.toString('base64')
    }).then(result => Promise.resolve('Success'));
  }).catch(err => Promise.reject(err));
}

function confirmUser(email, context) {
  return db.confirmUser(email).then(function (data) {
    return context.done(data);
  });
}

module.exports = {
  createJWT: createJWT,
  computeHash: computeHash,
  getUser: getUser,
  createUser: createUser,
  confirmUser: confirmUser,
  decodeToken: decodeToken
};
