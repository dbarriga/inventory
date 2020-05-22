import React, { useState, useEffect, memo } from "react";

const Table = memo(({ entry }) => {
  const [rows, handleRows] = useState([]);
  const [flag, handleFlag] = useState({});

  useEffect(() => {
    if (entry.team) {
      entry.id = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;
      handleRows([...rows, entry]);
    }
  }, [entry]);

  const handleDelete = (index) => () => {
    handleRows(rows.filter((item, i) => index !== i));
  };

  const handleEdit = (index) => () => {
    handleFlag({ value: true, index });
  };

  const handleSave = () => {
    handleFlag({ value: false, index: null });
  }

  const handleChange = (index) => ({target}) => {
    let row = rows[index];
    row[target.name] = target.value;
    handleRows(rows.map((item, i) => i===index ? row : item));
  }

  const manageRows = (item, index) => {
    return flag.value && flag.index === index ? (
      <div className="table-row" key={index}>
        <div className="table-item">
          <input value={item.sport} name="sport" onChange={handleChange(index)} />
        </div>
        <div className="table-item">
          <input value={item.team} name="team" onChange={handleChange(index)} />
        </div>
        <div className="table-item">
          <input value={item.number} name="number" onChange={handleChange(index)} />
        </div>
        <div className="table-item">
          <input value={item.name} name="name" onChange={handleChange(index)} />
        </div>
        <div className="table-item">
          <input value={item.size} name="size" onChange={handleChange(index)} />
        </div>
        <div className="table-item">
          <input value={item.edition} name="edition" onChange={handleChange(index)} />
        </div>
        <div className="table-item">
          <button onClick={handleSave}>Save</button>
        </div>
        <div className="table-item">
            <span></span>
        </div>
      </div>
    ) : (
      <div className="table-row" key={index}>
        <div className="table-item">{item.sport}</div>
        <div className="table-item">{item.team}</div>
        <div className="table-item">{item.number}</div>
        <div className="table-item">{item.name}</div>
        <div className="table-item">{item.size}</div>
        <div className="table-item">{item.edition}</div>
        <div className="table-item">
          <button onClick={handleEdit(index)}>Edit</button>
        </div>
        <div className="table-item">
          <button onClick={handleDelete(index)}>Delete</button>
        </div>
      </div>
    );
  };

  return (
    <div className="table">
      <div className="table-row table-name">Inventory</div>
      <div className="table-row table-title">
        <div className="table-item">Sport</div>
        <div className="table-item">Team</div>
        <div className="table-item">Number</div>
        <div className="table-item">Name</div>
        <div className="table-item">Size</div>
        <div className="table-item">Edition</div>
        <div className="table-item"></div>
        <div className="table-item"></div>
      </div>
      {rows.map(manageRows)}
    </div>
  );
});

export default Table;
