import { ComponentType, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@components/Navbar";
import { EditorState } from "draft-js";
import { EditorProps } from 'react-draft-wysiwyg'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const FileEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };
  return (
    <>
      <Navbar />
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName=""
      />
    </>
  );
};

export default FileEditor;
