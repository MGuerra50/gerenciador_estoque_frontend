interface props {
    title: string,
    value: string
}

export default function CardValueAndGraph({title, value}:props){
    return (
        <>
        <div className="text-lg font-semibold">
            <h2 className="pl-[5px]">{title}</h2>
            <div className="flex justify-center items-center text-[30px] mt-[40px] mb-[40px]">
              <span>{value}</span>
            </div>
          </div>
        </>
    );
}