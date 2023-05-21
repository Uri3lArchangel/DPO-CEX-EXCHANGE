import paypal from 'paypal-rest-sdk'

export const configPaypal=()=>{
paypal.configure({
    mode:'sandbox',
    client_id:'AdW3hk51Vpv9firL7YgQMrSyqIPpJ-SnJMjcRKDJXjgKHML7w1oaKx6eBcmXstm2GsMiYECo8ctuVY5f',
    client_secret:'EN4z5Wwx0abn_PZMVegHnQrolHqzrYjh1OogbjoKEaJjr_cEKguU1_3xv-AbjSKhRWlv3435XfRNFL8F'
})}