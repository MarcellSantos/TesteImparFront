import React, { useState } from 'react'
import { BackgroundSearch, ImgGlass, InputButton, InputSearch } from './elements'
import glass from './../../assets/lupa.svg';
export default function SearchBar({SearchFun }:any) {
    const [searchValue, setsearchValue] = useState<string>("");

    return (
        <BackgroundSearch>
            
            <InputSearch id="search-bar-input" onChange={(e)=>setsearchValue(String(e.target.value))} />
            <InputButton onClick={(e)=>{
                    SearchFun(searchValue);
                }}>
                    <ImgGlass src={glass}/>
            </InputButton>
        </BackgroundSearch>
    )
}

