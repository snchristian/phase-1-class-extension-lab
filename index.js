
class Polygon{
    constructor(array){
        this.array= array
    }
     get countSides(){
      return this.array.length
    }
   get perimeter(){
       return this.array.reduce((element, value) => element + value)
   }
}

class Triangle extends Polygon{
  
    get isValid(){

        //if (this.array.slice(0,2).reduce((element, value) => element + value) > this.array.slice(2,3)){
            //return true
        //}
         if (this.array.slice(1,3).reduce((element, value) => element + value) > this.array.slice(0,1)){
             return true
        }
        else{
            return false
        }
  }

  }

  class Square extends Polygon{
      get isValid(){
          if(this.array.every(element => element === this.array[0])){
              return true 
          }
          else {
              return false
          }
      }

    get area(){
        let area = this.array[0] * this.array[0]
        return area
    }
  }