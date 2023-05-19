import { memo } from 'react';
import { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs'

const SingleCapsules = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="capsule-item w-30  p-4 gap-3 ">
                <div className='img-capsule' >
                    <img src="https://cdn.pixabay.com/photo/2015/03/26/18/36/spacecraft-693221_640.jpg" alt="" />
                    <div className="hover__content">
                        <p className='text-white text-semibold' >{data.capsule_serial}</p>
                        <p className='text-white text-semibold mx-2' >-</p>
                        <p className='text-white text-semibold'>{data.type}</p>
                        <button className='veiw-btn' onClick={() => setShowModal(true)}>
                            <BsArrowUpRight className="icon" />
                        </button>
                    </div>
                </div>
                <div className='flex-row flex w-full align-text-bottom mt-1' >
                    <p className='text-xl text-gray mr-4' >{data.type}</p>
                    <p className=' inline text-black font-bold mt-1' >{data.capsule_serial}</p>
                </div>
                <p className='text-tr capitalize text-black font-bold' >{data.status}</p>
                <p className='text-black font-semibold' >{data.original_launch}</p>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-xs lg:max-w-6xl md::max-w-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {data.capsule_serial} <span className='text-red' > - {data.type}</span>
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {data.details ? <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {data.details}
                                    </p> : null}
                                    <p className='text-tr capitalize text-black font-bold' > <span className='text-slate-500' >Capsule Id:</span> {data.capsule_id}</p>
                                    <p className='text-tr capitalize text-black font-bold' > <span className='text-slate-500' >Status:</span> {data.status}</p>
                                    <p className='text-black font-semibold' ><span className='text-slate-500' >Original Launch:</span> {data.original_launch}</p>
                                    <p className='text-black font-semibold' ><span className='text-slate-500' >Reuse Count:</span> {data.reuse_count}</p>
                                    <p className='text-black font-semibold' ><span className='text-slate-500' >Total Landings:</span> {data.landings}</p>
                                    <p className='text-black font-semibold' ><span className='text-slate-500' >Total Missions:</span> {data.missions.length}</p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default memo(SingleCapsules)