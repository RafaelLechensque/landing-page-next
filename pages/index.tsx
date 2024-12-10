import Image from "next/image";
import Cover from "../public/image/Cover-exemplo.png";
import Logo from "../public/image/Logo.png";
import IconInsta from "../public/icons/Instagram.svg";
import EducaMais from "../public/image/educa-mais.jpg";
import IconWhats from "../public/icons/WhatsApp.svg";
import Seach from "../public/icons/Seach.svg";
import ArrowLeft from "../public/icons/arrow-right.svg";
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
        {/* <Image src="" width={1220} height={420} alt="" className="max-md:size-auto"  /> */}
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
              <button className="w-full p-6 rounded-2xl bg-[#5717a8] shadow-[5px_5px_0px_0px_rgba(243,154,46)] text-3xl
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

        <section className="my-16 ">

          <div className="flex bg-white mx-28 my-20 rounded-[30px] justify-between px-2 shadow-[10px_10px_0px_0px_rgba(243,154,46)]">
            <input type="text" name="" id="" placeholder="Busque Um curso "
              className=" 
              flex-1 text-4xl rounded-[30px] p-4
              text-[#5717a8] placeholder:text-[#5717a8]
            " />
            <button>
              <Image src={Seach} width={50} alt="" />
            </button>
          </div>

          <div className="
            flex justify-evenly
            bg-[#5717a8]
            p-4
            items-center
          ">
            
            <Link href="/" className="  w-52 flex-col text-center  ">
              <Image alt="" src={EducaMais} className="object-cover rounded-2xl h-56 border-[#f39d39] border-solid border-8 flex-1" />
              <h2 className="font-extrabold text-white text-2xl">Robotica</h2>
            </Link>
            <Link href="/" className="  w-52 flex-col text-center  ">
              <Image alt="" src={EducaMais} className="object-cover rounded-2xl h-56 border-[#f39d39] border-solid border-8 flex-1" />
              <h2 className="font-extrabold text-white text-2xl">Robotica</h2>
            </Link>
            <Link href="/" className="  w-52 flex-col text-center  ">
              <Image alt="" src={EducaMais} className="object-cover rounded-2xl h-56 border-[#f39d39] border-solid border-8 flex-1" />
              <h2 className="font-extrabold text-white text-2xl">Robotica</h2>
            </Link>
            <Link href="/" className="  w-52 flex-col text-center  ">
              <Image alt="" src={EducaMais} className="object-cover rounded-2xl h-56 border-[#f39d39] border-solid border-8 flex-1" />
              <h2 className="font-extrabold text-white text-2xl">Robotica</h2>
            </Link>
            <button className="text-9xl text-white font-semibold"><Image src={ArrowLeft} alt=""/></button>
          </div>
        </section>
      </main>
    </>
  );
}
