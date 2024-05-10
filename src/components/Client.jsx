import ExpCard from "./ExpCard";
import {client} from './Data';

export default function Client() {
    return (
        <div>
            <h1 className="font-bold text-3xl text-center p-10">Client Experinces</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                {client.slice(0,3).map ((item => (
                    <ExpCard
                    name={item.name}
                    type={item.type}
                    comment={item.comment}
                />
                )))}
                
            </div>
        </div>
    )

}