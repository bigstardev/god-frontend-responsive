import React, { useState, useEffect, FC } from 'react'
import { Block, View, useTheme } from 'vcc-ui';
import { FilterProduct } from '../../components/filterProduct';
import Slider from '../../components/slider';
import { Product } from '../../types/productData';
import ProductData from "../../apis/cars.json"


const Home: FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [productFilter, setProductFilter] = useState<string>("all")
    const theme = useTheme();

    useEffect(() => {
        const carList = ProductData
        if (productFilter !== "all") {
            let filteredList = carList.filter((car) => car.bodyType === productFilter)
            setProducts(filteredList)
        }
        else { setProducts(carList) }
    }, [productFilter])

    return (
        <View>
            <View
                padding={[1, 2]}
            >
                <Block
                    extend={{
                        width: "50%",
                        margin: "auto",
                        marginTop: "20px",
                        [theme.breakpoints.fromL]: {
                            width: "20%"
                        }
                    }}
                >
                    <FilterProduct
                        value={productFilter}
                        changeFilter={
                            (e) => setProductFilter(e.target.value)
                        }
                    />
                </Block>
            </View>

            <View>
                <View>
                    <Slider filteredList={products} />
                </View>
            </View>
        </View>
    )
}



export default Home