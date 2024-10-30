import FirstContainer from '../Components/firstContainer/firstContainerComp.jsx';
import Rectangles from '../Components/2/rectangles.jsx';
import FeaturedCheaper from '../Components/3/FeaturedCheaper.jsx';
import Kaktuses from '../Components/4/kaktuses.jsx';
import RowContainerFeat from '../Components/5/rowContainerFeat.jsx';
import FifthContainer from '../Components/6/fifthContainer.jsx'
export default function HomePage(){
    return(
        <>
        <FirstContainer/>
        <Rectangles/>
        <FeaturedCheaper/>
        <Kaktuses/>
        <RowContainerFeat/>
        <FifthContainer/>
        </>
    )
}