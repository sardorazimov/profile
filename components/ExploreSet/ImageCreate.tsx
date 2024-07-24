/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

const ImageCreate = () => {

    const [image_url, setImage_url] = useState("/");
    const [loading, setLoading] = useState(false);
    let inputRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
        setLoading(true);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }
    return (
        <div>
            <div className=''>
                <div className="">AI image <span>generator</span></div>
                <div className="">
                    <div className=""><img src={cn(`image_url === "/" ? default_image : image_url`)} alt="." /></div>
                    <div className="">
                        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                        <div className={loading ? "loading-text" : "display-none"}>Loading.....</div>
                    </div>
                </div>
                <div className="search-box">
                    <input type="text" ref={inputRef} className="search-input" placeholder="Describe what you want to see" />
                    <div className="generate-btn" onClick={() => { imageGenerator() }}>Generate</div>
                </div>
            </div>
        </div>
    )
}

export default ImageCreate
