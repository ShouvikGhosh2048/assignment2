import Link from "next/link";
import { FaList, FaSearch, FaRocket } from 'react-icons/fa';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

export default function Home() {
  return (
    <div>
      <nav>
        <div className="bg-slate-800 text-white flex justify-between">
          <div className="flex items-center">
            <FaList />
            <Link href="" className="m-2 inline-block">Home</Link>
            <Link href="" className="m-2 inline-block">Job openings</Link>
            <Link href="" className="m-2 inline-block">Candidates</Link>
            <Link href="" className="m-2 inline-block">Interviews</Link>
            <Link href="" className="m-2 inline-block">Clients</Link>
            <Link href="" className="m-2 inline-block">Contacts</Link>
            <Link href="" className="m-2 inline-block">Campaigns</Link>
            <Link href="" className="m-2 inline-block">...</Link>
          </div>
          <div className="flex items-center gap-2">
            <FaSearch />
            <FaRocket />
          </div>
        </div>
      </nav>
      <div className="bg-gray-100">
        <div>
          <span className="m-2 inline-block">APPLICATIONS</span>
          <span className="m-2 inline-block">All Applications</span>
        </div>
      </div>
      <div className="flex">
          <div className="p-3 w-min border-r">
            <input placeholder="FILTER APPLICATIONS BY"/>
            <div className="flex flex-col">
              <span>
                <input type="checkbox" className="mr-1"/>
                <label>Posting Title</label>
              </span>
              <span>
                <input type="checkbox" className="mr-1"/>
                <label>Posting Title</label>
              </span>
            </div>
            <div className="flex flex-col">
              <span>
                  <input type="checkbox" className="mr-1"/>
                  <label>Posting Title</label>
                </span>
                <span>
                  <input type="checkbox" className="mr-1"/>
                  <label>Posting Title</label>
                </span>
            </div>
          </div>
          <div className="w-full">
            <table className="w-full">
                <thead className="w-full">
                  <tr className="flex justify-between w-full p-3">
                    <th>RATING</th>
                    <th>APPLICATION NAME</th>
                    <th>HIRING PIPELINE</th>
                    <th>APPLICATION STATUS</th>
                    <th>APPLICATION ID</th>
                    <th>POSTING TITLE</th>
                  </tr>
                </thead>
            </table>
            <div className="text-center">No Applications found</div>
            <div className="flex justify-end p-3">
              <select>
                <option>10 Records Per Page</option>
              </select>
            </div>
          </div>
      </div>
      <div>
        <div></div>
        <input placeholder="Here is your Smart Chat (Ctrl + Space)" className="w-full"/>
        <div></div>
      </div>
    </div>
  )
}
