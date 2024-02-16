"use client"
import TripCard from "@/components/TripCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
export default function Trips() {
    const [day, setDay] = useState<Number>()
    const [months, setMonths] = useState<string[]>([]);
    const [selectedMonth, setSelectedMonth] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Move the current month to the beginning
        let otherMonths: string[] = []
        if (monthNames.slice(currentMonth + 1).length < 6) {
            let restLen = 6 - monthNames.slice(currentMonth + 1).length;
            otherMonths = [...monthNames.slice(currentMonth + 1), ...monthNames.slice(0, restLen + 1)]
        }
        else {
            monthNames.slice(0, currentMonth)
            otherMonths = monthNames.slice(currentMonth + 1)
        }
        const sortedMonths: string[] = [
            monthNames[currentMonth],
            ...otherMonths
        ];

        setMonths(sortedMonths);
        setSelectedMonth(sortedMonths[0]); // Setting the default selected month
    }, []);

    const handleMonthChange = (e: any) => {
        setSelectedMonth(e.target.value);
    };
    return (
        <div className="w-full mx-auto mb-8">
            <h1 className="text-center text-2xl my-2 font-extralight mx-auto">
                Make memories and like-minded connections
            </h1>
            {/* Filtering Menu */}
            <div className="flex gap-4 justify-center items-center h-16 font-medium">
                <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="All Trips" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Trips</SelectItem>
                        <SelectItem value="mountains">Mountains</SelectItem>
                        <SelectItem value="treks">Treks</SelectItem>
                        <SelectItem value="beaches">Beaches</SelectItem>
                        <SelectItem value="cities">Cities</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder={selectedMonth} onChange={handleMonthChange} />
                    </SelectTrigger>
                    <SelectContent>
                        {months.map((month, index) => (
                            <SelectItem key={index} value={month}>{month}</SelectItem>
                        ))}

                    </SelectContent>
                </Select>
                <div className="border border-black flex h-12 items-center justify-center rounded-lg border-opacity-30 p-4 px-8 gap-8 ">
                    <h2 className="font-semibold">Days</h2>
                    <span className="space-x-4 font-light ">
                        <button onClick={() => setDay(1)} className={`${day == 1 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>1</button>
                        <button onClick={() => setDay(3)} className={`${day == 3 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>3</button>
                        <button onClick={() => setDay(5)} className={`${day == 5 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>5</button>
                        <button onClick={() => setDay(7)} className={`${day == 7 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>7</button>
                        <button onClick={() => setDay(9)} className={`${day == 9 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>9</button>
                        <button onClick={() => setDay(12)} className={`${day == 12 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>12</button>
                        <button onClick={() => setDay(15)} className={`${day == 15 ? 'bg-orange-400 bg-opacity-60' : ''} p-1 px-4 rounded-2xl`}>15</button>
                    </span>
                </div>
                <Select>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="India" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <TripCard id='1' title='Manali, Kasol, Manikaran, Kheerganga, Tosh, Kalga, Pulga' totalCount="15" filledCount='12' price="17000" baseLocation='Delhi' days="8" />
            <TripCard id='2' title='Chandigarh, Amritsar, Shimla' totalCount="12" filledCount='10' price="9000" baseLocation='Delhi' days="5" />
            <TripCard id='3' title='Jaipur, Udaipur, Pushkar, Mt. Abu' totalCount="10" filledCount='8' price="12000" baseLocation='Delhi' days="6" />
            <TripCard id='4' title='Kochi, Munnar, Alleppey, Kovalam' totalCount="15" filledCount='12' price="18000" baseLocation='Delhi' days="7" />


        </div>
    )
}