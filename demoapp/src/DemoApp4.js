import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML & CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJs",
  },
];

const DemoApp4 = () => {
  const [checked, setChecked] = useState([]);
  const handleSummit = () => {
    //call Api
    console.log({
      id: checked,
    });
  };
  const handleCheck = (id) => {
    setChecked((prev) => {
        const isChecked = checked.includes(id)
        if (isChecked){
            return checked.filter(item=> item!==id)
        }else
        return [...prev, id];
    }
    ) 
  };
  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(course.id)}
            checked={checked.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSummit}>Register</button>
    </div>
  );
};

export default DemoApp4;
