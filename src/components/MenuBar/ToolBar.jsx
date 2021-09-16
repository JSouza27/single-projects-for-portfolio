import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import InlineStyleControls from './InlineStyleControls';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#fff',
  },
  tooBar: {
    minHeight: '2.7em',
  },
});

function ToolBar({ editorState, setEditorState }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={ classes.appBar }>
        <Toolbar className={ classes.tooBar }>
          <InlineStyleControls
            editorState={ editorState }
            setEditorState={ setEditorState }
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolBar;