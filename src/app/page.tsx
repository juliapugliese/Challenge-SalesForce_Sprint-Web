'use client'
import Button from "@/components/Button";
export default function Home() {
  const Click1 = () => {
    console.log('Click1');
  }

  return (
     <main>
      <Button text="Texto" type="default" onClick={Click1}/>
     </main>
   
  );
}
