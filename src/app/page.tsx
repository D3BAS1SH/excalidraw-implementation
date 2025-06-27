"use client"

import dynamic from "next/dynamic";
import '@excalidraw/excalidraw/index.css'
import { useCallback, useState } from "react";
import { AppState, BinaryFiles, ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";
import { ExcalidrawElement, OrderedExcalidrawElement } from "@excalidraw/excalidraw/element/types";

const Excalidraw = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Excalidraw,
  {
    ssr:false
  }
)

export default function Home() {

  const [elements, setElements] = useState<readonly ExcalidrawElement[]>([]);
  const [appState, setAppState] = useState<AppState | null>(null);
  const [api,setApi] = useState<ExcalidrawImperativeAPI>();

  const onChangeItems = useCallback((element: readonly OrderedExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
    // console.log("Elements");
    // console.log(element);

    // console.log(appState);
    console.log(api?.getSceneElements());
    // const {getSceneElements,history} = api as ExcalidrawImperativeAPI;
    // console.log(getSceneElements())
    // console.log(history);
    // setElements(element);
  },[])

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-28 bg-zinc-900">
          <p className="text-3xl font-extrabold text-zinc-100">
            EXCALIDRAW CANVAS
          </p>
      </div>
      <div className="bg-green-200 h-[calc(100vh-7rem)]">
        <Excalidraw onChange={onChangeItems} excalidrawAPI={(API)=>setApi(API)}/>
      </div>
    </div>
  );
}
