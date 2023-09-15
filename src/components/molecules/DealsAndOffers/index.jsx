import TitleOfSection from "@/components/atoms/TitleOfSection"
import { Body2 } from "@/components/atoms/typography"
import { StyleWraperDeals, StyledTime } from "./style"


const DealsAndOffers = () => {
  return (
    <StyleWraperDeals>

      <TitleOfSection textTitle={"Deals and offers"} className={"deal__title"}/>
      <Body2 className="deal__body">Hygiene equipments</Body2>
      <StyledTime >
      
        <div className="time__contain" >
          <span className="time__number" >40</span><span className="time__type" >Days</span>
        </div>
        <div className="time__contain" >
          <span className="time__number" >13</span><span className="time__type" >Hour</span>
        </div>
        <div className="time__contain" >
          <span className="time__number" >34</span><span className="time__type" >Min</span>
        </div>
        <div className="time__contain" >
          <span className="time__number" >56</span><span className="time__type" >Sec</span>
        </div>
        
      </StyledTime >

    </StyleWraperDeals>
  )
}

export default DealsAndOffers