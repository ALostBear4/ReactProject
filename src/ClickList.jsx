import React, { useState, useEffect } from "react";
import axios from "axios";

function ClickList() {
  const [Input, setInput] = useState(false);
  const [Output, setOutput] = useState("");
  const [List, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      setInput(true);
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=52389392cb57776a1d7dae133ab333ea"
      );
      console.log(res);
      setList(res.data.results);
      setInput(false);
    };
    fetchList();
  }, []);

  return (
    <>
      <div className="App">
        <div className="container-md" style={{ justifyContent: "center" }}>
          <div className="row">
            <div className="col-4">
              <div class="d-grid gap-2">
                <h2 style={{ color: "Purple" }}>
                  Type to see list of your fav movies💜
                </h2>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setOutput(e.target.value)}
                />
                {Input ? (
                  <h4>Loading...</h4>
                ) : (
                  List.filter((value) => {
                    if (Output === "") {
                      return value;
                    } else if (
                      value.title.toLowerCase().includes(Output.toLowerCase())
                    ) {
                      return value;
                    }
                  }).map((item) => (
                    <li
                      class="list-group-item list-group-item-info"
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClickList;
