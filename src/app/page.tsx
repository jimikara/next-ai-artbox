import Header from "@/components/Header";
import Frame from "@/components/Frame";
import ArtistOptions from "@/components/ArtistOptions";
import Controls from "@/components/Controls";
import ImageProvider from "@/components/ImageProvider";
import { createPortal } from "react-dom";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div className='w-screen h-dvh lg:min-h-[940px] relative bg-white bg-[url("/assets/bg-shape.svg")] before:content-[""] before:block before:w-full before:h-full before:bg-white before:absolute before:top-0 before:opacity-60'>
      <Header className='z-20 relative' />
      <main className='z-20 relative'>
        <div className='flex flex-col items-center justify-center'>
          <ImageProvider>
            <Frame className='' />
            <Controls />
            <Wrapper />
          </ImageProvider>
        </div>
      </main>
    </div>
  );
}
