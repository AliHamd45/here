// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>data.map((item)=>console.log(item.title)))
// .catch((error)=>console.error("A7a"));

//  async function data(){
//     let x = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let  y  = await x.json()
//     y.map((item)=>console.log(`Titile : ${item.title} Id : ${item.id}`))
//     return "تمام يا حماده"
// }
// data()
// .then((x)=>console.log(x))
// .catch((error)=>console.log(error))

axios.get("https://jsonplaceholder.typicode.com/posts")
.then((x)=>x.data.map((item)=>console.log(item.title)))