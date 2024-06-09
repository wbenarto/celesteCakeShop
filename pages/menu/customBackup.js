<h1 className="p-8 md:py-10 border-b-2 font-mont border-black text-black text-center text-xl md:text-2xl">
          Custom Cake Order
        </h1>
        <form className=" gap-4   " onSubmit={handleOnSubmit}>
          <div className="flex-column py-2">
            <label className="flex my-4 pb-2 font-bold text-black" htmlFor="name">
              Customer Information
            </label>
            <input
              className="flex w-full p-2 border-2 rounded-md bg-white"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex-column py-2">
            <input
              className="flex w-full p-2 border-2 rounded-md "
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex-column py-2">
            <input
              className="flex w-full p-2 border-2 rounded-md "
              id="phone"
              type="number"
              name="phone"
              placeholder="Phone"
              required
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex mt-4 font-bold text-black" htmlFor="name">
              Order Details
            </label>
            <p className='text-black text-sm py-2'>Please allow 2 weeks to place custom order cakes.</p>
            <input
              className="flex w-full p-2 border-2 rounded-md  "
              id="date"
              type="text"
              name="date"
              placeholder="Pickup Date"
              required
            />
          </div>
          <div className="flex-column py-2">
            <textarea
              className="flex w-full h-32 p-2  border-2 rounded-md  overflow-wrap "
              id="description"
              type="text"
              name="description"
              placeholder="Description or Questions"
              required
            />
          </div>
          <div className="flex-column py-2">
          <div className="grid">
              {/* Size*/}
              <Dropdown
                options={sizeOptions}
                className=''
                title="Size"
                name='size'
                selection={size}
                handleSelection={handleSelection}
                required
              />
              {/* Base */}
              <Dropdown
                options={baseOptions}
                title="Base"
                name='baseFlavor'
                selection={base}
                handleSelection={handleSelection}
                required
              />
              {/* Fondant Flavor */}
              <Dropdown
                options={fondantOptions}
                title="Fondant / Buttercream"
                name='outerFlavor'
                selection={fondant}
                handleSelection={handleSelection}
                required
              />
               {/* Fondant Flavor */}
               <Dropdown
                options={fillingOptions}
                title="Filling"
                name='fillingFlavor'
                selection={filling}
                handleSelection={handleSelection}
              />
            </div>
          </div>
         
          <p className='text-black text-sm py-2 text-center'>We will respond to your inquiries with pricing estimates.</p>

          <div className="flex-column justify-center flex pb-4">
            <button
              className=" bg-[#F48CAA] w-40 h-10 gap-2 md:w-[150px] hover:animate-wiggle md:h-14 rounded-full mt-4 text-center flex justify-center text-white items-center"
              type="submit"
            >
              SUBMIT{" "}
            </button>
          </div>
        </form>