import { BentoItem } from "./BentoItem";
import { Calendar } from "./Calendar";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export const Bento = ({ id, className, FamilyInput }) => {
  const [family, setFamily] = useState(null);
  const [checkedMembers, setCheckedMembers] = useState([]);

  useEffect(() => {
    const fetchFamilyData = async () => {
      if (!FamilyInput) return;
      try {
        const response = await fetch(
          `https://back-end-node-three.vercel.app/families/${FamilyInput}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON response");
        }

        const data = await response.json();
        setFamily(data);

        const initialCheckedMembers = data.Members.filter(
          (member) => member.guest_confirmed === 1
        ).map((member) => member.guest_name);
        setCheckedMembers(initialCheckedMembers);
      } catch (error) {
        console.error("Error fetching family data:", error);
      }
    };

    fetchFamilyData();
  }, [FamilyInput]);

  const handleCheckboxChange = (memberName) => {
    const isConfirmed = family.Members.find(
      (member) =>
        member.guest_name === memberName && member.guest_confirmed === 1
    );

    if (isConfirmed) {
      return;
    }

    const updatedCheckedMembers = checkedMembers.includes(memberName)
      ? checkedMembers.filter((name) => name !== memberName)
      : [...checkedMembers, memberName];

    setCheckedMembers(updatedCheckedMembers);
  };

  const handleClick = async () => {
    if (!family) return;

    const updatedMembers = family.Members.map((member) => ({
      ...member,
      guest_confirmed: checkedMembers.includes(member.guest_name) ? 1 : 0,
    }));

    try {
      const response = await fetch(
        `https://back-end-node-three.vercel.app/families/updatedMembers`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMembers),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      confetti();
    } catch (error) {
      console.error("Error updating family data:", error);
    }
  };

  const allConfirmed =
    family && family.Members.every((member) => member.guest_confirmed === 1);

  return (
    <section
      id={id}
      className={`
                ${className} 
                w-full mx-auto 
                grid sm:grid-cols-10 md:grid-cols-10 auto-rows-[35rem] md:auto-rows-[34rem] sm:auto-rows-[35rem] gap-4 
                px-4 py-8
            `}
    >
      <BentoItem
        className="col-span-9 sm:col-span-5 md:col-span-4"
        title="Fecha y Hora"
      >
        <Calendar />
      </BentoItem>
      <BentoItem
        className="col-span-9 sm:col-span-5 md:col-span-6"
        title="Lugar"
        subtitle="Restaurante Montaña Kfe - Los Naranjos"
      >
        <iframe
          className="rounded-md w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15492.980236939778!2d-89.68539848115851!3d13.88429001608318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62c0f6ea5ee9bb%3A0x1857231100a051d!2sMonta%C3%B1a%20Kfe%20%E2%80%A2%20Los%20Naranjos!5e0!3m2!1ses-419!2ssv!4v1718052115496!5m2!1ses-419!2ssv"
          width="500"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </BentoItem>
      <BentoItem
        className="col-span-9 sm:col-span-5 md:col-span-6"
        title="Agradecimientos"
        content="En primer lugar, expreso mi más profundo agradecimiento a Dios, cuya guía me ha fortalecido en los momentos difíciles a lo largo de mi carrera. Su apoyo me ha permitido superar cada obstáculo. Agradezco sinceramente a mi tía Tata, cuyo respaldo incondicional ha sido fundamental en mi trayectoria. Sin su ayuda, este logro no habría sido posible. Finalmente, extiendo mi gratitud a mis padres por su constante apoyo y motivación."
      />
      <BentoItem
        className="col-span-9 sm:col-span-5 md:col-span-4"
        title="Confirmar Asistencia"
      >
        {family ? (
          <>
            <div>
              <h2 className="text-3xl mb-2 text-center text-gold/80">
                Familia {family.Family}
              </h2>
              <ul className="mb-4">
                {family.Members.map((member, index) => (
                  <li
                    key={index}
                    className="text-black text-2xl flex items-center mb-1"
                  >
                    <input
                      type="checkbox"
                      id={member.guest_name}
                      name={member.guest_name}
                      className="opacity-0 absolute h-0 w-0"
                      checked={checkedMembers.includes(member.guest_name)}
                      onChange={() => handleCheckboxChange(member.guest_name)}
                    />
                    <div
                      className={`w-5 h-5 mr-2 rounded-lg border-2 border-black opacity-70 cursor-pointer ${
                        checkedMembers.includes(member.guest_name)
                          ? "bg-gold border-gold"
                          : ""
                      }`}
                      onClick={() => handleCheckboxChange(member.guest_name)}
                    ></div>
                    <label
                      htmlFor={member.guest_name}
                      className="ml-2 cursor-pointer"
                    >
                      {member.guest_name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {!allConfirmed && (
              <button
                className="
                      bg-gold text-black text-2xl
                      w-full
                      rounded border border-transparent
                      hover:bg-black hover:border-gold hover:text-gold
                    "
                onClick={handleClick}
              >
                Confirmar
              </button>
            )}
          </>
        ) : (
          <p className="text-black text-center text-2xl">
            Familia no encontrada.
          </p>
        )}
      </BentoItem>
    </section>
  );
};

export default Bento;
