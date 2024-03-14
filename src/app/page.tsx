import Header from "@/components/Header";
import Frame from "@/components/Frame";
import ArtistOptions from "@/components/ArtistOptions";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div>
      <Header />
      <main className='p-2'>
        <div className='flex flex-col items-center justify-center'>
          <Container>
            <Frame />
            <ArtistOptions />
          </Container>
        </div>
      </main>
    </div>
  );
}
