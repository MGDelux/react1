import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males,females} from "./file2";
import welcome from "./file3";
import MultiWelcome from './file3';
const x = {
  firstName: person.firstName, 
  email: person.email
}
const genders = [...males,...females]
const female2 = ["Helle",...females,"Tina"]
const genders2 = [...males,...female2]

console.log(genders)

console.log(genders2)

function App() {
  return (
      <div>
     <h2>EX: 1</h2>
     <p>{upper("please uppercase me1")}</p>
     <p>{upper("please uppercase me2")}</p>
     <p>{upper("please uppercase me3")}</p>
     <p>{text1}</p>
     <p>{text2}</p>
     <p>{text3}</p>
    <h2>EX: 2</h2>
    <p>{x.firstName}</p>
    <p>{x.email}</p>

    <h2>EX: 3</h2>
      <MultiWelcome></MultiWelcome>
    </div>
  
    
  );
}

export default App;
