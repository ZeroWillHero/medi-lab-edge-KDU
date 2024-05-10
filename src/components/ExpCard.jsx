import profile from '../assets/profile/profile2.jpeg'

export default function ExpCard(props) {
    return (
        <div className='h-auto pb-5 w-64 mt-20 ms-5 shadow '>
            <div className='flex justify-center items-center gap-3'>
                <div className='h-16 w-16 rounded-full overflow-hidden bg-teal-700'>
                    <img className='h-fit w-fit ' src={profile} alt="profile" />
                </div>
                <div>
                    <h1 className='font-bold text-sm'>{props.name}</h1>
                    <h1 className='font-semibold text-xs'>{props.type}</h1>
                </div>
            </div>

            <p className='p-3 mt-3'>{props.comment}</p>
        </div>
    )
} 