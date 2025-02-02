import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function Home() {
  const { RiveComponent, rive } = useRive({
    src: "/me.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "main",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    }),
    onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
  });


  return (
    <>
      <Head>
          <title>Responsive Rive Animation</title>
        </Head>
        <main className="min-h-screen w-full flex items-center justify-center">
          <div 
            className="w-full max-w-4xl mx-auto px-4"
          >
            <RiveComponent style={{ height: '500px' }}/>
          </div>
        </main>
    </>
  );
}