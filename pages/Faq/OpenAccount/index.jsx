import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection"
import Layout from "@/components/shared/Layout/Layout"
import Image from "next/image"
import openAccPoster from '../../../public/images/1ten365/how to create account.png'

const OpenAccount = () => {
  return (
    <Layout>
        <div className="bg-white w-full min-h-screen">
        <div className="p-12">
            <div className=" border border-gray-400 p-10">
            <div className="w-[100%] mx-auto p-5 my-3">
          <Image width={400} height={200} className="w-[100%]" src={openAccPoster} alt="poster"/>
          </div>
                <p className="text-base md:text-4xl font-bold text-red-600">কিভাবে একাউন্ট খুলবেন?</p>

                {/* proxy links */}
                <div className="border-l-4 border-gray-600 mt-12 px-3">
                <div>
                    <h1 className="my-2 font-bold text-base md:text-xl">একাউন্ট আপনি নিজে নিজে খুলতে পারবেন না। তাই একাউন্ট খোলার আগে মনোযোগ দিয়ে পড়ুনঃ</h1>
                    <span className="my-2 font-medium">
                    1ten365 তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া জরুরী।
                    </span>
                    <br />
                    <span className="mt-2 block font-bold text-base md:text-xl">আমাদের এজেন্ট লিষ্ট দেখতে নিচের লিঙ্ক এ ক্লিক করুনঃ <p className="text-red-600 font-bold text-base md:text-lg">https://allagentlist.com/ma.php</p></span>
                </div>
                    
                </div>


                <div className="my-10">
                    <p className="font-medium">এই এজেন্ট লিষ্ট এর বাইরে কারো সাথে লেনদেন করলে আপনাকে নিজ দ্বায়িত্বে লেনদেন করতে হবে। লিষ্ট এর বাইরে কোন এজেন্ট এর দায়ভার 1ten নিবে না এবং লিষ্ট এর এজেন্ট দের সব দায়ভার 1ten কোম্পানীর। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অবথা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।</p>
                </div>

                <div className="my-10 flex flex-col gap-2 font-semibold">
                    <span className="inline">অন্যান্য সাহায্যের জন্যঃ তথ্যাদি এবং সাহায্যের জন্য হোয়াটসাপ নাম্বারঃ <p className="text-red-600">+15714028916 (আকাশ মালিক)</p></span>
                    <span>ফেসবুক গ্রুপের লিঙ্কঃ <p className="text-red-600 cursor-pointer hover:underline">https://www.facebook.com/groups/1ten.live</p></span>
                    <span>এই ফেসবুক গ্রুপ এবং একটি ব্যাকআপ গ্রুপ ছাড়া আমাদের আর কোন ফেসবুক গ্রুপ নেই।</span>
                    <span>এছাড়া আপনারা আমাদের কাস্টমার সার্ভিস এর সাথে সরাসরি যোগাযোগ করতে পারেন।</span>
                    <span>তাদের নাম্বার গুলো জানতে নিচের লিঙ্কে ক্লিক করুনঃ <p className="text-red-600 cursor-pointer hover:underline">https://allagentlist.com/cs.php</p></span>
                    <span>একাউন্ট খোলার আগে নিচের লিঙ্কে ক্লিক করে শর্ত সমুহ জেনে নিন। এই শর্ত সমুহ জানা অত্যন্ত জরুরীঃ নিয়মগুলো জানার জন্য এই লিঙ্ক এ ক্লিক করুন। </span>

                </div>
            </div>
        </div>     
    </div>
    <div className="w-[90%] mx-auto ">
    <FooterSection/>
    </div>
    </Layout>
  )
}

export default OpenAccount
