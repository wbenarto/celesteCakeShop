import React, { Fragment , useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import {
    AiFillCaretDown,
  } from "react-icons/ai";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const Dropdown = ({title, options, selection, handleSelection, name}) => {
  const [cur, setCur] = useState(selection)

  const handleClick = (e, title) => {
    handleSelection(e, title)
    setCur(e)
  }

    return (
        <Menu
                as="div"
                className="flex py-2 items-center "
                name="testname"
              >
                  <p className="p-1 text-sm text-gray-400 w-24 font-bold">{title} :</p>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-0 right-0 mr-10 md:mr-6 mt-32 w-1/2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="">
                        {options.map((e, i)=>(
                            <Menu.Item key={i} onClick={()=>handleClick(e, title)}>
                            {({ active }) => (
                              <div>
                                <p
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900 "
                                    : "text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {e}
                              </p>
                                
                              </div>
                              
                            )}
                          </Menu.Item>

                        ))}
                    </div>
                  </Menu.Items>
                </Transition>

                <Menu.Button name={name} value={cur} className="px-2 flex border-2 border-gray-200 items-center justify-between w-full  bg-white rounded-md h-10 text-sm md:text-base"><p>{selection} </p><AiFillCaretDown /></Menu.Button>
              </Menu>
    )


  }

  export default Dropdown