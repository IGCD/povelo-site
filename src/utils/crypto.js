import crypto from 'crypto-js';

export const getHmacSHA256 = (plain) => {
    return crypto.HmacSHA256(plain, process.env.REACT_APP_SECRET_KEY).toString(crypto.enc.Hex);
}