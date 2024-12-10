import Image from "next/image";
import Cover from "../public/image/Cover-exemplo.png";
import Logo from "../public/image/Logo.png";
import IconInsta from "../public/icons/Instagram.svg";
import EducaMais from "../public/image/educa-mais.jpg";
import IconWhats from "../public/icons/WhatsApp.svg";
import Seach from "../public/icons/Seach.svg";
import Blow from "../public/image/blow.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="
      bg-[#7f3c8a]  flex flex-row justify-between 
      max-md:h-24
      max-sm:h-12 ">
        <Image src={Logo} alt="" className="max-md:size-auto" />
        <div className="
        flex flex-row w-32 justify-between m-10 self-center 
        max-md:w-28 max-md:size-10 
        max-sm:w-20  max-sm:size-8 max-sm:m-2">

          <Link href="">
            <Image src={IconWhats} alt="" className="" />
          </Link>
          <Link href="">
            <Image src={IconInsta} alt="" className="" />
          </Link>
        </div>

        {/* <Image src={Wave} alt="" className="relative top-0 w-[]" /> */}
      </nav>
      <main className="overflow-hidden">
        <section className="bg-[#f7a528] flex ">
          <div className="relative">
            <div className="absolute right-[10%] top-1/4 w-80 text-white font-extrabold flex flex-col items-center
          max-md:w-52
          max-sm:right-1 max-sm:w-40
          ">
              <h3 className="
            text-2xl text-center mb-4
            max-md:text-base max-md:mb-1
            max-sm:text-xs
            ">Faca a matricula em um curso e ganhe outro*</h3>
              <button className="w-full p-6 rounded-2xl bg-[#5717a8] border-b-4 border-r-8 border-b-[#f39a2e]  border-r-[#f39a2e] text-3xl
            max-md:text-lg max-md:p-0 max-md:border-r-2 max-md:w-2/3 max-md:rounded-lg
            max-sm:text-sm max-sm:border-b-2 max-sm:
            ">
                Inscreva-se</button>
            </div>
            <Image src={Cover} width={1440} alt="" />
          </div>
        </section>
        <section className="flex flex-row">
          <div className="bg-[#7f3c8a] size-96 rounded-xl -bottom-72 -left-3 relative">
            <h2 className="relative left-10 top-3 text-3xl font-extrabold text-white">Parcerias</h2>
            <Image src={EducaMais} alt="" className="absolute left-14 top-14 size-96 rounded-xl" />
          </div>
          <div className="relative right-[-15%]">

            <h3 className="
             text-right
             
            absolute top-64 w-1/2 right-48 text-white text-3xl 
            "
            >Utilizamos a metodologia Maker, que valoriza o aprendizado prático por meio da criação e experimentação. Isso estimula a criatividade, colaboração e inovação</h3>
            <Image src={Blow} alt="" />
          </div>
        </section>

        {/* <section className="my-16 ">
          <div className="
            flex justify-center
            h-20 w-full  mx-24
            rounded-3xl
            bg-white
            text-2xl
            font-bold
            text-[#7f3c8a]
            placeholder:text-[#7f3c8a]
          ">

            <input type="search" placeholder="Busque um Curso" className="
             w-full  text-2xl
            font-bold
            text-[#7f3c8a]
            placeholder:text-[#7f3c8a] 
            
            " />
            <button className="border-red-600 border-solid border-2 ">
              <Image src={Seach} alt="" />
            </button>
          </div>
        </section> */}
      </main>
    </>
  );
}
