import Header from "@/components/Header";
import Frame from "@/components/Frame";
import Controls from "@/components/Controls";
import ImageProvider from "@/components/ImageProvider";

import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div className='w-full h-full overflow-scroll relative bg-palette-blue-500 bg-[url("/assets/bg-shape.svg")]'>
      <Header className='z-20 relative' />
      <main className='z-20 relative'>
        <div className='flex flex-col items-center justify-center'>
          <ImageProvider>
            <Frame className='mt-10 md:mt-[80px] 2xl:mt-[120px]' />
            <Controls />
            <Wrapper />
          </ImageProvider>
        </div>
      </main>
    </div>
  );
}
