import base_url from "@/utils/Url";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Complain = (props) => {
    const [upLevel1,setUpLevel1]=useState({})
    const [upLevel2,setUpLevel2]=useState({})
    const [upLevel3,setUpLevel3]=useState({})
    const [trigger,setTrigger]=useState(false)


    console.log(props?.currentSelected?.obj,'current');

    const fetchCurrentObjDetails=async()=>{
       await axios.get(`${base_url}/admins/${props?.currentSelected?.obj?.input_id}`)
        .then(res=>{
            if(res?.data?.msg=='success'){
                console.log(res?.data?.admin,'new');
                setUpLevel1(res?.data?.admin?.super)
            }
        })  
    }

    const fetchLevel1Data=async()=>{
        if(upLevel1?.input_id){
            await axios.get(`${base_url}/admins/${props?.currentSelected?.obj?.input_id_id}`)
            .then(res=>{
                if(res?.data?.msg=='success'){
                    console.log(res?.data?.admin,'level1 details');
                    setUpLevel2(res?.data?.admin?.super)
                }
            })
            
        }
    }

    const fetchLevel2Data=async()=>{
        if(upLevel2?.input_id){
            await axios.get(`${base_url}/admins/${upLevel2?.input_id}`)
            .then(res=>{
                if(res?.data?.msg=='success'){
                    console.log(res?.data?.admin,'level2 details');
                    setUpLevel3(res?.data?.admin?.super)
                }
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch current object details
            await fetchCurrentObjDetails();

            await new Promise((resolve) => setTimeout(resolve, 2000));
    
            // Fetch level 1 data after fetchCurrentObjDetails completes
            await fetchLevel1Data();

            await new Promise((resolve) => setTimeout(resolve, 3000));
    
            // Fetch level 2 data after fetchLevel1Data completes
            await fetchLevel2Data();
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [props?.currentSelected]);


    console.log(upLevel1,'level1');
    // console.log(upLevel2,'level2');
  return (
    <div>
       <div className="w-[80%] mx-auto bg-white  p-5 my-10">
              {/* show search admin details start*/}
              <p className="text-center text-base lg:text-lg font-bold mb-3">
                উনি 1ten365 এর একজন অনলাইন {props?.currentSelected?.obj?.profile?.type}{" "}
                নাম্বার {props?.currentSelected?.obj?.input_id}
              </p>
              <div className=" w-full border border-black flex flex-col p-2">
                {/* 1st row start */}
                <div className="w-full flex border border-black py-3 bg-blue-300">
                  <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                    <p className="text-black">উনার {props?.currentSelected?.obj?.profile?.type} আইডিঃ </p>
                  </div>
                  <div className=" w-[50%] h-full flex justify-center items-center text-white">
                    <p className="text-black">{props?.currentSelected?.obj?.input_id}</p>
                  </div>
                </div>
                {/* 1st row end */}

                {/* 2nd row start */}
                <div className=" w-full flex border border-black py-3 bg-blue-100">
                  <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                    <p className="text-black">উনার হোয়াটসঅ্যাপ নাম্বারঃ</p>
                  </div>
                  <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                    <IoLogoWhatsapp
                      onClick={() => {
                        window.open(
                          `https://wa.me/${props?.currentSelected?.obj?.profile?.wa_link},'_blank'`
                        );
                      }}
                      className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                    />
                    <p className="text-black">
                      {props?.currentSelected?.obj?.profile?.phone}
                    </p>
                  </div>
                </div>
                {/* 2nd row end */}
              </div>

              {/* show search admin details end*/}

              {/* show parent admin details start*/}

              {upLevel1?.id && (
                <div>
                  <p className="text-center text-base lg:text-lg font-bold m-3">
                    এই 1ten365 এর অনলাইন {props?.currentSelected?.obj?.profile?.type} এর আপলাইনের তথ্যঃ
                  </p>
                  <p className="text-center text-base lg:text-lg  mb-3">
                    উপরের {props?.currentSelected?.obj?.profile?.type} এর এর বিরুদ্ধে অভিযোগ করতে হলে নিচের যে
                    কোন নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিলেই হবে
                  </p>
                  <div className=" w-full border border-black flex flex-col p-2">
                    {
                        upLevel1?.id && (
                            <div>
                        {/* 1st row start */}
                    <div className="w-full flex border border-black py-3 bg-blue-300">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">উনার {upLevel1?.profile?.type} এর {upLevel1?.profile?.type.includes('এজেন্ট') ? 'এজেন্ট':'এডমিন'}  আইডিঃ </p>
                      </div>
                      <div className=" w-[50%] h-full flex justify-center items-center text-white">
                        <p className="text-black">{upLevel1?.input_id}</p>
                      </div>
                    </div>
                    {/* 1st row end */}

                    {/* 2nd row start */}
                    <div className=" w-full flex border border-black py-3 bg-blue-100">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">
                          উনার {upLevel1?.profile?.type} এর হোয়াটসঅ্যাপ নাম্বারঃ
                        </p>
                      </div>
                      <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                        <IoLogoWhatsapp
                          onClick={() => {
                            window.open(
                              `https://wa.me/${upLevel1?.profile?.wa_link},'_blank'`
                            );
                          }}
                          className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                        />
                        <p className="text-black">{upLevel1?.profile?.wa_link}</p>
                      </div>
                    </div>
                    {/* 2nd row end */}

                    {
                        upLevel2?.id && (
                            <div>
                                  {/* 1st row start */}
                    <div className="w-full flex border border-black py-3 bg-blue-300">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">উনার {upLevel2?.profile?.type} এর {upLevel2?.profile?.type.includes('এজেন্ট') ? 'এজেন্ট':'এডমিন'}  আইডিঃ </p>
                      </div>
                      <div className=" w-[50%] h-full flex justify-center items-center text-white">
                        <p className="text-black">{upLevel2?.input_id}</p>
                      </div>
                    </div>
                    {/* 1st row end */}

                    {/* 2nd row start */}
                    <div className=" w-full flex border border-black py-3 bg-blue-100">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">
                          উনার {upLevel2?.profile?.type} এর হোয়াটসঅ্যাপ নাম্বারঃ
                        </p>
                      </div>
                      <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                        <IoLogoWhatsapp
                          onClick={() => {
                            window.open(
                              `https://wa.me/${upLevel2?.profile?.wa_link},'_blank'`
                            );
                          }}
                          className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                        />
                        <p className="text-black">{upLevel2?.profile?.wa_link}</p>
                      </div>
                    </div>
                    {/* 2nd row end */}
                            </div>

                        )
                    }

                    {
                         upLevel3?.id && (
                            <div>
                                  {/* 1st row start */}
                    <div className="w-full flex border border-black py-3 bg-blue-300">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">উনার {upLevel3?.profile?.type} এর {upLevel3?.profile?.type.includes('এজেন্ট') ? 'এজেন্ট':'এডমিন'}  আইডিঃ </p>
                      </div>
                      <div className=" w-[50%] h-full flex justify-center items-center text-white">
                        <p className="text-black">{upLevel3?.input_id}</p>
                      </div>
                    </div>
                    {/* 1st row end */}

                    {/* 2nd row start */}
                    <div className=" w-full flex border border-black py-3 bg-blue-100">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">
                          উনার {upLevel3?.profile?.type} এর হোয়াটসঅ্যাপ নাম্বারঃ
                        </p>
                      </div>
                      <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                        <IoLogoWhatsapp
                          onClick={() => {
                            window.open(
                              `https://wa.me/${upLevel3?.profile?.wa_link},'_blank'`
                            );
                          }}
                          className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                        />
                        <p className="text-black">{upLevel3?.profile?.wa_link}</p>
                      </div>
                    </div>
                    {/* 2nd row end */}
                            </div>

                        )
                    }
                    </div>
                        )
                    }
                  </div>
                </div>
              )}

              


              {/* show parent admin details end*/}
            </div>


    </div>
  )
}

export default Complain