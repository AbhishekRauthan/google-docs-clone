import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@components/Navbar";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import { css } from "@emotion/css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box } from "@chakra-ui/react";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const toolbarStyle = css`
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background-color: white;
  position: sticky;
  top: 0;
  box-shadow: 0px 1px 29px -10px rgba(0,0,0,0.93);
`;

const editorStyle = css`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  overflow-y: hidden;
  background-color: white;
  padding: 4rem;
  height: 96vh;
  width: 50%;
  
`;

const FileEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return (
    <>
      <Navbar />
      <Box bgColor="gray" pb="3">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName={toolbarStyle}
          editorClassName={editorStyle}
        />
      </Box>
    </>
  );
};

export default FileEditor;
