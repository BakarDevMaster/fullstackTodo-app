
import { Deletetodo, Gettodo } from "./action";
import Inputfield from "./components/Inputfield";
import Tasklist from "./components/Tasklist";

export interface Task{
  id?:number;
  task : string
}

export default async function Home() {

 
    const list:any = await Gettodo("http://127.0.0.1:8080/todos");
 
 

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-red-600 w-screen h-screen">
      <div className="py-20">
      <div className="mx-auto  bg-white rounded-md max-w-screen-md p-4 ">
          <h1 className="text-4xl font-bold text-center m-4">Todo APP</h1>
      <Inputfield/>
      </div>
      <Tasklist list = {list}/>
      </div>
    </div>
  );
}
