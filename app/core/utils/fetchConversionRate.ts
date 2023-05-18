const myHeaders = new Headers();
myHeaders.append("apikey", "Or1fpFKGIOYxwMhZDtroTe5Khl2BGORP");

const requestOptions:RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
export const fetchRate=async(to:string,amount:string)=>{

const a = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=USD&amount=${amount}`, requestOptions)
const res =await a.json()
return res;

}