let array = [a(),b(),c()]

const getAllData = async (array) => {
    let i = 0
    let data = []
   const { res }  = await array[i]()
   if(res){
    data.push(res)
    i++;
    getAllData(array)
   }
   return data
}