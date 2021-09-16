import React from 'react';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';;

const inlineStyles = [
  {
    label: 'bold',
    style: 'BOLD',
    icon: <FormatBoldIcon />,
  },
  {
    label: 'italic',
    style: 'ITALIC',
    icon: <FormatItalicIcon />,
  },
  { 
    label: 'Underline',
    style: 'UNDERLINE',
    icon: <FormatUnderlinedIcon />,
  },
];

export default inlineStyles;