import React from 'react';
import CheckBoxWrapper, { Box } from './styles';

export default function CheckBox({ label, checked = false, onChange }) {
  function handleChange() {
    onChange(!checked);
  }

  return (
    <CheckBoxWrapper>
      <label>
        <Box type="checkbox" checked={checked} onChange={handleChange} />
        {label}
      </label>
    </CheckBoxWrapper>
  );
}
