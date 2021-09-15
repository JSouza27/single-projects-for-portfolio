import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

function MyEditor() {
  const [editorState, serEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const handleKeyCommand = (command, editorState) => {};

  return (
    <Editor
      editorState={ editorState }
      onChange={ serEditorState }
    />
  );
}

export default MyEditor;
