import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection";
import Layout from "@/components/shared/Layout/Layout";
import Image from "next/image";
import complainCenter from "../../../public/images/1ten365/complain center.png";

const ComplainAgentPage = () => {
  return (
    <Layout>
      <div className="bg-white w-full min-h-screen">
        <div className="p-3 md:p-12">
          <div className=" border border-gray-400 p-3 md:p-10">
            <div className="w-[100%] mx-auto p-5 my-3">
              <Image
                width={400}
                height={200}
                className="w-[100%]"
                src={complainCenter}
                alt="poster"
              />
            </div>
            <p className="text-base md:text-4xl font-bold text-red-600">
              এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?
            </p>

            {/* proxy links */}
            <div className="border-l-4 border-gray-600 mt-12 px-3">
              <div>
                <h1 className="my-2 font-bold text-base md:text-xl">
                  এজেন্ট এর সাথে আপনার যে কোন ধরনের সমস্যা থাকতে পারে। তার কিছু
                  উদাহরন নিম্নে দেয়া হলোঃ
                </h1>
                <span className="my-2 font-medium">
                  ** এজেন্ট ঠিক মত ডিপোজিট বা উইথড্র দিচ্ছে না। <br />
                  ** এজেন্ট এর সকাল ১০ টা থেকে রাত ১০ টা পর্যন্ত কাজ করার কথা।
                  কিন্তু ঠিক মত করছে না। <br />
                  ** এজেন্ট ডিপোজিট এর টাকা নিয়েছে কিন্তু ঠিক মত ডিপোজিট দিচ্ছে
                  না। <br />
                  ** আপনার আইডি লক হয়ে গেছে আনলক করছে না।
                </span>
                <br />
                <span className="mt-2 block font-bold text-base md:text-xl">
                  এই রকম নানা অভিযোগ আপনার থাকতে পারে এজেন্ট এর বিরুদ্ধে। এই
                  অভিযোগ গুলো র সমস্যা সমাধান এর জন্য আপনাকে প্রথমে জানতে হবে
                  আমাদের আপ লাইন গুলো কিভাবে কাজ করে এবং কার কাছে অভিযোগ করবেন।
                </span>
              </div>
            </div>

            <div className="my-10">
              <p className="font-medium">
                অভিযোগ বাটন এ ক্লিক অরলে অই মাষ্টার এজেন্ট এর সুপার এজেন্ট এর
                আইডি এবং তার নাম্বার দেখতে পারবেন। তখন আপনি অই সুপার এজেন্ট এর
                কাছে অই মাষ্টার এজেন্ট এর বিরুদ্ধে অভিযোগ করতে পারবেন। ঠিক সেই
                রকম ভাবে সুপার এজেন্ট এর নামে অভিযোগ করতে পারবেন। আপনি যদি কোন
                মাষ্টার এজেন্ট এর নামে অভিযোগ করতে চান – তাহলে তার সুপার এজেন্ট
                এর কাছে অভিযোগ করতে হবে। যদি সুপার এজেন্ট এর নামে অভিযোগ করতে
                চান তাহলে এডমিন এর কাছে অভিযোগ করতে হবে। যদি আপনার অভিযোগের
                সমাধান সুপার এজেন্ট না দিতে পারে তাহলে আপনি কাস্টমার সার্ভিস
                এডমিন এর কাছে অভিযোগ করবেন। যদি তিনিও দিতে না পারে তাহলে সরাসরি
                এডমিন কাছে অভিযোগ করবেন।
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto ">
        <FooterSection />
      </div>
    </Layout>
  );
};

export default ComplainAgentPage;
