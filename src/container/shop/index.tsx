import React, { FC } from "react";
import { useParams } from 'react-router-dom';
import { Grid, Row, Col, Block, Button, Text, Link } from "vcc-ui"
import ProductData from "../../apis/cars.json"
const Shop: FC = () => {


    const { id } = useParams<{ id: string }>();
    const productDetail = ProductData.find((product) => product.id === id);
    return (
        <Grid
        >
            <Row align="center"
                extend={{
                    alignItems: "center"
                }}
            >
                <Col size={12}>
                    <Text
                        variant="hillary"
                        as="h1"


                    >
                        Shop {productDetail?.id}
                    </Text>
                </Col>
            </Row>
            <Row>

                <Col size={4}>
                    <Text
                        variant="hillary"



                    >{productDetail?.id} Subscribe Online</Text>

                    <Link
                        href={`/`}>
                        <Button
                            variant="outline"
                        >Home</Button>
                    </Link>
                </Col>
            </Row>
            <Block extend={{ textAlign: 'center' }}>




            </Block>


        </Grid>
    )
}
export default Shop;