import React, { FC, useRef } from 'react'
import { Flex, useTheme, View } from "vcc-ui";
import ReactElasticCarousel from 'react-elastic-carousel';
import Slide from './slide';
import { Product } from '../../types/productData';
import ArrowButton from '../arrowButton';
import "../../styles/image-slider.css"

interface Props {
    filteredList: Product[]
}

const Slider: FC<Props> = ({ filteredList }) => {
    const theme = useTheme();
    const sliderRef = useRef<ReactElasticCarousel>(null)
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (

        <>
            <View
                extend={{
                    margin: "10px 0px"
                }}
            >
                <ReactElasticCarousel
                    isRTL={false}
                    breakPoints={breakPoints}
                    showArrows={false}
                    ref={sliderRef}
                >
                    {filteredList.map((car) => <Slide key={car.id} carData={car} />)}
                </ReactElasticCarousel>

            </View>
            <View
                extend={{
                    paddingRight: "10px",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                <Flex
                    extend={{
                        flexDirection: "row",
                        [theme.breakpoints.untilL]: {
                            display: "none"
                        }
                    }}>
                    <ArrowButton isLeft={true} onClick={() => {
                        if (sliderRef && sliderRef.current) {
                            // @ts-ignore
                            sliderRef.current.slidePrev()
                        }
                    }} />
                    <ArrowButton isLeft={false} onClick={() => {
                        if (sliderRef && sliderRef.current) {
                            // @ts-ignore
                            sliderRef.current.slideNext()
                        }
                    }} />
                </Flex>
            </View>
        </>
    )
}
export default React.memo(Slider);