
const CatalogPage=()=>{
  return (
    <>
        <div id="leftSection" className="flex flex-col gap-4 items-start">
            <div className="flex flex-col gap-4 items-start">
                <p className="text-slate-500">Location</p>
                <input type="select" placeholder="Kyiv, Ukraine"></input>
            </div>
            <div id="vehicleType" className="flex flex-col gap-4 items-start">
                <p className="text-slate-500">Filters</p>
                <p>Vehicle Equipment</p>
                <div className="flex flex-wrap gap-2">
                    <div>
                        <img src="" alt="" />
                        <p>AC</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Automatic</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Kitchen</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>TV</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Bathroom</p>
                    </div>
            </div>
        </div>
                <div id="vehicleType" className="flex flex-col gap-4 items-start">
                <p>Vehicle Type</p>
                <div className="flex flex-wrap gap-2">
                    <div>
                        <img src="" alt="" />
                        <p>Van</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Fully integrated</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Alcove</p>
                    </div>
            </div>
            </div>
            <button className="flex bg-red-600 text-amber-50 w-22 h-10 p-2">Search</button>
        </div>
        <div id="rightSection">

        </div>
    </>

  )
}

export default CatalogPage;