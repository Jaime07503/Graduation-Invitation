import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Bento } from "./components/Bento";
import React, { useEffect, useState } from "react";

function Invitation() {
  const [family, setFamily] = useState("");

  useEffect(() => {
    const storedFamily = localStorage.getItem("family");
    if (storedFamily) {
      setFamily(storedFamily);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Bento FamilyInput={family} />
      </main>
      <Footer />
    </>
  );
}

export default Invitation;
