"use client"; 
import { EditorProvider } from "@/components/TipTapEditor/EditorContext";
import { TipTapEditor } from "@/components/TipTapEditor/TipTapEditor";
import { Toolbar } from "@/components/TipTapEditor/Toolbar";

export default function Home() {
  return (
    <EditorProvider>
      <Toolbar />
      <TipTapEditor />
      <TipTapEditor />
      <TipTapEditor />
      <TipTapEditor />
    </EditorProvider>
  );
}
