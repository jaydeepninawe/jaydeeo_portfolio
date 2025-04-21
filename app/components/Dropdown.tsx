import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    // Here you can handle any logic for changing language content, such as updating state or using a translation library like `react-i18next`.
  };

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="bg-gray-800 text-white py-2 px-4 rounded-md"
      >
        <option value="EN">English</option>
        <option value="HI">Hindi</option>
        <option value="MR">Marathi</option>
        <option value="JA">Japanese</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
