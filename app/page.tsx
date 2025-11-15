import dynamic from "next/dynamic";

const TarotSession = dynamic(() => import("../src/components/TarotSession"), { ssr: false });

export default function Page() {
  return (
    <main>
      <TarotSession />
    </main>
  );
}
