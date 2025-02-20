import { Footer } from "@/components/footer";
import { Main } from "@/components/main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main/>
      <Footer/>
    </div>
  )
}