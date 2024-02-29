import React, { useEffect, useState } from "react";
import Display from "./Display";
import Header from "./Header";

async function getData(cpu, setdata,setppu,setnpu) {
  const res = await fetch(cpu);
  const d = await res.json();
  setppu(d.previous);
  setnpu(d.next);
  setdata(d);
  console.log("here");
}

export default function App() {
  const [cpu, setcpu] = useState("https://pokeapi.co/api/v2/pokemon?limit=3");
  const [ppu, setppu] = useState("");
  const [npu, setnpu] = useState("");
  const [data, setdata] = useState([]);
  useEffect(() => {
    getData(cpu, setdata,setppu,setnpu);
  }, [cpu]);

  return (
    <div>
      <Header />

      <div className="flex justify-center space-x-4 mt-4 mb-4">
       {(ppu)? <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setnpu(cpu);
            setcpu(ppu);
          }}
        >
          Previous Page
        </button>:<div></div>
}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setppu(cpu);
            setcpu(npu);
            console.log("clicked");
          }}
        >
          Next Page
        </button>
      </div>

      <div className="flex flex-wrap justify-around">
        {data.results &&
          data.results.map((i, index) => (
            <Display key={index} {...i}/>
          ))}
      </div>
    </div>
  );
}
