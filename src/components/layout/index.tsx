import React, { FC, ReactNode } from 'react'
import { Grid } from "vcc-ui"

interface Props {
    children: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <Grid>
            {children}
        </Grid >
    )
}

export default Layout;
