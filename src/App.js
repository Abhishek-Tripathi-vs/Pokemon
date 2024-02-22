import { useState } from "react";
import "./styles.css";

function handleChange(e, settxt) {
  settxt(e.target.value);
}

function handleClick(
  txt,
  settxt,
  settasks,
  tasks,
  edited,
  setedited,
  completed,
  setcompleted
) {
  if (txt === "") {
    return;
  }
  setcompleted([...completed, false]);
  settasks([...tasks, txt]);
  setedited([...edited, false]);
  settxt("");
}

function handleDelete(
  index,
  settasks,
  tasks,
  edited,
  setedited,
  completed,
  setcompleted
) {
  const newTasks = [...tasks];
  const newEdited = [...edited];
  const newCompleted = [...completed];
  newCompleted.splice(index, 1);
  setcompleted(newCompleted);
  newEdited.splice(index, 1);
  setedited(newEdited);
  newTasks.splice(index, 1);
  settasks(newTasks);
}

function handleEdit1(edited, setedited, index, settxt2, tasks) {
  settxt2(tasks[index]);
  const newEdited = [...edited];
  newEdited[index] = true;
  setedited(newEdited);
}

function handleClick2(txt2, tasks, settasks, index, setedited, edited) {
  if (txt2 === tasks[index]) {
    alert("Nothing to change");
    return;
  }
  if (txt2 === "") {
    alert("Task cannot be empty");
    return;
  }
  const newTasks = [...tasks];
  newTasks[index] = txt2;
  settasks(newTasks);
  const newEdited = [...edited];
  newEdited[index] = false;
  setedited(newEdited);
}

function handleBack(edited, setedited, index) {
  const newEdited = [...edited];
  newEdited[index] = false;
  setedited(newEdited);
}

function handleComplete(completed, setcompleted, index) {
  const newCompleted = [...completed];
  newCompleted[index] = true;
  setcompleted(newCompleted);
}

export default function App() {
  const [txt, settxt] = useState("");
  const [txt2, settxt2] = useState("");
  const [tasks, settasks] = useState([]);
  const [edited, setedited] = useState([]);
  const [completed, setcompleted] = useState([]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Your Task"
        value={txt}
        onChange={(e) => {
          handleChange(e, settxt);
        }}
      />

      <button
        onClick={() => {
          handleClick(
            txt,
            settxt,
            settasks,
            tasks,
            edited,
            setedited,
            completed,
            setcompleted
          );
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task, index) => {
          return (
            <div className="taskbox">
              <div key={index}>{task}</div>
              <button
                onClick={() => {
                  handleDelete(
                    index,
                    settasks,
                    tasks,
                    edited,
                    setedited,
                    completed,
                    setcompleted
                  );
                }}
              >
                Delete
              </button>

              {!completed[index] ? (
                <button
                  onClick={() => {
                    handleEdit1(edited, setedited, index, settxt2, tasks);
                  }}
                >
                  Edit
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={() => {
                  handleComplete(completed, setcompleted, index);
                }}
              >
                Complete
              </button>
              {completed[index] ? (
                <img
                  className="imagee"
                  src="https://www.freepnglogos.com/uploads/tick-png/tick-verde-png-8.png"
                  alt="completed"
                />
              ) : (
                <div></div>
              )}

              {edited[index] && !completed[index] ? (
                <div>
                  <input
                    type="text"
                    Value={tasks[index]}
                    onChange={(e) => handleChange(e, settxt2)}
                  />
                  <button
                    onClick={() => {
                      handleClick2(
                        txt2,
                        tasks,
                        settasks,
                        index,
                        setedited,
                        edited
                      );
                    }}
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      handleBack(edited, setedited, index);
                    }}
                  >
                    Back{" "}
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
