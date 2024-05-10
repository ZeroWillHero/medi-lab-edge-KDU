import ClientExp from "./ClientExp";
import NewsUpload from "./NewsUpload";
import { useState } from "react";

export default function AdminUpload() {
    const [nav,setNav]  = useState('news');
    const [file,setFile] = useState('');

    let content = "";

    switch(nav){
        case 'news':
            content = <NewsUpload />
            break;

        case 'client':
            content = <ClientExp />
            break;
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }


    
    return (
        <div>
            <h1 className="text-cyan-800 font-bold text-xl ps-5 mb-20">Uploads </h1>
            <div className="grid grid-cols-2 gap-2">
                <div className="border-2 border-cyan-800 border-dashed m-5 flex justify-center items-center cursor-pointer" onClick={() => document.querySelector('#file').click()}>
                    <h1 className="text-center text-lg font-bold text-cyan-800">
                        {file ? file.name : "Upload File"}
                    </h1>
                    <input type="file" className="hidden" id="file" onChange={handleFileChange} />
                </div>

                <div>
                    <div className="flex items-center gap-10">
                        <button className={nav === 'news' ? "font-bold text-cyan-800 bg-cyan-500 p-2 rounded-md": "font-bold text-cyan-800"} onClick={() => setNav('news')}>News</button>
                        <button className={nav === 'client' ? "font-bold text-cyan-800 bg-cyan-500 p-2 rounded-md": "font-bold text-cyan-800"} onClick={() => setNav('client')}>Client Experince</button>

                    </div>
                    {content}
                </div>
            </div>
        </div>
    )
}