import React from 'react'
import { SelectInput } from "vcc-ui"
interface Props {
    value: string,
    changeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FilterProduct: React.FC<Props> = ({ value, changeFilter }) => {
    return (
        <SelectInput
            label={'Body Type'}
            value={value}
            onChange={changeFilter}>
            <option value="all">ALL</option>
            <option value="suv">SUV</option>
            <option value="estate">ESTATE</option>
            <option value="sedan">SEDAN</option>

        </SelectInput>
    )
}
