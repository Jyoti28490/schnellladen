import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      variant="outlined"
      size="small"
      sx={{ color: 'inherit', borderColor: 'white', marginLeft: 2 }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="de">Deutsch</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
