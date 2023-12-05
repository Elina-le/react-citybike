import React from 'react';
import { ReactComponent as Icon } from '../../visualAssets/swgIcons/copyright-solid.svg';

const IconStyle = {
    width: 45,
    height: 45
  };


const CopyrightIcon = () => {
  return (
    <div style={IconStyle}>
      <Icon />
    </div>
  );
};

export default CopyrightIcon;