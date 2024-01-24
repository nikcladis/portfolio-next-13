import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative">
        <Header />
        <Main />
      </div>
    </div>
  );
}
