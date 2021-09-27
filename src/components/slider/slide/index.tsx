import React, { FC } from "react";
import { Flex, Block, Link, Text, Spacer, useTheme } from "vcc-ui";
import { Product } from "../../../types/productData";

interface Props {
    carData: Product
}
const Slide: FC<Props> = ({ carData }) => {
    const theme = useTheme();

    return (
        <Flex

            extend={{
                width: "100%",
                alignItems: "center",
            }}
        >
            <Flex
                extend={{
                    padding: "5px",
                }}
            >
                <Block
                    extend={{
                        display: "flex",
                    }}>
                    <Flex
                        extend={{
                        }}
                    >
                        <Text
                            variant="hillary"
                            as="h3"
                        >
                            {carData.bodyType}
                        </Text>
                        <Spacer />
                        <Flex
                            extend={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Text
                                variant="hillary"
                                subStyle="emphasis"
                            >
                                {carData.modelName}
                            </Text>
                            <Spacer />
                            <Text
                                fg="grey"
                            >
                                {carData.modelType}
                            </Text>

                        </Flex>
                    </Flex>

                </Block>

                <Spacer />
                <Flex
                    extend={{
                        height: "350px",
                        [theme.breakpoints.onlyS]: {
                            height: "250px"
                        }
                    }}
                >
                    <img src={carData.imageUrl} style={{ height: "100%" }} draggable="false" alt="Car" />
                </Flex>
            </Flex>

            <Flex
                extend={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}
            >
                <Link href={`/learn/${carData.id}`} arrow="right"> learn</Link>
                <Spacer size={{ default: 8, '@media (max-width: 768px)': 12 }} />
                <Link href={`/shop/product-/${carData.id}`} arrow="right"> Shop</Link>
            </Flex>

        </Flex>
    )
}
export default Slide