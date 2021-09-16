import React, { useState } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ToolBar from '../MenuBar/ToolBar';

function MyEditor(props) {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  return (
    <section>
      <Box display="flex">
        <ToolBar
          editorState={ editorState }
          setEditorState={ setEditorState }
        />
        <Box m={10} width="70%" height="90vh">
          <Paper elevation={3}>
            <Editor
              editorState={ editorState }
              handleKeyCommand={ handleKeyCommand }
              onChange={ setEditorState }
            />
          </Paper>
        </Box>
      </Box>
    </section>
  );
}

export default MyEditor;
