import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCapsules } from '../redux/Capsules/capsules.actions'
import SingleCapsules from './SingleCapsules'
import Loader from './Loader'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Capsule = () => {
    const dispatch = useDispatch()
    const { capsules: { capsules, totalPages }, loading } = useSelector((state) => state)
    const [status, setstatus] = useState('')
    const [page, setpage] = useState(1)
    const [type, settype] = useState('')
    const handleStatus = ({ target: { value } }) => setstatus(value)

    const handleType = ({ target: { value } }) => settype(value)

    useEffect(() => {
        console.log(status, type)
        let url = `https://fine-jade-donkey-gown.cyclic.app/capsules?status=${status}&page=${page}&limit=10&type=${type}`
        dispatch(getCapsules(url))
    }, [status, type, page])

    // console.log(capsules, totalPages);
    return (
        <section className='p-6' >
            {/* filter */}
            <div className="filters flex flex-row mt-8"  >
                <select id="status" className='ml-6' onChange={handleStatus} value={status} >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="retired">Retired</option>
                    <option value="unknown">Unknown</option>
                </select>
                <select id="type" className='ml-6' onChange={handleType} value={type}>
                    <option value="">Select Type</option>
                    <option value="Dragon_1.1">Dragon 1.1</option>
                    <option value="Dragon_1.0">Dragon 1.0</option>
                </select>
            </div>

            {/* All Capsules */}
            {loading ? <Loader /> :
                <div className="capsules grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        capsules && capsules.length > 0 && capsules.map((el) => <SingleCapsules key={el._d} data={el} />)
                    }
                </div>
            }
            <div className="pagination">
                <button className="prev-btn" disabled={page === 1} onClick={() => setpage((prev) => prev - 1)} ><BsChevronLeft className='text-2xl font-extrabold text-white' /></button>
                <p>{page}</p>
                <button className="next-btn" disabled={page === totalPages} onClick={() => setpage((prev) => prev + 1)} ><BsChevronRight className='text-2xl text-white' /></button>
            </div>
        </section>
    )
}

export default Capsule