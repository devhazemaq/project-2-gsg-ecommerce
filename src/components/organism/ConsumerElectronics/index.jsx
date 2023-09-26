import CardImgForSec4_5 from "@/components/molecules/CardImgForSec4_5"
import CardServType from "@/components/molecules/CardServType"
import StyleConsumerElectronics from "./style"


const ConsumerElectronics = () => {
  return (
    <StyleConsumerElectronics>
      <CardServType cardSrc="/sec5Consumer.png" cardText1="Consumer" cardText2="electronics and" cardText3= "gadgets"  /> 
      <CardImgForSec4_5 />
    </StyleConsumerElectronics>
  )
}

export default ConsumerElectronics