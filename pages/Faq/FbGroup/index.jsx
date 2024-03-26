import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection";
import Layout from "@/components/shared/Layout/Layout";
import Image from "next/image";
import fbGroup from "../../../public/images/1ten365/facebook page.png";

const FbGroupLinkPage = () => {
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
                src={fbGroup}
                alt="poster"
              />
            </div>
            <p className="text-base md:text-4xl font-bold text-red-600">
              1Ten এর ফেইসবুক গ্রুপ লিঙ্ক কোন টা?
            </p>

            {/* proxy links */}
            <div className="border-l-4 border-gray-600 mt-12 px-3">
              <div>
                <h1 className="my-2 font-bold text-base md:text-xl">
                  ফেসবুক লিঙ্ক:
                </h1>
                <span className="my-2 font-medium">
                  <p>
                    1Ten এর ১ টাই অফিসিয়াল ফেসবুক পেইজ আছে যেটা তে আপনি লাইক
                    দিয়ে রাখতে পারেনঃ
                  </p>
                  <p>পেইজ লিঙ্ক হলঃ</p>
                  <p>
                    1Ten এর ১ টাই অফিসিয়াল ফেসবুক গ্রুপ আছে যে টা তে আপনি জয়েন
                    করতে পারেনঃ
                  </p>
                  <p>ফেইসবুক গ্রুপ হলঃ</p>
                </span>
                <br />
                
              </div>
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

export default FbGroupLinkPage;
