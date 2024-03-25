import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection"
import Layout from "@/components/shared/Layout/Layout"
import Image from "next/image"
import beAgent from '../../../public/images/1ten365/agent hote chai.png'

const HowToAgentPage = () => {
  return (
    <Layout>
        <div className="bg-white w-full min-h-screen">
        <div className="p-12">
            <div className=" border border-gray-400 p-10">
            <div className="w-[100%] mx-auto p-5 my-3">
          <Image width={400} height={200} className="w-[100%]" src={beAgent} alt="poster"/>
          </div>
                <p className="text-base md:text-4xl font-bold text-red-600">কিভাবে আমি 1Ten তে অনলাইন এজেন্ট হতে পারি?</p>

                {/* proxy links */}
                <div className="border-l-4 border-gray-600 mt-12 px-3">
                <div>
                    <h1 className="my-2 font-bold text-base md:text-xl">অনলাইন এজেন্ট হবার আগে আপনি লোকাল এজেন্ট হবার নিয়ম গুলো পড়ে নিনঃ</h1>
                    <span className="my-2 font-medium">
                    ** অনলাইন এজেন্ট এর পয়েন্ট প্রাইস ফিক্সড ৯৩ টাকা করে। <br />
** ২ লক্ষ টাকা জমা দিতে হবে, যা অফেরত যোগ্য।<br />
** যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন – তাহলে পয়েন্ট এর দাম হবে ৯৫ টাকা। <br />
** অনলাইন এজেন্ট কোন ভাবেই নিজে বেট ধরতে পারবেন না। যদি কোন ভাবে নিজে খেলেন, তাহলে অনতি বিলম্বে তাকে বাদ দেয়া হবে।
                    </span>
                    <br />
                    
                </div>
                    
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

export default HowToAgentPage
