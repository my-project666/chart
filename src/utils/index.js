import * as Cookie from 'js-cookie';
const key = 'authorization';
export let getToken=()=>{
    return Cookie.get(key);
};
export let setToken=(val)=>{
    Cookie.set(key,val,{expires:7});
};
export let removeToken=()=>{
    Cookie.remove(key);
};