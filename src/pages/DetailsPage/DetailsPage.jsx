
const DetailsPage=() =>{
  return (
    <>
    <div className="flex flex-col gap-5 justify-start items-start">
        <h1>Mavericks</h1>
        <p>starts</p>
        <p>Ukraine</p>
        <div></div>
        <p>Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality.</p>
    </div>
    <div className="flex flex-row justify-start gap-10 flex-wrap mb-8">
        <p>Features</p>
        <p>Reviews</p>
    </div>
    <div className="flex flex-row justify-between flex-wrap">
        <div className="features flex flex-col flex-wrap gap-5">
            <div className="flex flex-row gap-5 justify-between flex-wrap">
            <div>
                Automatic
            </div>
            <div>
                AC
            </div>
            <div>
                Petrol
            </div>
            <div>
                Kitchen
            </div>
            <div>
                Radio
            </div>
            </div>

        <div className="flex flex-col gap-5 justify- flex-wrap">
        <p>Vehicle Details</p>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Form</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Length</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Width</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Height</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Tank</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Consumption</p>
            <p>2</p>
        </div>
        </div>
    </div>
    {
        <div>
            <div className="flex flex-row">
                <img src="" alt="" />
                <div className="flex flex-col">
                    <p></p>
                    <div></div>
                </div>
            </div>
            <p className="comment"></p>
        </div>
    }

    <div className="comments flex flex-col items-start gap-1">
        <p>Book your campervan now</p>
        <p>Stay connected! We are always ready to help you.</p>
        <form action="" className="flex flex-col gap-2 mt-3">
            <input type="text" placeholder="Name*"/>
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Booking date*" />
            <input type="text" placeholder="Comment*"/>
            <button className="bg-red-500 text-slate-50 flex self-center">Send</button>
        </form>
    </div>
    </div>

    </>
  )
}

export default DetailsPage;