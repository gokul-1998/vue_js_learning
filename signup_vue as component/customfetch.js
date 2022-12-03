export default async function customfetch(url,init_obj){
    let res=null
    let data=null

try{
    res = await fetch(url,init_obj)
}
catch {
    throw new Error('network conncection failed')
}
try{
    data=await res.json()
}
catch{
    throw new Error('Response body was not json')

}
if (res.ok){
    return data
} else{
    throw new Error(data.message)
}
}

// customfetch('http://127.0.0.1:8000/posts/',{
//     method:"POST",
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         "title": "cbab",
//         "content": "content",
//         "published": true
//       }),
// })
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.message)
// })