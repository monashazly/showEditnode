const fs=require('fs')
const chalk = require("chalk")
const { join } = require('path')
const readFromJSON = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('data.json'))
        if(!Array.isArray(data)) throw new Error()
        console.log(chalk.blue("data featched"))
    }
    catch(e){
        data = []
        console.log(chalk.red("array rested"))
    }
    return data
}
const writeDatatoJson=(data)=>{

    data=JSON.stringify(data)
    fs.writeFileSync('data.json',data)

}
    


// }
class myFunctions{
    static ShowAllData=()=>{
        const data= readFromJSON()
        if(!data.length&& (Array.isArray(data))) console.log(chalk.red('there\'s no user'))
        else{ data.forEach((user,i)=>{
            console.log(`${i} your name is ${user.name} and your age is ${user.age}`)
        })}
       
    }
static Adduser=(user)=>{
 
  const  data=readFromJSON();
  
         data.push({id:Date.now(),...user})
         
         writeDatatoJson(data)
         console.log(chalk.green('data added successfully'))



}
static DeleteUser=(id)=>{
   let  data=readFromJSON()
  let  newData=data.filter(u=>u.id!=id)
  if(newData.length==data.length)console.log(chalk.red('no user found'))
  else{
    writeDatatoJson(newData)
    console.log(chalk.green('user Deleted'))}


}
static ShowUser=(id)=>{
    const data =readFromJSON()
   let showedData= data.find(u=> u.id=id)
   showedData=JSON.stringify(showedData)
   console.log(chalk.greenBright(`the data is ${showedData}`))

}
}

    module.exports=myFunctions