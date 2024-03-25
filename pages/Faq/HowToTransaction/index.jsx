import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection";
import Layout from "@/components/shared/Layout/Layout";
import Image from "next/image";
import paymentPoster from "../../../public/images/1ten365/payment method.png";

const HowToTransactionPage = () => {
  return (
    <Layout>
      <div className="bg-white w-full min-h-screen">
        <div className="p-12">
          <div className=" border border-gray-400 p-10">
            <div className="w-[100%] mx-auto p-5 my-3">
              <Image
                width={400}
                height={200}
                className="w-[100%]"
                src={paymentPoster}
                alt="poster"
              />
            </div>
            <p className="text-base md:text-4xl font-bold text-red-600">
              1Ten তে কিভাবে লেনদেন করবেন?
            </p>

            {/* proxy links */}
            <div className="border-l-4 border-gray-600 mt-12 px-3">
              <div>
                <h1 className="my-2 font-bold text-base md:text-xl">
                  বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে লেনদেন
                  করবেন?
                </h1>
                <p className="my-2 font-bold">
                  ইউজার যখন এজেন্ট কে টাকা পাঠাবে এবং এজেন্ট যখন ইউজার কে টাকা
                  পাঠাবেঃ-
                </p>
                <span className="my-2 font-medium">
                  <ol>
                    <li>
                      * ইউজার যদি এজেন্টর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০ পয়েন্ট
                      এর জন্য ক্যাশ ইন বা সেন্ড ম্যানি করবে ১০২০ টাকা।
                    </li>
                    <li>
                      * ইউজার যদি এজেন্টের বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্টের
                      জন্য ক্যাশ আউট করবে ১০০০ টাকা।
                    </li>
                    <li>
                      * এজেন্ট যদি ইউজার এর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০
                      পয়েন্টের জন্য এজেন্ট ক্যাশ ইন করবে ১০০০ টাকা।
                    </li>
                    <li>
                      * এজেন্ট যদি ইউজার এর বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্ট
                      এর জন্য ক্যাশ আউট করবে ৯৮০ টাকা।
                    </li>
                  </ol>
                </span>
                <br />
              </div>
            </div>
            {/* online pay */}
            <div className="text-lg my-5">
              <span>
                <p className="font-bold">
                  বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিংএর সময় সীমাঃ-
                </p>

                <p>
                  * মোবাইল ব্যাংকিং এর সময় সকাল ৯ টা ৪৫ থেকে দুপুর ১ টা পর্যন্ত,
                  তার পরে দুপুর ৩ টা থেকে রাত ৯ টা ৪৫ পর্যন্ত।
                </p>
                <p>
                  * এই সময়ের বাইরে কোন ভাবেই কোন লেনদেন করা যাবে না। রাত ৯ টা ৪৫
                  এর পরে কেউ যদি টাকা পাঠায় তার দায় ভার কোম্পানী নিবে না।
                </p>
                <p>
                  * ডিপোজিট এবং উইথড্র তে ১৫ মিনিট থেকে ১ ঘন্টা সময় পর্যন্ত
                  লাগতে পারে।
                </p>
                <p>* ইউজার দিনে ১ বার ডিপোজিট এবং ১ বার উইথড্র করতে পারবেন।</p>
                <p>
                  * প্রতিবার টাকা পাঠানোর আগে – এজেন্ট কাছ থেকে বিকাশ নগদ রকেট
                  নাম্বার চেয়ে নিবেন। এটা বাধ্যতামুলক।
                </p>
              </span>
            </div>
            {/* bank pay */}
            <div className="text-lg my-5">
              <span>
                <p className="font-bold">
                  ব্যাংকে কিভাবে এ কিভাবে লেনদেন করবেন?
                </p>
                <p>
                  * ১ লাখ টাকা নিচে কোন এমাউন্ট ব্যাংকে ডিপোজিট বা উইথড্র করা
                  যাবে না।
                </p>
                <p>
                  * কোন ইউজার ব্যাংকে ডিপোজিট করলে আমাদের ডিপোজিট ভেরিফাই করতে ২
                  দিন পর্যন্ত সময় লাগতে পারে।
                </p>
                <p>
                  * কোন ইউজার ব্যাংকে উইথড্র চাইলে – পরের দিন উইথড্র পাবেন এবং
                  প্রতিলাখে ১০০০ টাকা উইথড্র চার্জ দিতে হবে।
                </p>
              </span>
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

export default HowToTransactionPage;
