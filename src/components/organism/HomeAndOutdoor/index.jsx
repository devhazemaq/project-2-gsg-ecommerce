import CardImgOffersForSec3 from '@/components/molecules/CardImgOffersForSec3'
import DealsAndOffers from '@/components/molecules/DealsAndOffers'
import StyledWraper from './style'

const HomeAndOutdoor = () => {
  return (
    <StyledWraper>
      <DealsAndOffers/>
      <CardImgOffersForSec3 />
    </StyledWraper>
  )
}

export default HomeAndOutdoor