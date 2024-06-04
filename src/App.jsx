import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import OutPut from "./components/OutPut.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState(" ");
  const [hour, setHour] = useState("");
  const [subjects, setSubjects] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.length > 0) {

      const obj = {};
      obj.subject = inputValue;
      obj.hour = parseInt(hour);
      setSubjects([...subjects, obj]);
      
      setInputValue("");
      setHour("");
    } 
    else {
      alert("Add subject and hour");
    }
  }
  function handleInc(index) {
    let copyArr = [...subjects];
    copyArr[index].hour += 1;
    setSubjects(copyArr);
  }
  function handleDec(index) {
    let copyArr = [...subjects];
    copyArr[index].hour -= 1;
    setSubjects(copyArr);
  }
  useEffect(() => {
    if (subjects.length > 0)
      localStorage.setItem("subject", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    if (localStorage.getItem("subject")) {
      let array = JSON.parse(localStorage.getItem("subject"));
      setSubjects(array);
    }
  }, []);

  return (
    <>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        hour={hour}
        setHour={setHour}
        handleSubmit={handleSubmit}
      />
      {
        subjects.map((item, idx) => {
          return (
            <OutPut
              item={item.subject}
              hour={item.hour}
              handleInc={handleInc}
              handleDec={handleDec}
              index={idx}
            />
          )
        })
      }
    </>
  );
}
