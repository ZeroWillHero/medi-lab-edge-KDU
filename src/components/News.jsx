import NewsCard from "./NewsCard";
import { news } from "./Data";


export default function News() {
    return (
        <div>
            <h1 className="font-bold text-3xl text-center p-10">Latest News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-[4vw]">

                {news.map((item) => (
    
                    <NewsCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        created_at={item.created_at}
                        
                    />
                ))}
            </div>
        </div>
    )
}