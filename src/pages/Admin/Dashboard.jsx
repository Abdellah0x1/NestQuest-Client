import { FaUsers} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { useProperties, useUsers } from "../../hooks/useAdminData";
import Spinner from "../../components/Spinner";


import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export const bookingsLast12Months = [
  { month: "Mar 25", bookings: 62 },
  { month: "Apr 25", bookings: 71 },
  { month: "May 25", bookings: 84 },
  { month: "Jun 25", bookings: 112 },
  { month: "Jul 25", bookings: 138 },
  { month: "Aug 25", bookings: 129 },
  { month: "Sep 25", bookings: 97 },
  { month: "Oct 25", bookings: 88 },
  { month: "Nov 25", bookings: 76 },
  { month: "Dec 25", bookings: 104 },
  { month: "Jan 26", bookings: 92 },
  { month: "Feb 26", bookings: 79 },
];


function Dashboard() {
    const {data: users = [] , isLoading, isError} = useUsers();
    const {data: properties = []} = useProperties();

    if(isError) return <div>Error fetching data</div>
    if(isLoading) return <div  className="h-screen flex items-center justify-center"> 
        <Spinner size={100}/>
    </div>
    
    return (
        <div className="flex flex-col gap-10">
            <h2 className="font-bold text-2xl">Dashboard</h2>
           <div className="flex gap-5">
                <div className="border border-gray-300 rounded-md text-center p-4 shadow-md">
                    <h3 className="flex items-center gap-2 font-semibold text-gray-700">
                        <FaUsers/>
                        Total Customers
                    </h3>
                    <div className="font-bold text-xl">
                        {users.length}
                    </div>
                </div>
                <div className="border border-gray-300 rounded-md text-center p-4 shadow-md">
                    <h3 className="flex items-center gap-2 font-semibold text-gray-700">
                        <TbBrandBooking/>
                        Total Bookings
                    </h3>
                    <div className="font-bold text-xl">
                        35
                    </div>
                </div>
                <div className="border border-gray-300 rounded-md text-center p-4 shadow-md">
                    <h3 className="flex items-center gap-2 font-semibold text-gray-700">
                        <FaHouse/>
                        Total Properties
                    </h3>
                    <div className="font-bold text-xl">
                        {properties.length}
                    </div>
                </div>
                
           </div>
           <div className="w-300 h-100">
            <h2 className="mb-5 font-bold text-xl text-center">Booking Chart</h2>
                    <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bookingsLast12Months} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tickMargin={8} />
                    <YAxis tickMargin={8} />
                    <Tooltip />
                    <Line
                    type="monotone"
                    dataKey="bookings"
                    strokeWidth={2}
                    dot={false}
                    />
                </LineChart>
                </ResponsiveContainer>
                </div> 
        </div>
    )
}

export default Dashboard
