import React from 'react';
import { RichUtils } from 'draft-js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import inlineStyles from './ListButton';

const useStyles = makeStyles({
  fontButton: {
    color: '#5f6368',
    minWidth: '1rem',
  },
});

function InlineStyleControls({ editorState, setEditorState }) {
  const classes = useStyles();

  const applyStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  return (
    <div>
      {
        inlineStyles.map((type, index) => {
          return (
            <Button
              active={ isActive(type.style)}
              className={ classes.fontButton }
              key={ index }
              onClick={ () => applyStyle(type.style) }
            >
              { type.icon || type.label }
            </Button>
          )
        })
      }
    </div>
  );
}

export default InlineStyleControls;
