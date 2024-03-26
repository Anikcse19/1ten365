import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceCard = ({item}) => {
const router=useRouter()


  return (
    <div className="border flex flex-col items-center justify-center gap-y-5">
      <div className="relative">
        <Image
          src={item.img}
          alt="Next Image"
          layout="responsive"
          width={1920}
          height={1080}
          onClick={()=>router.push(`/Admins${item?.link}`)}
          className="object-cover w-full h-full cursor-pointer"
        ></Image>

        <Link
          href={`/Admins${item?.link}`}
          className="absolute -bottom-2.5 left-5 bg-white border border-slate-500 px-2 py-[2px] text-xs hover:bg-red-700 hover:text-white uppercase"
        >
          Agent
        </Link>
      </div>

      <h3 className=" hover:text-red-700  font-semibold">
        {item.title}
      </h3>

      <p className="text-sm text-center">
        {item.des}
      </p>

      <div className="w-full">
        <button onClick={()=>router.push(`/Admins${item?.link}`)} className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400">
          Read More...কাস্টমার সার্ভিস লিষ্ট
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
