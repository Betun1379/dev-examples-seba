import React, { useState } from 'react';

const FilterComponent = () => {
  const [filter, setFilter] = useState('');
  const data = ['Apple', 'Banana', 'Orange', 'Grape'];

  const filtered = data.filter(item => item.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Filter Fruits</h2>
      <input type="text" placeholder="Type to filter" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filtered.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default FilterComponent;