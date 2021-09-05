import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { Editor, EditorState } from "draft-js";

const FileEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <>
      <Navbar />
      <Box as="section" minH="7xl">
        <Editor  editorState={editorState} onChange={setEditorState} />;
      </Box>
    </>
  );
};

export default FileEditor;
