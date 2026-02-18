'use client'
import { useSearchParams } from "next/navigation";
import { isDateInRange } from "@/helper/helper";
import TourCard from "./TourCard";

const TourList = ({ DummyTours }) => {
    const searchParams = useSearchParams();
    const { date , origin , destination } = {
        date : searchParams.get('date') || '',
        origin : searchParams.get('origin') || '',
        destination : searchParams.get('destination') || '',
    }
    
    const filteredDummyData = DummyTours.filter(tour => {
      if(origin && tour.origin.name.toLowerCase() !== origin.toLowerCase()) return false;
      if(destination && tour.destination.name.toLowerCase() !== destination.toLowerCase()) return false;
      if(date && !isDateInRange(date , tour.startDate , tour.endDate)) return false;

      return true
    })
    return (
        <>
            {
                filteredDummyData.length === 0 ? 
                <p className = "text-center text-base">متاسفیم ! 😔 توری با این جزئیات یافت نشد</p> :
                filteredDummyData.map(data => {
                    return(
                        <TourCard key = {data.id} { ...data }/>
                    )
                })
            }
        </>
    );
};

export default TourList;