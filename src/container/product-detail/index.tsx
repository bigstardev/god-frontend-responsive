import React, { FC } from "react";
import { useParams } from 'react-router-dom';
import { View, Flex, Block, Text, Link } from "vcc-ui"
import ProductData from "../../apis/cars.json"

const ProductDetail: FC = () => {

    const { id } = useParams<{ id: string }>();
    const productDetail = ProductData.find((product) => product.id === id);

    return (
        <View
            spacing={3}>
            <Block extend={{ textAlign: 'center' }}>
                <Text
                    variant="hillary"
                    as="h1"
                    subStyle="emphasis"

                >{productDetail?.id}</Text>
                <Text
                    variant="bates"
                    subStyle="emphasis"
                >{productDetail?.bodyType}</Text>
                <img src={productDetail?.imageUrl} alt="car" />

            </Block>
            <Flex
                extend={{
                    alignItems: "center"
                }}>
                <Link href={`/`} arrow="right"> Home</Link>

            </Flex>

        </View>
    )
}
export default ProductDetail;